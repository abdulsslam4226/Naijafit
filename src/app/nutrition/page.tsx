import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import NutritionClient from "./NutritionClient";
import { redirect } from "next/navigation";

export default async function NutritionPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/onboarding");
  }

  const pantryItems = await prisma.pantryItem.findMany({
    where: { userId: session.user.id },
  });

  // Seed initial data if empty for demo
  if (pantryItems.length === 0) {
    const initialItems = [
      { name: "Local Rice (Ofada)", count: 4, unit: "Derica" },
      { name: "Honey Beans", count: 2.5, unit: "Derica" },
    ];
    
    await prisma.pantryItem.createMany({
      data: initialItems.map((item: any) => ({
        ...item,
        userId: session.user.id,
      })),
    });
    
    return <NutritionClient initialPantry={initialItems} />;
  }

  return <NutritionClient initialPantry={pantryItems} />;
}
