import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  response: {
    type: Object,
    required: true,
    unique: false,
  },
  formID: {
    type: String,
    required: true,
    unique: false,
  },
  userID: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports =
  mongoose.models.response_data ||
  mongoose.model("response_data", responseSchema);
