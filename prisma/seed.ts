import db from "../src/db"; // NOTE: you cannot use the tsconfig type alias here i.e. @/db
import { hash } from "bcrypt";

async function seedUsers() {
  const dummyUsers = [
    {
      id: "1",
      email: "testuser1@example.com",
      password: await hash("123", 12),
      firstName: "Test",
      lastName: "User",
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
