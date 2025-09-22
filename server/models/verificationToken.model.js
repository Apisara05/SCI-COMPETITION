const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const VerificationToken = sequelize.define("verificationToken", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
  expiredAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = VerificationToken;
