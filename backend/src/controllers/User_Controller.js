const User = require("../Models/User_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function generateToken(params = {}) {
  return jwt.sign(params, "086bec6f119951c2a07358deb5991a3e", {
    expiresIn: 10000000 // 3 MONTHS
  });
}

module.exports = {
  async index(request, response) {
    const { userID } = request.body;
    const users = await User.findOne({ userID });

    users.password = undefined;

    return response.json(users);
  },
  async store(request, response) {
    const { email, password } = request.body;

    let user = await User.findOne({ email });

    if (!user) {
      const hash = await bcrypt.hash(password, 10);

      let name = email.split("@", 2);

      user = await User.create({
        name: name[0],
        email,
        password: hash
      });
    }

    user.password = undefined;

    return response.send({ user, token: generateToken({ id: user._id }) });
  },
  async authetication(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return response.status(400).send({ error: "User not found" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return response.status(400).send({ error: "Invalid password" });
    }

    user.password = undefined;

    return response.send({ user, token: generateToken({ id: user._id }) });
  }
};
