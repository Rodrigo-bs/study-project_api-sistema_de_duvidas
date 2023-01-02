const { Router } = require('express');
const dotenv = require('dotenv');

const EducatorController = require('../controllers/EducatorController.js');

dotenv.config();

const routes = Router();

routes.get('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/', EducatorController.selectAll);
routes.get('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/:educatorID', EducatorController.selectById);
routes.get('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/delete/:educatorID', EducatorController.delete);
routes.get('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/:educatorID/question/', EducatorController.selectAllQuestions);

routes.post('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/', EducatorController.create);
routes.put('/' + process.env.EDUCATOR_ROUTE_PREFIX + '/:educatorID', EducatorController.update);

module.exports = routes;