/*
  Warnings:

  - You are about to drop the column `votes` on the `film` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `film` DROP COLUMN `votes`;

-- AlterTable
ALTER TABLE `poll` ADD COLUMN `votesFilm1` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `votesFilm2` INTEGER NOT NULL DEFAULT 0;
