module.exports = function (sequelize, DataTypes) {
  var event = sequelize.define("event", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eventName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_at: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attendance: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  event.associate = function (models) {
    event.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return event;
};
