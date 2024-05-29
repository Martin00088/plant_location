import prisma from "./prisma";

async function main() {
  const alice = await prisma.client.create({
    data: {
      name: "Alice",
      demand: 100,
      custValue: 10,
    },
  });
  await prisma.client.create({
    data: {
      name: "Bob",
      demand: 200,
      custValue: 20,
    },
  });
  console.log("Created client Alice with id: ", alice.id);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
