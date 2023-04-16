const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'CoffeeBean' },
        { name: 'GiftCards' },
        { name: 'Goods'}
      ]);
    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        
        {
            name: 'Hasami Natural Mug ',
            price: 40,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Hasami%20Natural%20Mug%20with%20Saucer/Hasami-Natural-Mug-with-Saucer-M1-Hero.png',
            description: '100$ Gift card',
            quantity: 30,
            category: categories[0]._id
        },
        {
            name: 'Latte Cup and Saucer',
            price: 35,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Blue%20Bottle%20Latte%20Cup%20and%20Saucer/Blue-Bottle-Latte-Cup-and-Saucer-M1-Hero.png',
            description: '100$ Gift card',
            quantity: 30,
            category: categories[1]._id
        },
        {
            name: 'Jaesik Ceramic Cup                   ',
            price: 58,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Holiday%202022%20Collection/Merch%20/Jaesik%20Mug/Jaesik-Ceramics-Mug-M1-Hero_2.png',
            description: '100$ Gift card',
            quantity: 30,
            category: categories[1]._id
        },
        {
            name: 'Hasami Stackable Cups',
            price: 36,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Holiday%202022%20Collection/Merch%20/Hasami%20Stackable%20/Hasami-Stackable-Cup-Set-M1-Hero.png',
            description: 'Mug',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Cafe Cup & Cookie Plate',
            price: 33,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Blue%20Bottle%20Coffee%20x%20Kinto:%20Cafe%20Cup%20and%20Cookie%20Plate/BBCxKinto-Cafe-Cup-and-Cookie-Plate-M1-Hero.png',
            description: 'Mug',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Kinto Double-Walled Set',
            price: 34,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Kinto%20Kronos%20Glass/Kinto-Kronos-Glass-M1-Hero.png',
            description: 'Mug',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Hario Range Server',
            price: 30,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Hario%20Range%20Server%20(NOT%20READY)/Hario-Range-Server-M1-Hero.png',
            description: 'Mug',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Coffee Carae',
            price: 28,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Coffee%20Carafe/Coffee-Carafe-M1-Hero.png',
            description: 'Mug',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'JFellow Ode Grinder',
            price: 225,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Fellow%20Ode%20Grinder%20(Black)/Fellow-Ode-Grinder-Black-M1-Hero.png',
            description: 'The power and precision of a professional grinder wrapped in the elegance you want for your kitchen',
            quantity: 30,
            category: categories[1]._id
        },
        {
            name: 'Ceramic Coffee Mill',
            price: 52,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Hario%20Skerton+%20Ceramic%20Coffee%20Mill/Hario-Skerton-Ceramic-Coffee-Mill-M1-Hero.png',
            description: 'You’ll love this manual grinder for its consistent grind size, portability, and ease of use.',
            quantity: 30,
            category: categories[1]._id
        },
        {
            name: 'Baratza Encore Grinder',
            price: 150,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Baratza%20Encore%20Grinder%20(Black)/Baratza-Encore-Grinder-Black-M1-Hero.png',
            description: 'Accurate grind size is key to brewing cafe-quality coffee.',
            quantity: 30,
            category: categories[1]._id
        },
        {
            name: 'Home Coffee Grinder',
            price: 530,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Baratza%20Vario%20+%20Grinder%20(READY)/Baratza-Vario-Plus-Grinder-M1-Hero.png',
            description: 'Grind like professionals, keep a sleek footprint. Over 220 settings give you control over grind size. A backlit LCD display makes coffee prep a breeze, even in low morning light.',
            quantity: 30,
            category: categories[0]._id
        },
        {
            name: 'Wood Pouring Kettle',
            price: 68,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Wood-Handled%20Pouring%20Kettle/Wood-Handled-Pouring-Kettle-M1-Hero.png',
            description: 'Kettle',
            quantity: 30,
            category: categories[2]._id
        },    
        {
            name: 'Fellow Pour Kettle',
            price: 125,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Fellow%20Stagg%20Stovetop%20Pour%20Over%20Kettle/Fellow-Stagg-Stovetop-Pour-Over-Kettle-M1-Hero.png',
            description: 'Kettle',
            quantity: 30,
            category: categories[2]._id
        },    
        {
            name: 'Balmuda Kettle',
            price: 150,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Balmuda%20Kettle%20/Balmuda-Kettle-M1-Hero.png',
            description: 'Kettle',
            quantity: 30,
            category: categories[2]._id
        },    
        {
            name: 'Hario Buono Kettle',
            price: 60,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Hario-Buono-Kettle-M1-Hero_oeyicm.png',
            description: 'Kettle',
            quantity: 30,
            category: categories[2]._id
        },  
        {
            name: 'No Name Decaf Blend',
            price: 15,
            image: 'https://cdn.shopify.com/s/files/1/0628/8772/3181/products/mockupbagsdecafblend.jpg?v=1665512523&width=800',
            description: 'coffee',
            quantity: 30,
            category: categories[2]._id
        }, 
        { 
            name: 'The Vault Blend 80/20',
            price: 15,
            image: 'https://cdn.shopify.com/s/files/1/0628/8772/3181/products/mockupbagsthevault.jpg?v=1665512788&width=800',
            description: 'coffee',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Coral Coast Blend',
            price: 15,
            image: 'https://cdn.shopify.com/s/files/1/0628/8772/3181/products/mockupbagscoralcoast.jpg?v=1665512520&width=800',
            description: 'coffee',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Mesa Blend',
            price: 15,
            image: 'https://cdn.shopify.com/s/files/1/0628/8772/3181/products/mockupbagsmesa.jpg?v=1665418801&width=800',
            description: 'Coffee',
            quantity: 30,
            category: categories[2]._id
        },{
            name: '10$ Gift Card',
            price: 10,
            image: 'https://www.zazzle.com/rlv/svc/view?realview=113466622742179623&design=9b618514-9b5c-47aa-a945-4cb630f02d7f&style=3.5x2&media=18ptsemi_gloss&cornerstyle=allrounded&envelopes=none&max_dim=1080&zattribution=none&cacheDefeat=1681431528947',
            description: 'Coffe Beans',
            quantity: 30,
            category: categories[0]._id
        },
        {
            name: '25$ Gift Card',
            price: 25,
            image: 'https://www.zazzle.com/rlv/svc/view?realview=113466622742179623&design=9b618514-9b5c-47aa-a945-4cb630f02d7f&style=3.5x2&media=18ptsemi_gloss&cornerstyle=allrounded&envelopes=none&max_dim=1080&zattribution=none&cacheDefeat=1681431589864',
            description: 'Coffe Beans',
            quantity: 30,
            category: categories[0]._id
        },
        {
            name: '50$ Gift Card',
            price: 50,
            image: 'https://www.zazzle.com/rlv/svc/view?realview=113466622742179623&design=9b618514-9b5c-47aa-a945-4cb630f02d7f&style=3.5x2&media=18ptsemi_gloss&cornerstyle=allrounded&envelopes=none&max_dim=1080&zattribution=none&cacheDefeat=1681431632211',
            description: 'Coffe Beans',
            quantity: 30,
            category: categories[0]._id
        },
        {
            name: '100$ Gift Card',
            price: 100,
            image: 'https://www.zazzle.com/rlv/svc/view?realview=113466622742179623&design=cc6f0210-5e04-4980-b56c-b6f895f02fe8&style=3.5x2&media=18ptsemi_gloss&cornerstyle=allrounded&envelopes=none&max_dim=1080&zattribution=none&cacheDefeat=1681675868257',
            description: '100$ Gift card',
            quantity: 30,
            category: categories[0]._id
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
            products: [products[1]._id, products[2]._id]
        }
        ]
    });

    console.log('users seeded');

    process.exit();
})  