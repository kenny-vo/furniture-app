var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Song = require('./song');

var FurnitureSchema = new Schema({
  name: String,
  photo: String,
  price: Number,
  link: String
});

var Furniture = mongoose.model('Furniture', FurnitureSchema);

module.exports = Furniture;
