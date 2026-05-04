import { NextResponse } from "next/server";

// This is a mock database for demonstration. 
// In production, you would connect to Firestore, MongoDB, or PostgreSQL here.
let mockLogs: any[] = [];

export async function GET() {
  return NextResponse.json(mockLogs);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  const newLog = {
    id: Math.random().toString(36).substring(7),
    timestamp: new Date().toISOString(),
    ...body
  };
  
  mockLogs.push(newLog);
  
  console.log("New Daily Log Saved:", newLog);

  return NextResponse.json({ 
    message: "Check-in successful!", 
    log: newLog,
    streakUpdated: true 
  }, { status: 201 });
}
