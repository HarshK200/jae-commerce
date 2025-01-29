import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function seedUsers() {
  const dummyUsers = [
    {
      id: "1",
      email: "testuser@example.com",
      password: "some$ecure_password1",
      firstName: "Test",
      lastName: "User",
    },
    {
      id: "2",
      email: "testuser2@example.com",
      password: "some$ecure_password2",
      firstName: "Testy",
      lastName: "User2",
    },
  ];

  try {
    dummyUsers.forEach(async (user) => {
      await db.user.upsert({
        where: {
          id: user.id,
        },
        update: {},
        create: {
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
    });
  } catch (err) {
    console.error("Err seeding users");
    throw err;
  }
}

async function seedDB() {
  try {
    await seedUsers();
  } catch (err) {
    console.error("Error seeding database:", err);
    throw err;
  } finally {
    db.$disconnect();
  }
}

seedDB().catch((err) => {
  console.error("An unexpected error occured during seeding: ", err);
  process.exit(1);
});
