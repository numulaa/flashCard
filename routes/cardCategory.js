const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const cardCategoryController = require("../controllers/flashCardCategory");
const flashCardController = require("../controllers/flashCard");

router.get("/", ensureAuth, cardCategoryController.getFlashCardCategories);
router.post(
  "/createFlashCardCategory",
  cardCategoryController.createFlashCardCategory
);
router.delete(
  "/deleteFlashCardCategory",
  cardCategoryController.deleteFlashCardCategory
);
router.get("/flashCardItems", flashCardController.getFlashCards);

module.exports = router;
