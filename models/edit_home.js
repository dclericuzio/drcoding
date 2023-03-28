'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edit_home extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  edit_home.init({
    content: DataTypes.STRING,
    category: DataTypes.STRING,
    sub_category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'edit_home',
    freezeTableName: true
  });
  return edit_home;
};