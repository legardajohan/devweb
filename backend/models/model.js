const mongoose = require('mongoose');
const { bookSchema } = require('../schematics/schema');

const bookSchemaIntance = bookSchema;

const bookModel = mongoose.model('books', bookSchemaIntance);

module.exports = {
    bookModel
};