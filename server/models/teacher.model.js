const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const User = require("./user.model");

const Teacher = User.init(
  {
    school: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    scopes: {
      defaultScope: {
        where: {
          type: "teacher",
        },
      },
    },
  },
  {
    hooks: {
      beforeCreate: (teacher) => {
        teacher.type = "teacher";
      },
    },
  }
);

module.export = Teacher;
