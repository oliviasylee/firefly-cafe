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
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user)

      return { token, user}
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if(!user) {
        throw new AuthenticationError('User does not exist!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
        throw new AuthenticationError('Incorrect Password');
      }

      const token = signToken(user);
      return { token, user };
    },
  },

  
};

module.exports = resolvers;