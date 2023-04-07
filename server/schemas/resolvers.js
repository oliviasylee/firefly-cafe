const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
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
      categories: async () => {
        return await Category.find();
      },
      products: async (parent, { category, name }) => {
        const params = {};
        
        if (category) {
          params.category = category;
        }
        
        if (name) {
          params.name = {
            $regex: name
          };
        }
        
        return await Product.find(params).populate('category');
      },
       product: async (parent, { _id }) => {
        return await Product.findById(_id).populate('category');
       },
       user: async (parent, args, context) => {
         if (context.user) {
           const user = await User.findById(context.user._id).populate({
             path: 'orders.products',
             populate: 'category'
            });
            
            user.orders.sort((x, y) => y.purchaseDate - x.purchaseDate)
            
            return user
          }
          
          throw new AuthenticationError('You are Not logged In.')
        },
        
        order: async(parent, { _id }, context ) => {
          if (context.user) {
            const user =  await User.findById(context.user._id).populate({
              path: 'orders.products',
              populate: 'category'
            });
            
            return user.order.id(_id);
          }
          
          throw new AuthenticationError('You are Not logged In.')
        },
        
        checkout: async (parent, args, context) => {
          const url = new URL(context.headers.referer).origin;
          const order = new Order({ products: args.products });
          const line_items = [];
          
          const { products } = await order.populate('products');
          
          for (let i = 0; i < products.length; i++) {
            const product = await stripe.products.create({
              name: products[i].name,
              description: products[i].description,
              images: [`${url}/images/${products[i].image}`]
            });
            
            const price = await stripe.prices.create({
              product: product.id,
              unit_amount: products[i].price * 100,
              currency: 'usd',
            });
            
            line_items.push({
              price: price.id,
              quantity: 1
            });
        }
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
        
        return { session: session.id };
      },
      
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
    updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(
            context.user._id,
            args,
            { new: true}
            );
        }

        throw new AuthenticationError('You are Not logged In.');
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in...');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
          _id,
        { $inc: { quantity: decrement } },
        { new: true }
        );
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });
        
        await User.findByIdAndUpdate(
          context.user._id,
          { $push: {orders: order} } 
          );
          
          return order;
        }
        
        throw new AuthenticationError('You are Not logged In.')
      },
      
    },
    };
    
    module.exports = resolvers;