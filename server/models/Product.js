const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0.99
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        quantity: {
            type: Number,
            min: 0,
            default: 0
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
    });

    const Product = model('Product', productSchema);

    module.exports = Product;