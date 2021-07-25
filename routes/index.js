/* Controllers */
const usuarioController = require('../controllers/usuario');
const aereolineaController = require('../controllers/aereolinea');

module.exports = (app) => {
    app.get('/api', (req, res) =>
        res.status(200).send({
            message: 'Example project did not give you access to the api web services',
        })
    );
    app.post('/api/usuario', usuarioController.create);
    app.get('/api/usuario/list', usuarioController.list);
    app.get('/api/usuario/find/username', usuarioController.find);

    app.post('/api/aereolinea', aereolineaController.create);
    app.get('/api/aereolinea/list', aereolineaController.list);
    app.get('/api/aereolinea/find/username', aereolineaController.find);
};
