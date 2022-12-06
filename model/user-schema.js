import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  coins: {
    type: Number,
    required: false,
  },
  forms: {
    type: [String],
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
