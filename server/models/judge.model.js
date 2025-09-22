const { DataTypes } = require("sequelize");
const User = require("./user.model");
const sequelize = require("./db");

const Judge = User.init(
  {},
  {
    scopes: {
      defaultScope: {
        where: {
          type: "judge",
        },
      },
    },
  },
  {
    hooks: {
      beforeCreate: (judge) => {
        judge.type = "judge";
      },
    },
  }
);

module.export = Judge;
