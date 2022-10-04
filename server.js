const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const PORT = 2121;
require("dotenv").config();

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "flashCards";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
    // const cardsCollection = db.collection("cards");
  }
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  db.collection("cards")
    .find()
    .toArray()
    .then((data) => {
      res.render("index.ejs", { items: data });
    })
    .catch((error) => console.error(error));
});
app.post("/addCard", (req, res) => {
  console.log("the card posted");
  db.collection("cards")
    .insertOne({
      front: req.body.frontCard,
      back: req.body.backCard,
    })
    .then((result) => {
      console.log("a new card added");
      res.redirect("/");
    })
    .catch((error) => console.error(error));
});

app.delete("/deleteCard", async (req, res) => {
  db.collection("cards")
    .deleteOne({ front: req.body.cardFromJS })
    .then((result) => {
      console.log("one card deleted");
      res.json("card deleted");
    })
    .catch((error) => console.error(error));
});
app.listen(process.env.PORT || PORT, () => {
  console.log(`Running on pot ${PORT}`);
});
