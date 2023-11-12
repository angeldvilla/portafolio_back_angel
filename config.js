require("dotenv").config();
const { EMAIL_USER, PASSWORD_USER } = process.env;
module.exports = {
  email: {
    service: "Gmail",
    auth: {
      user: EMAIL_USER,
      pass: PASSWORD_USER,
    },
  },
};
