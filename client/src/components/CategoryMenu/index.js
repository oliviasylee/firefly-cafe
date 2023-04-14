import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import { 
  Container,
  Grid, 
  Button, 
  Typography,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  const { categories, currentCategory } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id === 'all' ? '' : id,
    });
  };  

  const categoriesWithAll = [{ _id: 'all', name: 'All' }, ...categories];

  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
          <h2 style={{ marginTop: '0' }}>
            Filter by <FilterListIcon fontSize='small' style={{ color: 'black', margin: '0' }} />
          </h2>
          {loading ? (
            <>Loading...</>
          ) : (
            categoriesWithAll.map((item) => (
              <Button
                key={item._id}
                variant='text'
                sx={{ mr: 1, color: 'black' }} 
                onClick={() => {
                  handleClick(item._id);
                }}>
               <Typography
                  component='span'
                  sx={{
                    color: 'black',
                    borderBottom: currentCategory === item._id ? '2px solid black' : 'none',
                    fontWeight: (currentCategory === item._id || (!currentCategory && item._id === 'all')) ? 'bold' : 'normal',
                  }}>
                  
                  {item.name}
                </Typography>
              </Button>
            ))
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CategoryMenu;