const express = require('express')
const router = express.Router()
const db = require('../firebase')

router.get('/products', async function(req, res) {
    try {
        const products = await db.getAllInventory();
        
        if (products) {
            res.json(products);
        } else {
            console.log('Error.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


module.exports = router