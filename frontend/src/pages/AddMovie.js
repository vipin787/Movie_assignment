import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieDataService from "../services/movie.service";

const AddMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [thumbnail] = useState("https://via.placeholder.com/150");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleAddMovie = () => {
    MovieDataService.create({ title, rating, releaseDate, thumbnail })
      .then((response) => {
        if (response.status === 201) {
          setSuccess(true);
          setSuccessMessage(response.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
        setError(true);
        setErrorMessage(e.message);
      });
    resetInputFields();
  };

  const resetInputFields = () => {
    setTitle("");
    setRating("");
    setReleaseDate("");
    setSuccessMessage("");
    setSuccess(false);
  };

  return (
    <div className="submit-form">
      {success && (
        <div
          className="d-flex justify-content-between align-items-center alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <span>{successMessage}</span>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      {error && (
        <div
          className="d-flex justify-content-between align-items-center alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <span>{errorMessage}</span>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <div className="my-3">
        <div className="form-group my-4">
          <label htmlFor="title" className="mt-8">
            Movie Name
          </label>
          <input
            type="text"
            className="form-control mt-2"
            id="title"
            required
            placeholder="Enter Movie Title"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="form-group my-4">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            className="form-control mt-2"
            id="rating"
            required
            placeholder="Enter Movie Rating"
            name="rating"
            value={rating}
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />
        </div>

        <div className="form-group mt-4 mb-3">
          <label htmlFor="release-date">Release Date</label>
          <input
            type="date"
            className="form-control mt-2"
            id="release-date"
            required
            name="releaseDate"
            value={releaseDate}
            onChange={(event) => {
              setReleaseDate(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-primary pe-auto"
            onClick={() => navigate("/")}
          >
            Back
          </button>
          <button
            disabled={title && rating && releaseDate ? false : true}
            className="btn btn-success pe-auto"
            onClick={handleAddMovie}
          >
            Add Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
