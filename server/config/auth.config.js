const dotenv = require("dotenv");
dotenv.config();

export default {
  secret: process.env.JWT_KEY,
};
