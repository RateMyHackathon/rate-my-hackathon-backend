const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  numUp: {
    type: Number,
    default: 0,
    required: true,
  },
  numDown: {
    type: Number,
    default: 0,
    required: true,
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
  },
//   author: {
//     type: UserSchema
//   },
});

module.exports.ReviewSchema = ReviewSchema;
module.exports = Review = mongoose.model("review", ReviewSchema);