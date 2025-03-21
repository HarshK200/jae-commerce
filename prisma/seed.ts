import { prisma as db } from "../src/db"; // NOTE: you cannot use the tsconfig type alias here i.e. @/db
import { hash } from "bcrypt";

async function seedUsers() {
  const dummyUsers = [
    {
      id: "1",
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

async function seedCategories() {
  const categories = [
    { name: "Electronics" },
    { name: "Motor" },
    { name: "Fashion" },
    { name: "Collectibles And Art" },
    { name: "Sports" },
    { name: "Health & beauty" },
  ];

  try {
    categories.forEach(async (category) => {
      await db.productCategory.create({
        data: category,
      });
    });
  } catch (e) {
    console.log(`Error seeding categories: ${e}`);
  }
}

async function seedAllCategories() {
  const categories = [
    {
      parentCat: {
        name: "Electronics",
        description: "Electronics products & appliances",
      },
      subCats: [
        {
          name: "Mobiles & Accessories",
          description: "Latest mobiles from top brands",
        },
        {
          name: "Laptops & Accessories",
          description: "Latest laptops from top brands",
        },
        {
          name: "TV & Home Entertainment",
          description: "Best home entertainment & TVs",
        },
        {
          name: "Headphones, Earbuds & Accessories",
          description:
            "Top grade sound quality geadphones, earbuds & accessories",
        },
        {
          name: "Cameras",
          description: "Capture your moments with top quality cameras",
        },
        {
          name: "Computer Peripherals",
          description:
            "Affordable computer peripherals, build your dream pc today",
        },
      ],
    },
    {
      parentCat: {
        name: "Fashion",
        description: "Latest & trending clothes, wearables, footware, etc..",
      },
      subCats: [
        { name: "Women", description: "Latest fashion for women" },
        { name: "Men", description: "Latest fashion for men" },
        { name: "Kids", description: "Latest fashion for kids" },
        {
          name: "Bags & Luggage",
          description: "Most luxurious bags from top brands",
        },
        {
          name: "Sportswear",
          description: "Top quality and long lasting sportswear",
        },
      ],
    },
    {
      parentCat: {
        name: "Home & Kitchen",
        description:
          "Kitchen appliances, dining & Home decor, furniture, etc...",
      },
      subCats: [
        {
          name: "Kitchen & Home Appliances",
          description: "",
        },
        {
          name: "Large Appliances",
          description: "",
        },
        {
          name: "Kitchen & Dining",
          description: "",
        },
        {
          name: "Furniture",
          description: "",
        },
        {
          name: "Home Furnishing",
          description: "",
        },
        {
          name: "Home Decor",
          description: "",
        },
        {
          name: "Garden & Outdoor",
          description: "",
        },
      ],
    },
  ];
}

async function seedDB() {
  try {
    await seedUsers();
    await seedCategories();
    // await seedAllCategories();
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
