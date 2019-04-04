module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: {
        msg: "Must be an email with format: foo@bar.com"
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    languages: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function(models) {
    // Associating user with Posts
    // When an user is deleted, also delete any associated Posts
    User.hasMany(models.Event, {
      onDelete: "cascade"
    });
  };

  return User;
};
