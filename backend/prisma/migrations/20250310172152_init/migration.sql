/*
  Warnings:

  - You are about to drop the column `gender` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `dob` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Patient` DROP COLUMN `gender`,
    ADD COLUMN `dob` VARCHAR(191) NOT NULL,
    ADD COLUMN `insurance` VARCHAR(191) NULL;
