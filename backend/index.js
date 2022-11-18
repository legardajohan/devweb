const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8000; 

const router =require('./routes/route');

app.use(express.json());

app.use(router);

let promise = mongoose.connect('mongodb://localhost:27017/bookexchangedb');

app.listen(port, () => {
    promise
        .then(() => console.log('Conectado a la base de datos: BookExchangeDB'))
        .catch(() => console.error('No se pudo conectar a la base de datos'))
    console.log(`La app esta corriendo en el puerto: ${port}`);
})