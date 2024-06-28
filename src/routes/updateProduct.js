const express = require('express')
const router = express.Router()
const db = require('../firebase')

router.post('/update', async function(req, res) {
    const { id, id_producto, description, name, price, quantity, brand, color, dimensions, model, weight, supplier } = req.body;

   
    if (!id) {
        return res.status(400).json({
            error: "No has proporcionado una id!"
        });
    }

    console.log(req.body);

    try {
       
        if (!description || !id_producto || !name || !price || !quantity || !brand || !color || !dimensions || !model || !weight || !supplier) {
            return res.status(400).json({
                error: "Faltan campos requeridos en el cuerpo de la solicitud!"
            });
        }

        const today = new Date();
        const lastUpdated = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

        await db.updateProductById(id, {
            description,
            id: id_producto,
            lastUpdated,
            name,
            price,
            quantity,
            specifications: {
                brand,
                color,
                dimensions,
                model,
                weight
            },
            supplier
        });
        res.redirect('/');
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});



module.exports = router