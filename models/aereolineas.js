'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Aereolineas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Aereolineas.init(
        {
            codigo_aereolinea: { allowNull: false, primaryKey: true, type: DataTypes.STRING },
            nombre: { type: DataTypes.STRING, allowNull: false },
            link: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            orden: { type: DataTypes.STRING, defaultValue: 1 },
            estado: {
                defaultValue: 'A',
                type: DataTypes.STRING,
            },
            id_usuario: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Usuario',
                    key: 'id_usuario',
                },
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Aereolineas',
        }
    );

    Aereolineas.associate = (models) => {
        Aereolineas.belongsTo(models.Usuario, {
            foreignKey: 'id_usuario',
            as: 'Usuario',
        });
    };
    return Aereolineas;
};
