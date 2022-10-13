const mongoose = require("mongoose");
const FlashCardSchema = new mongoose.Schema({
  frontCard: {
    type: String,
    required: true,
  },
  backCard: {
    type: String,
    required: true,
  },
  reviewed: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FlashCard", FlashCardSchema);
