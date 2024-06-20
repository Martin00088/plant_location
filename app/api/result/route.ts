import { NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function GET(request: Request, response: Response) {
  try {
    const results = await prisma.results.findMany();
    return NextResponse.json({ results });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}

export async function POST(request: Request, response: Response) {
  try {
    const { name, demand, custValue } = await request.json();
    const client = await prisma.client.create({
      data: { name, demand, custValue },
    });
    return NextResponse.json({ client });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
