const sequelize = require("./db");
const Sequelize = require("sequelize");
const Activity = require("./activity.model");
const User = require("./user.model");

const VerificationToken = require("./verificationToken.model");
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Activity = Activity;
db.VerificationToken = VerificationToken;

// association
db.VerificationToken.belongsTo(db.User, { foreignKey: "userId" });
db.User.hasMany(db.VerificationToken, { foreignKey: "userId" });

module.exports = db;
