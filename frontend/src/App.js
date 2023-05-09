import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddMovie from "./pages/AddMovie";
import MoviesList from "./pages/MoviesList";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand header">
            Filmy App
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/movies"} className="nav-link">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-movie"} className="nav-link">
                Add Movie
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/add-movie" element={<AddMovie />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
