const bookServices = require('../services/service');

const create = (request, response) => {
    bookServices.create(request, response);
};

const list = (request, response) => {
    bookServices.list(request, response)
};

module.exports = {
    create,
    list
};