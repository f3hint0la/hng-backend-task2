require("../models/database");
const Person = require("../models/person");

// READ - Fetching details of a person by ID
module.exports.getPerson = async (req, res) => {
  try {
    const personId = req.params.id;
    const person = await Person.findById(personId);

    if (!person) {
      return res
        .status(404)
        .json({ error: "Error finding person. Person not found." });
    }
    return res.json(person);
  } catch (error) {
    console.error("Error fetching person from the database:", error);
    res.status(500).json({ error: "Error finding person. Person not found." });
  }
};
