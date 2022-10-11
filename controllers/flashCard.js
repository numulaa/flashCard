const FlashCard = require("../models/FlashCard");

module.exports = {
  getFlashCards: async (req, res) => {
    try {
      const allCards = await FlashCard.find();
      res.render("flashCard.ejs", { items: allCards });
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
