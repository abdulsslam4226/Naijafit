import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import TrackerClient from "./TrackerClient";
import { redirect } from "next/navigation";

export default async function TrackerPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/onboarding");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      progressLogs: {
        where: {
          date: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      },
    },
  });

  if (!user) {
    redirect("/onboarding");
  }

  const hasMovedToday = user.progressLogs.some((log: any) => log.moved);

  return (
    <TrackerClient 
      initialStreak={user.streak} 
      hasMovedToday={hasMovedToday} 
    />
  );
}
