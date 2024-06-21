import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
	return new PrismaClient();
};

declare global {
	var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
	type Client = {
		id: string;
		name: string | null;
		demand: number;
		custValue: number;
		createdAt: Date;
		updatedAt: Date;
	};

	type LocationA = {
		id: string;
		name: string | null;
		fixedCost: number;
		capacity: number;
		createdAt: Date;
		updatedAt: Date;
	};

	type LocationClient = {
		id: string;
		locationId: string;
		clientId: string;
		cost: number;
		createdAt: Date;
		updatedAt: Date;
	};

	type Result = {
		id: string;
		name: string | null;
		solutionData: string;
		inputdata: string;
		console: string;
		createdAt: Date;
		maxMemory: number;
		statusSolution: string;
		processingTime: number;
	};

	type ParsedResult = {
		id: string;
		name: string | null;
		solutionData: object;
		inputdata: object;
		console: string;
		createdAt: Date;
		maxMemory: number;
		statusSolution: string;
		processingTime: number;
	}
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
