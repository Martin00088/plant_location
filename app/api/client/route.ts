import { NextResponse } from "next/server";
import prisma from "@/db/prisma";
import { Location } from "@prisma/client";

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

		const location = await prisma.location.findMany();

		location.map(async (location: Location) => {
			await prisma.locationClient.create({
				data: {
					clientId: client.id,
					locationId: location.id,
					cost: 0,
				},
			});
		});

		return NextResponse.json({ client });
	} catch (error) {
		return NextResponse.json({ error });
	}
}

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

export async function DELETE(request: Request, response: Response) {
  try {
    const { id } = await request.json();
    const client = await prisma.client.delete({ where: { id } });
    return NextResponse.json({ client });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
