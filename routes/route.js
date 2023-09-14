const express = require("express");
const router = express.Router();

const { createPerson } = require("../controllers/createPerson");
const { getPerson } = require("../controllers/getPerson");
const { updatePerson } = require("../controllers/updatePerson");
const { deletePerson } = require("../controllers/deletePerson");

// Handling request using router
router.get("/", async (req, res) => {
  res.send("Api is Running!!");
});

router.post("", createPerson);

router.get("/:id", getPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
