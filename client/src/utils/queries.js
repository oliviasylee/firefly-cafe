// queries
import { gql } from '@apollo/client';

export const GET_USER = gql`
    query Query {
        user {
            firstName
            lastName
            username
            email
            orders {
                _id
                purchaseDate
                products {
                    _id
                    name
                    price
                    quantity
                    description
                }
            }
        }
    }
`;
export const QUERY_PRODUCTS =gql`
    query getProducts($category: ID){
        products(category: $category) {
            _id
            name
            price
            image
            quantity
            description
            category {
                _id
            }
        }
    }
`;

export const QUERY_CATEGORIES = gql`
    {
        categories {
            _id
            name
        }
    }
`;

export const QUERY_CHECKOUT = gql `
    query getCheckout($products: [ID]!){
        checkout(products: $products){
            session
        }
    }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;