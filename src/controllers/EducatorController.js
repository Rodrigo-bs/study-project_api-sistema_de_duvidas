const models = require('../models');

class EducatorController {
    static async getAllTheEducators(req, res) {
        try {
            const educators = models.Educator.findAll();

            console.log('teste')
            
            return res.status(200).json(educators);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = EducatorController;