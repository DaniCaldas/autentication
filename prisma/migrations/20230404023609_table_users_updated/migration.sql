/*
  Warnings:

  - You are about to drop the column `accountld` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `accountld_id` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "accountld",
DROP COLUMN "accountld_id";
