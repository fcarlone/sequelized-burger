module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define("Customer", {
    name: DataTypes.STRING,

  });

  // Customer.associate = function (models) {
  //   Customer.belongsTo(models.Burger, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // };


  return Customer;
};
