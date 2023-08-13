const uuid = require('uuid')
const path = require('path');
const {Logo, ListRatings, } = require('../models/models')
const ApiError = require('../error/ApiError');

class LogoController {
    async create(req, res, next) {
        try {
            let {name, country, city, description, typeId, address, listRatings} = req.body

            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const logo = await Logo.create({name, country, city, description, address, img: fileName}); 
            if (listRatings) {
                listRatings = JSON.parse(listRatings)
                listRatings.forEach(i =>
                    ListRatings.create({
                        titleReting: i.titleReting,
                        reting: i.reting,
                        logoId: logo.id
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        let logo
        logo = await Logo.findAll()
        // page = page || 10
        // limit = limit || 10
        // let offset = page * limit - limit
        // let devices;
        // if (!brandId && !typeId) {
        //     devices = await Device.findAndCountAll({limit, offset})
        // }
        // if (brandId && !typeId) {
        //     devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        // }
        // if (!brandId && typeId) {
        //     devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        // }
        // if (brandId && typeId) {
        //     devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        // }
        return res.json(logo)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Logo.findOne(
            {
                where: {id},
                include: [{model: ListRatings, as: 'listRatings'}]
            },
        )
        return res.json(device)
    }
}

module.exports = new LogoController()
