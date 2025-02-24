import { NextRequest, NextResponse } from "next/server";
import OpenProcessesDataManagerSingleton from "@/lib/OpenProcess";

export async function GET() {
  const processList = OpenProcessesDataManagerSingleton.getInstance();
  return NextResponse.json({ processes: processList.getData() ?? [] });
}
export async function POST(req: NextRequest) {
  const token = process.env.Token;
  const processList= OpenProcessesDataManagerSingleton.getInstance()
  const { processes, access_token } = await req.json();
  console.log(access_token);
  if (token != access_token) {
    console.log("Unauthorized access");
    return NextResponse.json(
      { message: "Unauthorized access" },
      { status: 401 },
    );
  }
  
  processList.setData(processes)
  console.log("Running processes->", processList);
  return NextResponse.json({ message: processes });
}
