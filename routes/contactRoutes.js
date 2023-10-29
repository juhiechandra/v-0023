const express = require("express");
const router = express.Router();
const {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

router.route("/").get(getContacts).post(createContact);

// ? Exporting the modules of router

module.exports = router;
