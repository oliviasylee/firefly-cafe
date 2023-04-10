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
        }
    ])
    console.log('products seeded');
    
    process.exit();
})  