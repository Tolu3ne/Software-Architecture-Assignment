/*
  Warnings:

  - You are about to drop the column `dosage` on the `Prescription` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Prescription` table. All the data in the column will be lost.
  - You are about to drop the column `medicationList` on the `Prescription` table. All the data in the column will be lost.
  - You are about to drop the column `updatable` on the `Prescription` table. All the data in the column will be lost.
  - You are about to drop the column `updatablePrescription` on the `Prescription` table. All the data in the column will be lost.
  - Added the required column `appointmentId` to the `Prescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicineName` to the `Prescription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quanity` to the `Prescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Prescription` DROP COLUMN `dosage`,
    DROP COLUMN `duration`,
    DROP COLUMN `medicationList`,
    DROP COLUMN `updatable`,
    DROP COLUMN `updatablePrescription`,
    ADD COLUMN `appointmentId` INTEGER NOT NULL,
    ADD COLUMN `medicineName` VARCHAR(191) NOT NULL,
    ADD COLUMN `quanity` INTEGER NOT NULL;
