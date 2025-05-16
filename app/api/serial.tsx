// app/api/serial/route.ts
import { NextResponse } from 'next/server';
import { getLatestSerialData } from '@/lib/serial'; // ✅ use alias path

export async function GET() {
  const data = getLatestSerialData();
  return NextResponse.json({ data });
}
