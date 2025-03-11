/*
  Warnings:

  - You are about to drop the column `departmentId` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `Manager` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `Nurse` table. All the data in the column will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Doctor` DROP FOREIGN KEY `Doctor_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `Manager` DROP FOREIGN KEY `Manager_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `Nurse` DROP FOREIGN KEY `Nurse_departmentId_fkey`;

-- DropIndex
DROP INDEX `Doctor_departmentId_fkey` ON `Doctor`;

-- DropIndex
DROP INDEX `Manager_departmentId_key` ON `Manager`;

-- DropIndex
DROP INDEX `Nurse_departmentId_fkey` ON `Nurse`;

-- AlterTable
ALTER TABLE `Doctor` DROP COLUMN `departmentId`,
    ADD COLUMN `department` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Manager` DROP COLUMN `departmentId`;

-- AlterTable
ALTER TABLE `Nurse` DROP COLUMN `departmentId`;

-- DropTable
DROP TABLE `Department`;
