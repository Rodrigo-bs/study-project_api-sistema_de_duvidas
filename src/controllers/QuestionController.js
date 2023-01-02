const models = require('../models');

const crypto = require('../core/crypto.js');

class QuestionController {
    static async selectAll(req, res) {
        try {
            const questions = await models.Question.findAll();

            return res.status(200).json(questions);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async selectQuestionById(req, res) {
        const questionId = req.params.questionID;

        try {
            const question = await models.Question.findByPk(questionId);

            return res.status(200).json(question);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async selectAllWithStatusNotReviewed(req, res) {
        try {
            const questions = await models.Question.findAll({
                where: {
                    status: 0
                }
            });

            return res.status(200).json(questions);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async selectAllWithStatusReviewed(req, res) {
        try {
            const questions = await models.Question.findAll({
                where: {
                    status: 1
                }
            });

            return res.status(200).json(questions);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = QuestionController;