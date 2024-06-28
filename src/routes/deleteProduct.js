const express = require('express')
const router = express.Router()
const db = require('../firebase')

router.delete('/deleteProduct', async function(req, res) {
    if (req.query.id) {
        try {
            await db.deleteProduct(req.query.id);
            res.json({
                ok: "Eliminado con éxito"
            });
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    } else {
        res.status(500).json({
            error: "No has proporcionado una id!"
        });
    }
});


module.exports = router