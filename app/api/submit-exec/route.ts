import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { success: false, message: "Executive registrations are closed." },
    { status: 403 }
  );
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Executive registrations are closed." },
    { status: 403 }
  );
}
