require("../models/database");
const Person = require("../models/person");

// DELETE - Removing a person by ID
module.exports.deletePerson = async (req, res) => {
  try {
    const personId = req.params.id;
    const deletedPerson = await Person.findByIdAndRemove(personId);

    if (!deletedPerson) {
      return res
        .status(404)
        .json({ error: "Error finding person. Person not found." });
    }
    return res.json({ message: `Person with ${personId} has been deleted` });
  } catch (error) {
    console.error("Error deleting person from the database:", error);
    res.status(500).json({ error: "Error while deleting person" });
  }
};
