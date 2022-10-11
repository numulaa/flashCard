const express = require("express");
const router = express.Router();
const flashCardController = require("../controllers/flashCard");

router.get("/", flashCardController.getFlashCards);
router.post("/createFlashCard", flashCardController.createFlashCard);


module.exports = router;
