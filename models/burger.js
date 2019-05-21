module.exports = function (sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.STRING,
      defaultValue: false
    }
  });

  // Burger.associate = function (models) {
  //   Burger.hasMany(models.Customer);
  // };


  return Burger;
}


