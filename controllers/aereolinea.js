const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const aereolinea = require('../models').Aereolineas;
const usuario = require('../models').Usuario;
module.exports = {
    create(req, res) {
        // Usuario
        const responseUsuario = usuario.findOne({
            where: {
                [Op.or]: [
                    {
                        id_usuario: req.body.id_usuario,
                    },
                    {
                        id_usuario: req.body.id_usuario,
                    },
                ],
            },
        });

        Promise.all([responseUsuario])
            .then((responses) => {
                return aereolinea
                    .create({
                        codigo_aereolinea: req.body.codigo_aereolinea,
                        nombre: req.body.nombre,
                        id_usuario: req.body.id_usuario,
                    })
                    .then((aereolinea) => res.status(200).send(aereolinea));
            })
            .catch((error) => res.status(400).send(error));
    },
    list(_, res) {
        return aereolinea
            .findAll({
                include: [
                    {
                        model: usuario,
                        as: 'Usuario',
                    },
                ],
            })
            .then((aereolinea) => res.status(200).send(aereolinea))
            .catch((error) => res.status(400).send(error));
    },

    find(req, res) {
        return aereolinea
            .findAll({
                where: {
                    codigo_aereolinea: req.body.codigo_aereolinea,
                },
                include: [
                    {
                        model: usuario,
                        as: 'Usuario',
                    },
                ],
            })
            .then((aereolinea) => res.status(200).send(aereolinea))
            .catch((error) => res.status(400).send(error));
    },
};
