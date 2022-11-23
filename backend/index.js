const express = require('express');
const mongoose = require('mongoose');
// configurando CORS
const  cors = require('cors');
// definimos el host al que damos acceso
const bookExchangeApp = 'http://localhost:3000';

const app = express();
const port = 8000; 
app.use(cors());

const router =require('./routes/route');

app.use(express.json());

app.use(router);
// Usamos como Middlewere
// app.use(cors());

// usamos CORS para dar acceso al front
// app.use(cors({
//     origin: bookExchangeApp
// }));

let promise = mongoose.connect('mongodb://localhost:27017/bookexchangedb');

app.listen(port, () => {
    promise
        .then(() => console.log('Conectado a la base de datos: BookExchangeDB'))
        .catch(() => console.error('No se pudo conectar a la base de datos'))
    console.log(`La app esta corriendo en el puerto: ${port}`);
})