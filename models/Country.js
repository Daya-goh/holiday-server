const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  // add your code here to set up your schema
  title: String,
});

const Country = mongoose.model("Country", countrySchema);

//make this exportable to be accessed in `app.js`
module.exports = Country;
