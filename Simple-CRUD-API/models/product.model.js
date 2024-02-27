const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name for this product.'],
        },

        description: {
            type: String,
            required: [true, 'Please provide a description for this product.'],
        },

        price: {
            type: Number,
            required: [true, 'Please provide a price for this product.'],
            default: 0,
        },
        
        ingredients: {
            type: [String],
            required: [true, 'Please provide ingredients for this product.'],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        image: {
            type: String,
            required: false,
        },
    },

    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;