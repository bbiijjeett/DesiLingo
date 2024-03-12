var express = require("express");
var router = express.Router();

const slangSchema = require("./slang");

// testing methods
router.get("/", function (req, res) {
  res.send("Hello");
});

// REST API to add data
router.post("/api/add_entries", async function (req, res, next) {
  try {
    const formData = req.body;

    console.log(formData);
    // Create a new word document using the Word model and the received form data
    const newSlang = await slangSchema.create(formData);

    // Respond with the newly created word document
    res.status(201).json({ message: "Data added successfully  " });
  } catch (error) {
    // If an error occurs, send an error response
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// REST API to retrieve the data
router.get("/api/slangs", async (req, res) => {
  try {
    // Query the database to retrieve all documents from the Word collection
    const slangs = await slangSchema.find();

    // console.log(slangs);

    // res.send(slangs);
    // Send the retrieved data as a JSON response
    res.json(slangs);
  } catch (error) {
    // If an error occurs, send an error response
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
