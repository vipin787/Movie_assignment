import React from "react";

const MovieCards = ({ movies }) => {
  return (
    <div className="container">
      <h2>New Movies</h2>
      <div className="row row-cols-1 row-cols-md-4 g-8">
        {movies.map((movie) => (
          <div key={movie.id} className="col my-3">
            <div className="card h-100">
              <img
                src={movie.thumbnail}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  <strong>Release date:</strong> {movie.releaseDate}
                  <br />
                  <strong>Rating:</strong> {movie.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCards;
