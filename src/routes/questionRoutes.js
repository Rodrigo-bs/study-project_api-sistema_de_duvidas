const { Router } = require('express');
const dotenv = require('dotenv');

const QuestionController = require('../controllers/QuestionController.js');

dotenv.config();

const routes = Router();

routes.get('/' + process.env.QUESTION_ROUTE_PREFIX + '/', QuestionController.selectAll);
routes.get('/' + process.env.QUESTION_ROUTE_PREFIX + '/:questionID', QuestionController.selectQuestionById);
routes.get('/' + process.env.QUESTION_ROUTE_PREFIX + '/status/:status', (req, res) => {
    const status = req.params.status;

    if (status == 1) QuestionController.selectAllWithStatusReviewed(req, res)
    else if (status == 0) QuestionController.selectAllWithStatusNotReviewed(req, res)
});

module.exports = routes;