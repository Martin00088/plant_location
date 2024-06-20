import { NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function GET(request: Request, response: Response) {
  try {
    const locations = await prisma.location.findMany();
    return NextResponse.json({ locations });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cost, capacity } = body;
    const location = await prisma.location.create({
      data: { fixedCost: Number(cost), capacity: Number(capacity) },
    });
    return NextResponse.json({ location });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}

export async function DELETE(request: Request, response: Response) {
  try {
    const { id } = await request.json();
    const location = await prisma.location.delete({ where: { id } });
    return NextResponse.json({ location });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
