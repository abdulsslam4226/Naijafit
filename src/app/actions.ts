"use server";

import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function logWeight(weight: number) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) throw new Error("Unauthorized");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  await prisma.progressLog.upsert({
    where: {
      id: `weight-${session.user.id}-${today.getTime()}`, // Not a real cuid but for simplicity in demo
    },
    update: { weight },
    create: {
      userId: session.user.id,
      weight,
      date: today,
    },
  });

  revalidatePath("/progress");
}

export async function toggleMovement(moved: boolean) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) throw new Error("Unauthorized");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  await prisma.progressLog.upsert({
    where: {
      id: `move-${session.user.id}-${today.getTime()}`,
    },
    update: { moved },
    create: {
      userId: session.user.id,
      moved,
      date: today,
    },
  });

  // Update user streak if moved
  if (moved) {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { streak: { increment: 1 } },
    });
  }

  revalidatePath("/tracker");
}

export async function updatePantry(name: string, count: number, unit: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) throw new Error("Unauthorized");

  await prisma.pantryItem.upsert({
    where: {
      userId_name: {
        userId: session.user.id,
        name,
      },
    },
    update: { count, unit },
    create: {
      userId: session.user.id,
      name,
      count,
      unit,
    },
  });

  revalidatePath("/nutrition");
}

export async function logMeal(recipeId: string, recipeName: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) throw new Error("Unauthorized");

  await prisma.mealLog.create({
    data: {
      userId: session.user.id,
      recipeId,
      recipeName,
    },
  });

  revalidatePath("/profile");
}
