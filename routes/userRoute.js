const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// create user -- post method
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    console.log("please provide all the fields that are required");
  }
  try {
    const userData = await User.create({
      name,
      email,
      age,
    });
    res.status(201).json("user created successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// get user -- get method
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// get single user -- get method
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// delete single user -- delete method
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// update single user -- update method
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, age } = req.body;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
