require("../models/database");
const Person = require("../models/person");

// UPDATE - Modifying details of an existing person
module.exports.updatePerson = async (req, res) => {
  try {
    const personId = req.params.id;
    const { name } = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(personId, { name });

    if (!updatedPerson) {
      return res
        .status(404)
        .json({ error: "Error updating person in the database." });
    }
    return res.json(updatedPerson);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Error while updating person" });
  }
};
