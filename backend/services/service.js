const { bookModel } = require('../models/model');

const create = (request, response) => {
    const newBook = {
        title: request.body.modelo,
        gender: request.body.gender,
        author: request.body.author,
        copy: request.body.copy,
        date: request.body.date,
        front: request.body.front
    };

    const bookInstance = new bookModel(newBook); 

    bookInstance.save((err, resp) => {
        response.json(resp);
        console.log(`Se creó el objeto: ${resp}`);
    });
};

const list = (request, response) => {
    bookModel.find((err, resp) => {
        response.json(resp);
    });
};

module.exports = {
    create,
    list
};