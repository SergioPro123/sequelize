'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Usuario.init(
        {
            id_usuario: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nombre: { type: DataTypes.STRING, allowNull: false },
            estado: {
                defaultValue: 'A',
                type: DataTypes.STRING,
                allowNull: false,
            },
            correo: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: true,
                },
                allowNull: false,
            },
            hashedPassword: {
                type: DataTypes.STRING(64),
                is: /^[0-9a-f]{64}$/i,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Usuario',
            /* hooks: {
                beforeCreate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10, 'a');
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                },
                beforeUpdate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10, 'a');
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                },
            },
            instanceMethods: {
                validPassword: (password) => {
                    return bcrypt.compareSync(password, this.password);
                },
            }, */
        }
    );

    /* Usuario.prototype.validPassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
    }; */

    return Usuario;
};
