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
  } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

function CategoryMenu() {
  
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

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
          <h2>Filter by <FilterListIcon fontSize='small' style={{ color: 'black' }} /></h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            categoriesWithAll.map((item) => (
              <Button
                key={item._id}
                variant='outlined'
                size='medium'
                color='info'
                onClick={() => {
                  handleClick(item._id);
                }}
              >
                {item.name}
              </Button>
            ))
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CategoryMenu;