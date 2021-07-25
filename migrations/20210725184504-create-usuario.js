'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Usuarios', {
            id_usuario: {
                type: Sequelize.INTEGER(3),
                autoIncrement: true,
                primaryKey: true,
            },
            nombre: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            estado: {
                type: Sequelize.STRING(2),
                defaultValue: 'A',
            },
            correo: {
                type: Sequelize.STRING(100),
                unique: true,
                validate: {
                    isEmail: true,
                },
                allowNull: false,
            },
            hashedPassword: {
                type: Sequelize.STRING(64),
                is: /^[0-9a-f]{64}$/i,
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
        await queryInterface.dropTable('Usuarios');
    },
};
