const FlashCard = require("../models/FlashCard");

module.exports = {
  getFlashCards: async (req, res) => {
    try {
      res.render("flashCard.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  createFlashCard: async (req, res) => {
    try {
      await FlashCard.create({
        frontCard: req.body.frontCard,
        backCard: req.body.backCard,
        reviewed: 0,
      });
      console.log("a new flashCard has been added!");
      res.redirect("/flashCard");
    } catch (err) {
      console.log(err);
    }
  },
};
