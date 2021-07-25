const Sequelize = require('sequelize');
const usuario = require('../models').Usuario;
module.exports = {
    create(req, res) {
        return usuario
            .create({
                nombre: req.body.nombre,
                correo: req.body.correo,
                hashedPassword: req.body.contrasena,
            })
            .then((usuario) => res.status(200).send(usuario))
            .catch((error) => res.status(400).send(error));
    },
    list(_, res) {
        return usuario
            .findAll({})
            .then((usuario) => res.status(200).send(usuario))
            .catch((error) => res.status(400).send(error));
    },
    find(req, res) {
        return usuario
            .findAll({
                where: {
                    username: req.params.username,
                },
            })
            .then((usuario) => res.status(200).send(usuario))
            .catch((error) => res.status(400).send(error));
    },
};
