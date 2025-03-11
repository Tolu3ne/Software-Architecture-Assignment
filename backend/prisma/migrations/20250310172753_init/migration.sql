/*
  Warnings:

  - You are about to drop the column `appointmentTime` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `status` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeStamp` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `appointmentTime`,
    DROP COLUMN `description`,
    ADD COLUMN `diagnosis` VARCHAR(191) NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `timeStamp` INTEGER NOT NULL,
    ADD COLUMN `treatment` VARCHAR(191) NULL;
