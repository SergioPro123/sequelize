'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Aereolineas', {
            codigo_aereolinea: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(3),
            },
            nombre: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            link: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            orden: {
                type: Sequelize.INTEGER(3),
                defaultValue: 1,
            },
            estado: {
                type: Sequelize.STRING(2),
                defaultValue: 'A',
            },
            id_usuario: {
                type: Sequelize.INTEGER(3),
                references: {
                    model: 'Usuarios',
                    key: 'id_usuario',
                },
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Aereolineas');
    },
};
