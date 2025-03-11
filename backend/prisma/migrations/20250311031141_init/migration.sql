/*
  Warnings:

  - You are about to drop the column `timeStamp` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `timestamp` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `timeStamp`,
    ADD COLUMN `timestamp` VARCHAR(191) NOT NULL;
