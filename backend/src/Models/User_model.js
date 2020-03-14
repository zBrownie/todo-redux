const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase:true,
      createIndexes: { unique: true }
    },
    password: {
      type: String,
      required: true,
      select: true
    },
    admin: Boolean
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model("User", UserSchema);