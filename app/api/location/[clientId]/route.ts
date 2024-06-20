import { NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function PUT(request: Request, response: Response) {
  try {
    const { id, name, demand, custValue } = await request.json();
    const client = await prisma.client.update({
      where: { id },
      data: { name, demand, custValue },
    });
    return NextResponse.json({ client });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
