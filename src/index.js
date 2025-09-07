import express from "express";
import dotenv from "dotenv";
dotenv.config();
import swaggerUi from "swagger-ui-express";
import MovieRouter from "./routes/movie.routes.js";
import swaggerDocument from "./swagger/swagger-output.json" with { type: "json" };
import rateLimiting from "./middleware/rateLimt.js";

const app = express();
// const PORT = process.env.PORT;
// console.log(PORT);
app.use(express.json());
app.use("/movie", rateLimiting,MovieRouter);

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


export default app;