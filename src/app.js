const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index.js');

class App {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(bodyParser.json());
    }

    routes() {
        this.express.use(routes);
    }
}

module.exports = new App().express;