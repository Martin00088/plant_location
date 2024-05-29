import { NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function GET(request: Request, response: Response) {
  try {
    const clients = await prisma.client.findMany();
    return NextResponse.json({ clients });
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
