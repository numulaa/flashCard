const mongoose = require("mongoose");
const CardCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", CardCategorySchema);
