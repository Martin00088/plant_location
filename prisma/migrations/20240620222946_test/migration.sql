/*
  Warnings:

  - You are about to drop the column `result` on the `Results` table. All the data in the column will be lost.
  - Made the column `name` on table `Results` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Results" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "solutionData" TEXT NOT NULL,
    "inputdata" TEXT NOT NULL,
    "console" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "maxMemory" REAL NOT NULL,
    "statusSolution" TEXT NOT NULL,
    "processingTime" REAL NOT NULL
);
INSERT INTO "new_Results" ("console", "createdAt", "id", "inputdata", "maxMemory", "name", "processingTime", "solutionData", "statusSolution") SELECT "console", "createdAt", "id", "inputdata", "maxMemory", "name", "processingTime", "solutionData", "statusSolution" FROM "Results";
DROP TABLE "Results";
ALTER TABLE "new_Results" RENAME TO "Results";
CREATE UNIQUE INDEX "Results_id_key" ON "Results"("id");
PRAGMA foreign_key_check("Results");
PRAGMA foreign_keys=ON;
