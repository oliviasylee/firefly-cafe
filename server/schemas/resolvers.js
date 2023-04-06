const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
      user: async () => {
        return User.find()
      },

      user: async (parent, { username }) => {
        return User.findOne({ username });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id})
        }
      }
      },
      
  Mutation: {
    
  },
};

module.exports = resolvers;