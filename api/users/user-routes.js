const express = require("express");
const Helper = require("./user-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await Helper.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.me });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await Helper.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.me });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Helper.delete(id);
    res.status(201).json({ message: "User Deleted :) " });
  } catch (error) {
    res.status(500).json({ message: error.me });
  }
});

module.exports = router;
