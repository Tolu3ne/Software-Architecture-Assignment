/*
  Warnings:

  - Added the required column `address` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Doctor` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL;
