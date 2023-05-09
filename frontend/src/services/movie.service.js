import http from "../http-common";

class MovieDataService {
  getAll() {
    return http.get("/movies");
  }

  create(data) {
    return http.post("/movies", data);
  }
}

export default new MovieDataService();
