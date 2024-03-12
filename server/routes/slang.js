const mongoose = require("mongoose");

const dbURL = process.env.MONGODB_URL;

mongoose
  .connect(dbURL)
  .then(() => console.log("Mongodb Connected Successfully"))
  .catch((err) => {
    console.error(err);
  });

const slangSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  by: {
    type: String,
    required: true,
    default: "Anonymous",
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("slang", slangSchema);
