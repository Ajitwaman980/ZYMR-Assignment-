-- CreateEnum
CREATE TYPE "public"."genre" AS ENUM ('funny', 'action', 'love', 'crime');

-- CreateTable
CREATE TABLE "public"."movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "genre" "public"."genre" NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);
