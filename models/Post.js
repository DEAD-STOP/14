const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'Post'
  }
);

module.exports = Post;
