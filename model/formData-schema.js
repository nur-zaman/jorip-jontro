import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  data: {
    type: Object,
    required: true,
    unique: false,
  },
});

module.exports =
  mongoose.models.formData || mongoose.model("formData", userSchema);
