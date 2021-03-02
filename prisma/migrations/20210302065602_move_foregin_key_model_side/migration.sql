/*
 Warnings:
 
 - You are about to drop the column `modelId` on the `ClassificationMetric` table. All the data in the column will be lost.
 - The migration will add a unique constraint covering the columns `[clsMetricId]` on the table `Model`. If there are existing duplicate values, the migration will fail.
 - The migration will add a unique constraint covering the columns `[regMetricId]` on the table `Model`. If there are existing duplicate values, the migration will fail.
 
 */
-- DropForeignKey
ALTER TABLE
  "ClassificationMetric" DROP CONSTRAINT "ClassificationMetric_modelId_fkey";

-- DropForeignKey
ALTER TABLE
  "RegressionMetric" DROP CONSTRAINT "RegressionMetric_modelId_fkey";

-- DropIndex
DROP INDEX "ClassificationMetric.modelId_unique";

-- DropIndex
DROP INDEX "RegressionMetric.modelId_unique";

-- AlterTable
ALTER TABLE
  "RegressionMetric" DROP COLUMN "modelId";

-- AlterTable
ALTER TABLE
  "ClassificationMetric" DROP COLUMN "modelId";

-- AlterTable
ALTER TABLE
  "Model"
ADD
  COLUMN "clsMetricId" INTEGER,
ADD
  COLUMN "regMetricId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Model.clsMetricId_unique" ON "Model"("clsMetricId");

-- CreateIndex
CREATE UNIQUE INDEX "Model.regMetricId_unique" ON "Model"("regMetricId");

-- AddForeignKey
ALTER TABLE
  "Model"
ADD
  FOREIGN KEY ("clsMetricId") REFERENCES "ClassificationMetric"("id") ON DELETE
SET
  NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
  "Model"
ADD
  FOREIGN KEY ("regMetricId") REFERENCES "RegressionMetric"("id") ON DELETE
SET
  NULL ON UPDATE CASCADE;