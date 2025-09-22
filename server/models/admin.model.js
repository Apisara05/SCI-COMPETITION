const { DataTypes } = require("sequelize");
const User = require("./user.model");
const sequelize = require("./db");

const Admin = User.init(
  {},
  {
    scopes: {
      defaultScope: {
        where: {
          type: "admin",
        },
      },
    },
  },
  {
    hooks: {
      beforeCreate: (admin) => {
        admin.type = "admin";
      },
    },
  }
);

module.export = Admin;
