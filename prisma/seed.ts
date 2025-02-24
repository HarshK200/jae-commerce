import { Role } from "@prisma/client";
import { prisma as db } from "../src/db"; // NOTE: you cannot use the tsconfig type alias here i.e. @/db
import { hash } from "bcrypt";

async function seedUsers() {
  const dummyUsers = [
    {
      id: "1",
      role: Role.BUYER,
      email: "testuser1@example.com",
      password_hash: await hash("123", 12),
      firstname: "Test",
      lastname: "User",
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
          id: user.id,
          role: user.role,
          email: user.email,
          password_hash: user.password_hash,
          firstname: user.firstname,
          lastname: user.lastname,
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
