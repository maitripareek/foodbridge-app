const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  donorName: String,
  foodType: String,
  quantity: String,
  location: String,
  contact: String,
  expiryTime: String,
  description: String,
  status: {
    type: String,
    default: "Available"
  }
});

module.exports = mongoose.model("Food", FoodSchema);