const { Router } = require('express');
const dotenv = require('dotenv');

const EducatorController = require('../controllers/EducatorController.js');

dotenv.config();

const routes = Router();

routes.get('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/', EducatorController.selectAll);
routes.get('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/:id', EducatorController.selectById);
routes.get('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/delete/:id', EducatorController.delete);

routes.post('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/', EducatorController.create);
routes.put('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/:id', EducatorController.update);

module.exports = routes;