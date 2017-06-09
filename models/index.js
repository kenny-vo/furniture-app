var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/3000");

var Furniture = require('./furniture');

module.exports.Furniture = Furniture;
