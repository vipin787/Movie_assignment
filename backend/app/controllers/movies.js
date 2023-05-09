const db = require("../models");
const Movie = db.movies;

// Create and Save a new Movie
exports.create = (req, res) => {
  const { title, rating, releaseDate, thumbnail } = req.body;
  // Validate request
  if (!title && !rating && !releaseDate) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Movie
  const movie = new Movie({ title, rating, releaseDate, thumbnail });

  // Save Movie in the database
  movie
    .save(movie)
    .then((data) => {
      res.status(201).send({
        status: 201,
        message: "Successfully created new movie.",
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: 500,
        message: err.message || "Some error occurred while creating the Movie.",
      });
    });
};

// Retrieve all Movies from the database.
exports.findAll = (req, res) => {
  Movie.find()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
};
