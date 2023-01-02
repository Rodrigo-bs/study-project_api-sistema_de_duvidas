const models = require('../models');

const crypto = require('../core/crypto.js');

class EducatorController {
    static async selectAll(req, res) {
        try {
            const educators = await models.Educator.findAll();

            return res.status(200).json(educators);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async create(req, res) {
        req.body.password = await crypto.hash(req.body.password);

        const educatorInfos = {
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        try {
            const educator = await models.Educator.create(educatorInfos);

            return res.status(200).json(educator);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async selectById(req, res) {
        const educatorId = req.params.educatorID;

        try {
            const educator = await models.Educator.findByPk(educatorId);

            return res.status(200).json(educator);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async update(req, res) {
        req.body.password = await crypto.hash(req.body.password)

        const educatorId = req.params.educatorID;
        const educatorNewInfos = req.body;

        try {
            await models.Educator.update(educatorNewInfos, {
                where: {
                    id: educatorId 
                }
            });

            const educator = await models.Educator.findByPk(educatorId);

            return res.status(200).json(educator);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        const educatorId = req.params.educatorID;

        try {
            await models.Educator.destroy({
                where: {
                    id: educatorId
                }
            }); 

            return res.status(200).json({ message: `ID ${educatorId} deleted` });
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async selectAllQuestions(req, res) {
        const educatorId = req.params.educatorID;

        try {
            const questions = await models.Question.findAll({
                where: {
                    educator_id: educatorId
                }
            });

            return res.status(200).json(questions);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = EducatorController;