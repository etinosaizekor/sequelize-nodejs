'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Record.init({
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    official_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    CEO: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'records',
    modelName: 'Record'
  });
  return Record;
};