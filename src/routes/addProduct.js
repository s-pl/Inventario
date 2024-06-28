const express = require('express')
const router = express.Router()
const db = require('../firebase')

router.post('/AddProduct', async function(req, res) {
    const { id,name, description, quantity, price, supplier, brand, model, color, weight, dimensions } = req.body;


        try {
            const today = new Date().toISOString().split('T')[0]; 
            await db.addProduct({
                id,
                name,
                description,
                quantity,
                price,
                supplier,
                dateAdded: today,
                lastUpdate: new Date().toISOString().split('T')[0],
                specifications: {
                    brand,
                    model,
                    color,
                    weight,
                    dimensions
                }
            });
            res.redirect("/")
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    })



    module.exports = router

