import { NextRequest, NextResponse } from "next/server";
import OpenProcessesDataManagerSingleton from "@/lib/OpenProcess";

export async function OPTIONS() {
  const response = new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",  // Allow all domains (or specify one)
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
  return response;
}

export async function POST(req: NextRequest) {

  const processList= OpenProcessesDataManagerSingleton.getInstance()
  const { processes, access_token } = await req.json();
  console.log(access_token);
  
  
  processList.setData(processes)
  console.log("Running processes->", processList);
  return NextResponse.json({ message: processes });
}
