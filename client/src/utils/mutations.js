import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!){
    login(username: $username, password: $password){
      token  
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
    ) {
      addUser(
        firstName: $firstName
        lastName: $lastName
        username: $username
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

export const SUBSCRIBE_EMAIL = gql`
  mutation SubscribeEmail($email: String!) {
    subscribeEmail(email: $email) {
      _id
      email
    }
  }
`;