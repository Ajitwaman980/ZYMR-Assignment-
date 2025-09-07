import { z } from "zod";

//  validation

export const inputValidation = z.object({
  title: z.string({ error: "title is required" }).min(3).max(100),
  director: z.string({ error: "director is required" }).min(3).max(100),
  releaseYear: z.number({ error: "release year is required" }),
  rating: z.number().min(0).max(10),
});
