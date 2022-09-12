require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT ?? 4300;
app.use(morgan("dev"));
app.use(cors());

const Country = require("./models/Country");

const MONGO_URI =
  "mongodb+srv://gqydaya:f6TXzVtqtParjxGu@cluster0.z5j5cpd.mongodb.net/test";
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log(`connected to mongo at ${MONGO_URI}`);
});

// all middleware -> app.use
app.use(express.json());

/* ------------------------------------------------------ */
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hi world!" });
});

app.get("/countries/seed", async (req, res) => {
  const countries = [
    { title: "Singapore" },
    { title: "Italy" },
    { title: "Thailand" },
  ];
  Country.deleteMany();
  const result = await Country.insertMany(countries);
  res.send(result);
});

/* ------------------------------------------------------ */
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
