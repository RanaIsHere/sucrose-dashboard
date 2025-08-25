-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "public"."Permission" AS ENUM ('READ', 'WRITE', 'READ_WRITE');

-- CreateTable
CREATE TABLE "public"."cafe" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cafe_name" TEXT NOT NULL DEFAULT 'Cloudy Curtain',
    "cafe_owner" TEXT NOT NULL DEFAULT 'Ronald Berg',
    "cafe_address" TEXT NOT NULL DEFAULT 'ABC A. Street',

    CONSTRAINT "cafe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."meals" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cafeId" INTEGER,
    "meal_name" TEXT NOT NULL,
    "meal_type" TEXT[],
    "price" BIGINT NOT NULL DEFAULT 1,
    "meal_perks" TEXT[],

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."orders" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" BIGINT NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cafeId" INTEGER,
    "username" TEXT NOT NULL DEFAULT 'admin',
    "password" TEXT NOT NULL DEFAULT 'admin',
    "userPermission" "public"."Permission" NOT NULL DEFAULT 'READ_WRITE',
    "comment" TEXT NOT NULL DEFAULT 'Default user access',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cafe_cafe_name_key" ON "public"."cafe"("cafe_name");

-- CreateIndex
CREATE UNIQUE INDEX "meals_meal_name_key" ON "public"."meals"("meal_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- AddForeignKey
ALTER TABLE "public"."meals" ADD CONSTRAINT "meals_cafeId_fkey" FOREIGN KEY ("cafeId") REFERENCES "public"."cafe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_cafeId_fkey" FOREIGN KEY ("cafeId") REFERENCES "public"."cafe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

