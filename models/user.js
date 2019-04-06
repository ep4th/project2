module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      isEmail: {
        msg: "Must be an email with format: foo@bar.com"
      }
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true
    },
     languages: {
      type: DataTypes.STRING,
      allowNull: false
    }
},{
    timestamps: false
  });

  // User.associate = function(models) {
  //   // Associating user with Posts
  //   // When an user is deleted, also delete any associated Posts
  //   User.hasMany(models.Event, {
  //     onDelete: "cascade"
  //   });
  // };

  return User;
};
