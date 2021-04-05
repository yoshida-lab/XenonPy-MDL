/*
  Warnings:

  - You are about to drop the column `sampleCode` on the `Modelset` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Descriptor" ADD COLUMN     "version" TEXT,
ADD COLUMN     "sampleCode" TEXT;

-- AlterTable
ALTER TABLE "Method" ADD COLUMN     "version" TEXT;

-- AlterTable
ALTER TABLE "Modelset" DROP COLUMN "sampleCode",
ADD COLUMN     "version" TEXT;
