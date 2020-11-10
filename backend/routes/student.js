const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.route("/addStudent").post(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    batch,
    gender,
    birthDate,
    guardianName,
    gurardianMobileNumber,
    address,
    state,
    city,
  } = req.body;

  const newStudent = new Student({
    firstName,
    lastName,
    email,
    mobileNumber,
    batch,
    gender,
    birthDate,
    guardianName,
    gurardianMobileNumber,
    address,
    state,
    city,
  });
  await newStudent.save();
});

router.route("/students").get((req, res) => {
  Student.find().then((students) => res.json(students));
});

module.exports = router;
