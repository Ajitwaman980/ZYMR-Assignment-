//  movie controller
import prisma from "../utils/prisma.js";
import { inputValidation } from "../utils/validation.js";
import nodecache from "node-cache";

// create the instance of node cache in memory for the spped up
const cache = new nodecache();

//  get all movies

export const getALlMovies = async (req, res) => {
  try {
    // pagination working
    const pageNo = req.query.pageNo || 1;
    const limit = 2;
    const skip = (pageNo - 1) * limit; // 2-1

    //  check cache data peresent or not using the key = allmovies
    const cacheKey = `allmovies_${pageNo}_${limit}`; // dynamic cache key
    if (cache.has(cacheKey)) {
      console.log("data from cache");
      const allmovies = cache.get(cacheKey);
      return res.status(200).json(allmovies);
    }

    const alldata = await prisma.movie.findMany({});

    if (!alldata) {
      res.json({
        error: "something wrong when the movie data fetch... try again ",
      });
    }
    cache.set(cacheKey, alldata, 60); // cache for 60 seconds
    res.status(200).json(alldata);
  } catch (error) {
    console.log("fecthing the data from db", error);
    res.json("something went wrong ...", error);
  }
};

//  create new moive
export const newMovie = async (req, res) => {
  try {
    // taking data from body
    const { title, director, releaseYear, genre, rating } = req.body;
    // delete the cache data
    cache.del("allmovies");

    const validation = inputValidation.safeParse({
      title,
      director,
      releaseYear,
      rating,
    });

    // check error

    if (!validation.success) {
      return res.json({ error: validation.error.issues });
    }

    //  create the new data

    const newmovies = await prisma.movie.create({
      data: {
        title: title,
        director: director,
        releaseYear: releaseYear,
        genre: genre,
        rating: rating,
      },
    });
    //  give response
    res.status(201).json(newmovies);
  } catch (error) {
    console.log("error when creating new movies", error);
    res.json({ error });
  }
};

//  get byt id

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    cache.del("allmovies");

    const movieData = await prisma.movie.findUnique({
      where: {
        id: id,
      },
    });
    if (!movieData) {
      return res.json({ message: "movie not found..." });
    }
    res.status(200).json(movieData);
  } catch (error) {
    res.json(error);
  }
};

//  update the movie

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    cache.del("allmovies");

    const { title, director, releaseYear, genre, rating } = req.body;

    const movieData = await prisma.movie.findUnique({
      where: {
        id: id,
      },
    });

    if (!movieData) {
      return res.json({ message: "movie not found..." });
    }
    const movieDataUpdate = await prisma.movie.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        director: director,
        genre: genre,
        releaseYear: releaseYear,
        rating: rating,
      },
    });

    res.status(200).json(movieDataUpdate);
  } catch (error) {
    res.json(error);
  }
};

// delete movie

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    cache.del("allmovies");

    const movieData = await prisma.movie.findUnique({
      where: {
        id: id,
      },
    });
    if (!movieData) {
      return res.json({ message: "movie not found..." });
    }
    const deleteMovie = await prisma.movie.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "delete the movie data", deleteMovie });
  } catch (error) {
    res.json(error);
  }
};
