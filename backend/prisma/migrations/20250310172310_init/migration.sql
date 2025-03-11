/*
  Warnings:

  - You are about to drop the column `age` on the `Patient` table. All the data in the column will be lost.
  - You are about to alter the column `dob` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `gender` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Patient` DROP COLUMN `age`,
    ADD COLUMN `gender` VARCHAR(191) NOT NULL,
    MODIFY `dob` INTEGER NULL;
