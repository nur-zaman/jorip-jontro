import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fdata: {
    type: Object,
    required: true,
    unique: false,
  },
  user: {
    type: String,
    required: true,
    unique: false,
  },
  points: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports =
  mongoose.models.formdatas || mongoose.model("formdatas", userSchema);
