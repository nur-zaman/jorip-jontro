import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: false,
  },
  formurl: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports =
  mongoose.models.externalforms || mongoose.model("externalforms", formSchema);
