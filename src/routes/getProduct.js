const express = require('express')
const router = express.Router()
const db = require('../firebase')
router.get('/product', async function(req, res) {
    try {
        const product = await db.getProductById(req.query.id);
        if (product) {
            res.send(product);
        } else {
            console.log('Product not found or specifications not available.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});



module.exports = router