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
            description: 'The studio is named in honor of the town of Hasami in the Nagasaki Prefecture of Japan, where traditional ceramics have been crafted since the Edo period four hundred years ago.',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'Latte Cup and Saucer',
            price: 35,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Blue%20Bottle%20Latte%20Cup%20and%20Saucer/Blue-Bottle-Latte-Cup-and-Saucer-M1-Hero.png',
            description: 'We’ve long loved Japanese ceramic company Kinto’s Topo line for its playful asymmetry. So we collaborated with Kinto designer Shin Azumi to create these unique ceramics for our Japan cafes. Soon after, we realized the world needed to see them.',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'Jaesik Ceramic Cup                   ',
            price: 58,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Holiday%202022%20Collection/Merch%20/Jaesik%20Mug/Jaesik-Ceramics-Mug-M1-Hero_2.png',
            description: 'We collaborated with Los Angeles-based ceramicist Daniel Lee on this handmade cup. His Korean heritage influences his artistry and philosophy, inspiring designs that meld worlds. This piece features a glazing style historically associated with pottery reserved for Korean government officials. However, he modernizes the cup by substituting stoneware for classic porcelain.',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'Hasami Stackable Cups',
            price: 36,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Holiday%202022%20Collection/Merch%20/Hasami%20Stackable%20/Hasami-Stackable-Cup-Set-M1-Hero.png',
            description: 'Our new latte cup set, from Japan-based designers Hasami Porcelain, is made for sharing lattes as beautiful and sophisticated as the conversations you enjoy while sipping them. As a stackable set of two, these simple and timeless porcelain cups will be the vessel you reach for every morning for you and your partner.',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Cafe Cup & Cookie Plate',
            price: 33,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Blue%20Bottle%20Coffee%20x%20Kinto:%20Cafe%20Cup%20and%20Cookie%20Plate/BBCxKinto-Cafe-Cup-and-Cookie-Plate-M1-Hero.png',
            description: 'Once again, we teamed up with our favorite drinkware craftspeople at Kinto in Japan to add a little extra room in your morning coffee routine for a delightful treat. Our luminous Kinto Cafe Cup is now paired with a maple wood saucer giving you enough room for your favorite coffee-accompanying cookie. Plus, the wide-mouthed cup is perfect for dunking. Yes, we thought of everything.',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Kinto Double-Walled Set',
            price: 34,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Kinto%20Kronos%20Glass/Kinto-Kronos-Glass-M1-Hero.png',
            description: 'Round out your minimalist drinkware collection with this set of two elegant glasses. Double-walled insulation means you can sip as slowly as you like while your coffee stays at just the right temperature, whether you’re drinking an icy cold brew or piping-hot pour over.',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Hario Range Server',
            price: 30,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Hario%20Range%20Server%20(NOT%20READY)/Hario-Range-Server-M1-Hero.png',
            description: 'Serve pour overs like a pro with this elegant glass decanter from Hario. Holds 360 ml, or about two 6 oz cups of coffee. Designed and manufactured by Hario in Japan.',
            quantity: 30,
            category: categories[2]._id
        },        
        {
            name: 'Coffee Carae',
            price: 28,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Coffee%20Carafe/Coffee-Carafe-M1-Hero.png',
            description: 'You might recognize this pristine carafe from a visit to one of our cafes. We hand-brew pour overs using our Coffee Carafe in cafes from New York City to Tokyo.',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'JFellow Ode Grinder',
            price: 225,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Fellow%20Ode%20Grinder%20(Black)/Fellow-Ode-Grinder-Black-M1-Hero.png',
            description: 'The power and precision of a professional grinder wrapped in the elegance you want for your kitchen. Name your favorite brewed coffee method—pour over, French press, AeroPress, cold brew—and the Ode’s got you covered, in flawless style.',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'Ceramic Coffee Mill',
            price: 52,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Hario%20Skerton+%20Ceramic%20Coffee%20Mill/Hario-Skerton-Ceramic-Coffee-Mill-M1-Hero.png',
            description: 'You’ll love this manual grinder for its consistent grind size, portability, and ease of use. Ceramic conical burrs accurately grind a full range of sizes, from fine espresso to coarse French press.',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'Baratza Encore Grinder',
            price: 150,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Baratza%20Encore%20Grinder%20(Black)/Baratza-Encore-Grinder-Black-M1-Hero.png',
            description: 'Accurate grind size is key to brewing cafe-quality coffee. That’s why we rely on this exact Baratza Encore model in our headquarters. Think of this entry-level conical burr grinder as the ideal marriage of affordability and superior function.',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'Home Coffee Grinder',
            price: 530,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Baratza%20Vario%20+%20Grinder%20(READY)/Baratza-Vario-Plus-Grinder-M1-Hero.png',
            description: 'Grind like professionals, keep a sleek footprint. Over 220 settings give you control over grind size. A backlit LCD display makes coffee prep a breeze, even in low morning light.',
            quantity: 30,
            category: categories[2]._id
        },
        {
            name: 'Wood Pouring Kettle',
            price: 68,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Wood-Handled%20Pouring%20Kettle/Wood-Handled-Pouring-Kettle-M1-Hero.png',
            description: 'This kettle from Aoyoshi is one of our warmer kettles, with more character than most. Natural wood accents accompany a matte stainless steel drip pot for a more vintage look, with the most current design inspired by engineers.',
            quantity: 30,
            category: categories[2]._id
        },    
        {
            name: 'Fellow Pour Kettle',
            price: 125,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Fellow%20Stagg%20Stovetop%20Pour%20Over%20Kettle/Fellow-Stagg-Stovetop-Pour-Over-Kettle-M1-Hero.png',
            description: 'When it comes to delicious coffee, every aspect of your pour-over ritual plays a part, from the grind of your beans to the rate of your bloom. With its precision-pour spout, the Stagg™ Mini Pour-Over Kettle gives you total control over the volume and speed of every pour, allowing you to create a cup that matches your instrument in elegance and beauty. ',
            quantity: 30,
            category: categories[2]._id
        },    
        {
            name: 'Balmuda Kettle',
            price: 150,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Merch%20PDPs/Balmuda%20Kettle%20/Balmuda-Kettle-M1-Hero.png',
            description: 'Our most effortless and lightweight electric kettle yet. With design based on ergonomic research, this electric kettle offers a pour that’s smooth, seamless, and precise. The graceful swan neck allows you to control the speed and exact position of your pour.',
            quantity: 30,
            category: categories[2]._id
        },    
        {
            name: 'Hario Buono Kettle',
            price: 60,
            image: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/Hario-Buono-Kettle-M1-Hero_oeyicm.png',
            description: 'The Hario Buono kettle is an indispensable tool for carefully executing pour over coffee. Its slender swan-neck and easy-grip handle make it a pleasant and graceful introduction to the challenges of the slow pour. And the metallic, beehive-inspired body adds a fun bit of funk to the aesthetic—a touch from Hario we love.',
            quantity: 30,
            category: categories[2]._id
        },  
        {
            name: 'No Name Decaf Blend',
            price: 15,
            image: 'https://cdn.shopify.com/s/files/1/0628/8772/3181/products/mockupbagsdecafblend.jpg?v=1665512523&width=800',
            description: 'Decaf coffee',
            quantity: 30,
            category: categories[0]._id
        }, 
        { 
            name: 'The Vault Blend 80/20',
            price: 15,
            image: 'https://cdn.shopify.com/s/files/1/0628/8772/3181/products/mockupbagsthevault.jpg?v=1665512788&width=800',
            description: 'coffee',
            quantity: 30,
            category: categories[0]._id
        },        
        {
            name: 'Coral Coast Blend',
            price: 15,
            image: 'https://cdn.shopify.com/s/files/1/0628/8772/3181/products/mockupbagscoralcoast.jpg?v=1665512520&width=800',
            description: 'coffee',
            quantity: 30,
            category: categories[0]._id
        },        
        {
            name: 'Mesa Blend',
            price: 15,
            image: 'https://cdn.shopify.com/s/files/1/0628/8772/3181/products/mockupbagsmesa.jpg?v=1665418801&width=800',
            description: 'Coffee',
            quantity: 30,
            category: categories[0]._id
        },{
            name: '10$ Gift Card',
            price: 10,
            image: 'https://www.zazzle.com/rlv/svc/view?realview=113466622742179623&design=9b618514-9b5c-47aa-a945-4cb630f02d7f&style=3.5x2&media=18ptsemi_gloss&cornerstyle=allrounded&envelopes=none&max_dim=1080&zattribution=none&cacheDefeat=1681431528947',
            description: 'Coffe Beans',
            quantity: 30,
            category: categories[1]._id
        },
        {
            name: '25$ Gift Card',
            price: 25,
            image: 'https://www.zazzle.com/rlv/svc/view?realview=113466622742179623&design=9b618514-9b5c-47aa-a945-4cb630f02d7f&style=3.5x2&media=18ptsemi_gloss&cornerstyle=allrounded&envelopes=none&max_dim=1080&zattribution=none&cacheDefeat=1681431589864',
            description: 'Coffe Beans',
            quantity: 30,
            category: categories[1]._id
        },
        {
            name: '50$ Gift Card',
            price: 50,
            image: 'https://www.zazzle.com/rlv/svc/view?realview=113466622742179623&design=9b618514-9b5c-47aa-a945-4cb630f02d7f&style=3.5x2&media=18ptsemi_gloss&cornerstyle=allrounded&envelopes=none&max_dim=1080&zattribution=none&cacheDefeat=1681431632211',
            description: 'Coffe Beans',
            quantity: 30,
            category: categories[1]._id
        },
        {
            name: '100$ Gift Card',
            price: 100,
            image: 'https://www.zazzle.com/rlv/svc/view?realview=113466622742179623&design=cc6f0210-5e04-4980-b56c-b6f895f02fe8&style=3.5x2&media=18ptsemi_gloss&cornerstyle=allrounded&envelopes=none&max_dim=1080&zattribution=none&cacheDefeat=1681675868257',
            description: '100$ Gift card',
            quantity: 30,
            category: categories[1]._id
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