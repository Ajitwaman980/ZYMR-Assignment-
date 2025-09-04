// src/test/movie.routes.test.js
import { test } from "node:test";
import assert from "node:assert";
import request from "supertest";
import app from "../index.js";

test("GET /movie/all ", async () => {
  const res = await request(app).get("/movie/all");
  assert.strictEqual(res.statusCode, 200);
});

//  getMovieById

test("GET /movie/:id", async () => {
  const actualdata = await request(app).get("/movie/1");
  const expectedstatus = 200;
  assert.strictEqual(actualdata.status, expectedstatus);
});

//  create new movie
test("POST /movie/new", async () => {
  const actualdata = await request(app).post("/movie/new").send({
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: "action",
    rating: 9,
  });
  const expectedstatus = 201;
  assert.strictEqual(actualdata.status, expectedstatus);
});
