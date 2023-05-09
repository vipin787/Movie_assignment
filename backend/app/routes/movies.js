module.exports = (app) => {
  const movies = require("../controllers/movies.js");
  let router = require("express").Router();

  router.post("/movies", movies.create);
  router.get("/movies", movies.findAll);

  app.use("/api", router);
};
