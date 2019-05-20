module.exports = function (sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.STRING,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'beginTime',
      defaultValue: sequelize.literal('NOW()')
    }
  },
    {
      timestamps: true,
    });
  return Burger;
}


