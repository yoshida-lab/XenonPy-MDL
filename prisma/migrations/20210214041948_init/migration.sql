-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MASTER', 'TESTER', 'ADMIN');

-- CreateTable
CREATE TABLE "Artifact" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "etag" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "organizationId" INTEGER,
    "ownerId" INTEGER NOT NULL,
    "setId" INTEGER,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassificationMetric" (
    "id" SERIAL NOT NULL,
    "accuracy" DOUBLE PRECISION,
    "precision" DOUBLE PRECISION,
    "recall" DOUBLE PRECISION,
    "f1" DOUBLE PRECISION,
    "sensitivity" DOUBLE PRECISION,
    "prevalence" DOUBLE PRECISION,
    "specificity" DOUBLE PRECISION,
    "ppv" DOUBLE PRECISION,
    "npv" DOUBLE PRECISION,
    "supplementary" JSONB,
    "modelId" INTEGER NOT NULL,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Descriptor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" INTEGER,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Method" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" INTEGER,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "keywords" TEXT,
    "deprecated" BOOLEAN NOT NULL DEFAULT false,
    "succeed" BOOLEAN NOT NULL DEFAULT true,
    "trainingEnv" JSONB DEFAULT '{}',
    "trainingInfo" JSONB DEFAULT '{}',
    "download" INTEGER DEFAULT 0,
    "artifactId" INTEGER NOT NULL,
    "descriptorId" INTEGER,
    "propertyId" INTEGER,
    "ownerId" INTEGER,
    "methodId" INTEGER,
    "setId" INTEGER,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modelset" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "keywords" TEXT,
    "private" BOOLEAN NOT NULL DEFAULT false,
    "sampleCode" TEXT,
    "deprecated" BOOLEAN NOT NULL DEFAULT false,
    "organizationId" INTEGER,
    "ownerId" INTEGER,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" INTEGER,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "symbol" TEXT,
    "unit" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" INTEGER,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegressionMetric" (
    "id" SERIAL NOT NULL,
    "meanAbsError" DOUBLE PRECISION,
    "maxAbsError" DOUBLE PRECISION,
    "meanSquareError" DOUBLE PRECISION,
    "rootMeanSquareError" DOUBLE PRECISION,
    "r2" DOUBLE PRECISION,
    "pValue" DOUBLE PRECISION,
    "spearmanCorr" DOUBLE PRECISION,
    "pearsonCorr" DOUBLE PRECISION,
    "supplementary" JSONB,
    "modelId" INTEGER NOT NULL,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL,
    "compound_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "provider_type" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "access_token_expires" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL,
    "user_id" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "session_token" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hashed_pw" TEXT,
    "api_key" TEXT,
    "role" "Role" NOT NULL DEFAULT E'USER',
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_requests" (
    "id" SERIAL,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ModelSetWithContributor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PropertyToModelset" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_OrganizationWithMember" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Artifact.path_unique" ON "Artifact"("path");

-- CreateIndex
CREATE UNIQUE INDEX "Model_artifactId_unique" ON "Model"("artifactId");

-- CreateIndex
CREATE INDEX "Artifact.file_name" ON "Artifact"("filename");

-- CreateIndex
CREATE UNIQUE INDEX "ClassificationMetric.modelId_unique" ON "ClassificationMetric"("modelId");

-- CreateIndex
CREATE INDEX "ClassificationMetric.main_scores" ON "ClassificationMetric"("accuracy", "precision", "recall", "f1");

-- CreateIndex
CREATE UNIQUE INDEX "RegressionMetric.modelId_unique" ON "RegressionMetric"("modelId");

-- CreateIndex
CREATE INDEX "RegressionMetric.main_scores" ON "RegressionMetric"(
    "meanAbsError",
    "meanSquareError",
    "pValue",
    "pearsonCorr"
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts.compound_id_unique" ON "accounts"("compound_id");

-- CreateIndex
CREATE INDEX "providerAccountId" ON "accounts"("provider_account_id");

-- CreateIndex
CREATE INDEX "providerId" ON "accounts"("provider_id");

-- CreateIndex
CREATE INDEX "userId" ON "accounts"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users.hashed_pw_unique" ON "users"("hashed_pw");

-- CreateIndex
CREATE UNIQUE INDEX "sessions.session_token_unique" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "sessions.access_token_unique" ON "sessions"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users.api_key_unique" ON "users"("api_key");

-- CreateIndex
CREATE UNIQUE INDEX "verification_requests.token_unique" ON "verification_requests"("token");

-- CreateIndex
CREATE UNIQUE INDEX "_ModelSetWithContributor_AB_unique" ON "_ModelSetWithContributor"("A", "B");

-- CreateIndex
CREATE INDEX "_ModelSetWithContributor_B_index" ON "_ModelSetWithContributor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PropertyToModelset_AB_unique" ON "_PropertyToModelset"("A", "B");

-- CreateIndex
CREATE INDEX "_PropertyToModelset_B_index" ON "_PropertyToModelset"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrganizationWithMember_AB_unique" ON "_OrganizationWithMember"("A", "B");

-- CreateIndex
CREATE INDEX "_OrganizationWithMember_B_index" ON "_OrganizationWithMember"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Descriptor.name_unique" ON "Descriptor"("name");

-- CreateIndex
CREATE INDEX "Descriptor.search_index" ON "Descriptor"("name", "description");

-- CreateIndex
CREATE UNIQUE INDEX "Method.name_unique" ON "Method"("name");

-- CreateIndex
CREATE INDEX "Method.search_index" ON "Method"("name", "description");

-- CreateIndex
CREATE UNIQUE INDEX "Modelset.name_unique" ON "Modelset"("name");

-- CreateIndex
CREATE INDEX "Model.search_index" ON "Model"("keywords");

-- CreateIndex
CREATE INDEX "Modelset.search_index" ON "Modelset"("name", "description", "keywords");

-- CreateIndex
CREATE UNIQUE INDEX "Organization.name_unique" ON "Organization"("name");

-- CreateIndex
CREATE INDEX "Organization.search_index" ON "Organization"("name", "description");

-- CreateIndex
CREATE UNIQUE INDEX "Property.name_unique" ON "Property"("name");

-- CreateIndex
CREATE INDEX "Property.search_index" ON "Property"("name", "description");

-- AddForeignKey
ALTER TABLE
    "Artifact"
ADD
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Artifact"
ADD
    FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Artifact"
ADD
    FOREIGN KEY ("setId") REFERENCES "Modelset"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "ClassificationMetric"
ADD
    FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Descriptor"
ADD
    FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Method"
ADD
    FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Model"
ADD
    FOREIGN KEY ("descriptorId") REFERENCES "Descriptor"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Model"
ADD
    FOREIGN KEY ("artifactId") REFERENCES "Artifact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Model"
ADD
    FOREIGN KEY ("methodId") REFERENCES "Method"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Model"
ADD
    FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Model"
ADD
    FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Model"
ADD
    FOREIGN KEY ("setId") REFERENCES "Modelset"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Modelset"
ADD
    FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Modelset"
ADD
    FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Organization"
ADD
    FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "Property"
ADD
    FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "RegressionMetric"
ADD
    FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "_ModelSetWithContributor"
ADD
    FOREIGN KEY ("A") REFERENCES "Modelset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "_ModelSetWithContributor"
ADD
    FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "_PropertyToModelset"
ADD
    FOREIGN KEY ("A") REFERENCES "Modelset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "_PropertyToModelset"
ADD
    FOREIGN KEY ("B") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "_OrganizationWithMember"
ADD
    FOREIGN KEY ("A") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "_OrganizationWithMember"
ADD
    FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;