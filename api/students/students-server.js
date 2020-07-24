const router = require("express").Router();
const Students = require("./students-model");

router.get("/", (req, res) => {
  Students.getAll()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
