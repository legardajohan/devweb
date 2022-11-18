const mongoose = require('mongoose');

// Imprime el query que se esta enviando 
mongoose.set("debug", function (coll, method, query, doc) {
    console.log('Esta es mi query: ', query);
});

exports.bookSchema = mongoose.Schema({
    title: String,
    gender: String,
    author: String,
    copy: Number,
    date: String,
    front: String
});