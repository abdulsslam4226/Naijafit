import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import ProfileClient from "./ProfileClient";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/onboarding");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      _count: {
        select: { mealLogs: true },
      },
      progressLogs: {
        orderBy: { date: "desc" },
        take: 1,
      },
    },
  });

  if (!user) {
    redirect("/onboarding");
  }

  const currentWeight = user.progressLogs[0]?.weight || null;

  return (
    <ProfileClient 
      user={{
        ...user,
        currentWeight,
      }} 
    />
  );
}
