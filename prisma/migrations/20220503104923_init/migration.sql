/*
  Warnings:

  - You are about to drop the column `pollId` on the `film` table. All the data in the column will be lost.
  - Added the required column `film1Id` to the `Poll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `film2Id` to the `Poll` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `film` DROP FOREIGN KEY `Film_pollId_fkey`;

-- AlterTable
ALTER TABLE `film` DROP COLUMN `pollId`;

-- AlterTable
ALTER TABLE `poll` ADD COLUMN `film1Id` INTEGER NOT NULL,
    ADD COLUMN `film2Id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Poll` ADD CONSTRAINT `Poll_film1Id_fkey` FOREIGN KEY (`film1Id`) REFERENCES `Film`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Poll` ADD CONSTRAINT `Poll_film2Id_fkey` FOREIGN KEY (`film2Id`) REFERENCES `Film`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
