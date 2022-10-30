const Category = require("../models/Category");

module.exports = {
  getFlashCardCategories: async (req, res) => {
    try {
      const allCategories = await Category.find({ userId: req.user.id });
      res.render("cardCategory.ejs", {
        categories: allCategories,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createFlashCardCategory: async (req, res) => {
    try {
      await Category.create({
        title: req.body.categoryTitle,
        userId: req.user.id,
      });
      console.log("a new flashCard category has been added!");
      res.redirect("/cardCategory");
    } catch (err) {
      console.log(err);
    }
  },
  deleteFlashCardCategory: async (req, res) => {
    console.log(req.body.categoryIdFromJS);
    try {
      await Category.findOneAndDelete({ _id: req.body.categoryIdFromJS });
      console.log("Deleted FlashCard Category", req.body);
      res.json("Deleted the Flashcard Category");
    } catch (err) {
      console.log(err);
    }
  },
};
