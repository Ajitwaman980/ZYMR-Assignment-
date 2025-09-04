//  movies routes
import express from "express";

const MovieRouter = express.Router();

import {
  newMovie,
  getALlMovies,
  updateMovie,
  getMovieById,
  deleteMovie,
} from "../controller/movie.controller.js";

//  create new movie
MovieRouter.post("/new", newMovie);

//  get all movies
MovieRouter.get("/all", getALlMovies);
// get single movie

MovieRouter.get("/:id", getMovieById);

// update movie
MovieRouter.put("/update/:id", updateMovie);

// delete movie
MovieRouter.delete("/del/:id", deleteMovie);

export default MovieRouter;
