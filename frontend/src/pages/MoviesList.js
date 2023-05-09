import React, { useEffect, useState } from "react";
import MovieCards from "../components/MovieCards";
import MovieDataService from "../services/movie.service";
import dummyMoviesJson from "../movies.json";

const MoviesList = () => {
  const [movies, setMovies] = useState(dummyMoviesJson);

  useEffect(() => {
    retrieveMovies();
  }, []);

  const retrieveMovies = () => {
    MovieDataService.getAll()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <MovieCards movies={movies} />
    </div>
  );
};

export default MoviesList;
