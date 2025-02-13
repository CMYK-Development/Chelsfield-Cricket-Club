const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } } // Enable `createdAt`
);

module.exports = mongoose.model("Team", TeamSchema);

