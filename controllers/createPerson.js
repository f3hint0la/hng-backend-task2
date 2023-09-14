require("../models/database");
const Person = require("../models/person");

// CREATE - Adding a new person
module.exports.createPerson = async (req, res) => {
  try {
    const { name } = req.body;
    const newPerson = await Person.create({ name });
    return res.status(201).json(newPerson);
  } catch (error) {
    console.error("Error saving to the database:", error);
    res.status(500).json({ error: "Error adding person to database" });
  }
};
