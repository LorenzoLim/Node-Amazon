const express = require('express');
let router = express.Router();
let students = [];

router.get('/students', function (req, res) {
  res.send(students);
});

router.post('/students', function (req, res) {
  let student = req.body.name;
  students.push(student);
  res.send(student);
});

module.exports = router;
