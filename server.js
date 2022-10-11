const express = require("express");
const app = express();
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const flashCardRoutes = require("./routes/flashCard");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRoutes);
app.use("/flashCard", flashCardRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Running on port`);
});
