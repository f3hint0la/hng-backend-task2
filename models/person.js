const mongoose = require("mongoose");

// Creating person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Person", personSchema);
