const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  console.log("PASSWORD");
  console.log(passwordHash);
  try {
    await User.create({ username, password: passwordHash });
    res.status(200).send("Created a user account!");
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed to create an account");
  }
});

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureFlash: false,
//   })
// );

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("Successful login");
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send("Error logging out");
    res.redirect("/login");
  });
});

module.exports = router;
