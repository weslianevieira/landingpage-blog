const mongoose = require("mongoose");

const TestimonySchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    testimony: {
      type: String,
      required: true,
    },
    problemSolved: {
      type: String,
      required: true,
    },
    username: {
      type: String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimony", TestimonySchema);
