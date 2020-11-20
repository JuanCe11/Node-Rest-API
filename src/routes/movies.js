const { Router } = require("express");
const movies = require("../sample.json");

const router = Router();

router.get("/", (req, res) => {
  res.send(movies);
});

router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body;

  if (title && director && year && rating) {
    //this validations can be done with express validator
    const newMovie = {
      title: title,
      director: director,
      year: year,
      rating: rating,
    };
    movies.push(newMovie);
    res.send("saved");
  } else {
    res.send("wrong request");
  }
});

module.exports = router;
