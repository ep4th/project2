module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_at: {
      type: DataTypes.STRING,
      allowNull: false
    },
    end_at: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
      timestamps: false
  });

  // Event.associate = function(models) {
  //   Event.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };


  return Event;
};
