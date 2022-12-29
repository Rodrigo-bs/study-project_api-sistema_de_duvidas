const { Router } = require('express');
const dotenv = require('dotenv');

const EducatorController = require('../controllers/EducatorController.js');

dotenv.config();

const routes = Router();

routes.get('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/', EducatorController.getAllTheEducators);

module.exports = routes;