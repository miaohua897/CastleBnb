'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // ReviewImages.belongsTo(models.Reviews,{foreignKey:'reviewId'});
      Review.hasMany(models.ReviewImage,{foreignKey:'reviewId'});
      Review.belongsTo(models.Spot,{foreignKey:'spotId'});
      Review.belongsTo(models.User,{foreignKey:'userId'});
    }
  }
  Review.init({
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    spotId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    review: {
      type:DataTypes.STRING,
      // unique:true,
      allowNull:false
    },
    stars: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};