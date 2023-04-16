const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    orders: [Order]
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    price: Float
    image: String
    description: String
    quantity: Int
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Newsletter {
    _id: ID
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    oneUser: User!
    users: [User]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    updateUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): User
    removeUser: String!
    updateProduct(_id: ID!, quantity: Int!): Product
    addOrder(products: [ID]!): Order
    subscribeEmail(email: String!): Newsletter
  }
`;

module.exports = typeDefs;