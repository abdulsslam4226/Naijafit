import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import ProgressClient from "./ProgressClient";
import { redirect } from "next/navigation";

export default async function ProgressPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/onboarding");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      progressLogs: {
        orderBy: { date: "desc" },
        take: 30,
      },
    },
  });

  if (!user) {
    redirect("/onboarding");
  }

  const currentWeight = user.progressLogs.find((log: any) => log.weight !== null)?.weight || 0;
  const targetWeight = user.targetWeight || 70.0;

  return (
    <ProgressClient 
      initialWeight={currentWeight} 
      targetWeight={targetWeight}
      streak={user.streak}
      recentLogs={user.progressLogs}
    />
  );
}
