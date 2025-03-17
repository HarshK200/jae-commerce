"use server";
import { z } from "zod";
import { prisma as db } from "@/db";
import { redirect } from "next/navigation";

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  // NOTE: this check is skiped if file size is 0
  (file) => file.size === 0 || file.type.startsWith("image/"),
);

export async function addProduct(formData: FormData) {
  const addSchema = z.object({
    name: z.string().min(1),
    price: z.coerce.number().int().min(1), // NOTE: coerce means automatically convert value to a number
    description: z.string().min(1),
    categoryName: z.string().min(1),
    subCategoryName: z.string().min(1),
    inventory: z.coerce.number().int().min(1),
    coverImage: imageSchema.refine((image) => image.size > 0, "Required"),
    showcaseImages: z.array(
      imageSchema.refine((image) => image.size > 0, "Required"),
    ),
  });

  const result = addSchema.safeParse({
    ...Object.fromEntries(formData.entries()),
    showcaseImages: formData.getAll("showcaseImages"),
  });

  if (!result.success) {
    console.log(result.error.formErrors.fieldErrors);
    // return result.error.formErrors.fieldErrors;
    return;
  }

  const data = result.data;
  const category = await db.category.findUnique({
    where: {
      name: data.categoryName,
    },
  });
  if (!category) {
    // return { error: "Invalid category provided" };
    console.log({ error: "Invalid category provided" });
    return;
  }
  const subCategory = await db.subCategory.findUnique({
    where: {
      name: data.subCategoryName,
    },
  });
  if (!subCategory) {
    // return { error: "Invalid subCategory provided" };
    console.log({ error: "Invalid subCategory provided" });
    return;
  }

  // TODO: upload the images to an object store
  const cover_image_url = "cover_url";
  const showcase_images_urls = ["showcase_url1", "showcase_url2"];

  const newProductData = {
    name: data.name,
    description: data.description,
    category_id: category.id,
    sub_category_id: subCategory.id,
    cover_img_url: cover_image_url,
    showcase_img_urls: showcase_images_urls,
  };

  await db.product.create({
    data: newProductData,
  });

  console.log("New product created successfully", newProductData);
  redirect("/seller/products");
}
