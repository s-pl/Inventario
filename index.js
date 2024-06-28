
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const add = require('./src/routes/addProduct')
const all = require('./src/routes/allProducts')
const del = require('./src/routes/deleteProduct')
const update = require('./src/routes/updateProduct')
const getProduct = require('./src/routes/getProduct')

app.use('/static', express.static(__dirname + '/src/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/src/public/index.html");
});


app.use('/', add)
app.use('/', del)
app.use('/', all)
app.use('/', update)
app.use('/', getProduct)







  



app.listen(3000, function() {
    console.log("Servidor iniciado");
});
