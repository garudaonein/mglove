// app/api/mock/route.ts
import { NextResponse } from 'next/server';
import { getMockFilteredData } from '@/lib/mockserial';

export async function GET() {
  const data = getMockFilteredData();
  return NextResponse.json(data);
}
