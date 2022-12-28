const { Router } = require('express');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.EDUCATOR_PREFIX);


const routes = Router();

routes.get('/', (req, res) => {
    res.send('ok');
});

module.exports = routes;