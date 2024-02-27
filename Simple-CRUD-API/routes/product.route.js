const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller');

// Get all products
router.get('/', getProducts);

// Get a single product
router.get('/:id', getProduct);

// Create a new product
router.post('/', createProduct);

// Update a product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);



module.exports = router;