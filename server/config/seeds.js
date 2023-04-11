const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Food' },
        { name: 'Coffee' },
        { name: 'GiftCards' },
        { name: 'GiftShop'}
      ]);
    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Sandwich',
            price: 4.99,
            image: '',
            description: 'Classic Sandwhich',
            quantity: 30,
            category: categories[0]._id
        },
        {
            name: 'Single-Origin',
            price: 10.99,
            image: 'One 12 oz bag of seasonal, fresh-roasted coffees selected every two weeks by our Coffee Department and delivered directly to you',
            description: 'Coffe Beans',
            quantity: 30,
            category: categories[1]._id
        },
        {
            name: 'Gift Card',
            price: 99.99,
            image: '',
            description: '100$ Gift card',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'Flying Penguin Hat',
            price: 34.99,
            image: '',
            description: 'HAT',
            quantity: 10,
            category: categories[3]._id
        },
    ])
    console.log('products seeded');
    
    await User.deleteMany();

    await User.create({
        firstName: 'Olivia',
        lastName: 'Lee',
        username: 'oslee',
        email: 'oslee@gmail.com',
        password: 'password12345',
        orders: [
        {
            products: [products[1]._id, products[2]._id]
        }
        ]
    });

    await User.create({
        firstName: 'Minjae',
        lastName: 'Cho',
        username: 'minjaeC',
        email: 'mjc@gmail.com',
        password: 'password12345',
        orders: [
        {
            products: [products[0]._id, products[3]._id]
        }
        ]
    });

    console.log('users seeded');

    process.exit();
})  