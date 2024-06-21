import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/prisma";


export async function GET(request: NextRequest, { params }: { params: { resultId: string } }) {
	try {
		const locations = await prisma.results.findUniqueOrThrow({
			where: { id: params.resultId },
		})
	  return NextResponse.json({ locations });
	} catch (error) {
	  return NextResponse.json({ error });
	}
}

export async function DELETE(request: NextRequest, { params }: { params: { resultId: string } }) {
	try {
		const data = await prisma.results.delete({ where: { id: params.resultId } })
	  	return NextResponse.json({ message: "Deleted", data });
	} catch (error) {
	  return NextResponse.json({ error });
	}
}