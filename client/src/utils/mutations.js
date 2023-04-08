import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!){
    login(username: $username, password: $password){
      token
      user{
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    ) {
      AddUser(
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      ) {
        token
        user {
          _id
        }
      }
    }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;