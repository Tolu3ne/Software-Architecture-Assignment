/*
  Warnings:

  - You are about to drop the column `issueTime` on the `Billing` table. All the data in the column will be lost.
  - Added the required column `payedTime` to the `Billing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Billing` DROP COLUMN `issueTime`,
    ADD COLUMN `payedTime` DATETIME(3) NOT NULL;
