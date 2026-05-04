import { NextResponse } from "next/server";

const mockPantry = [
  { id: "1", name: "Local Rice (Ofada)", amount: 4, unit: "Derica", threshold: 1 },
  { id: "2", name: "Honey Beans", amount: 2.5, unit: "Derica", threshold: 1 },
  { id: "3", name: "Egusi Seeds", amount: 8, unit: "Milk Cup", threshold: 2 },
];

const mockMarketAlerts = [
  { market: "Ojota Market", item: "Rice", trend: "down", change: "5%" },
  { market: "Mile 12", item: "Tomatoes", trend: "up", change: "12%" },
];

export async function GET() {
  return NextResponse.json({
    inventory: mockPantry,
    alerts: mockMarketAlerts
  });
}
