import { prisma as db } from "@/db";
import { CategoryBtn } from "./ui/CategoryBtn";

export async function CategoryBar() {
  const productCategories = await db.productCategory.findMany();

  return (
    <div className="flex overflow-x-auto w-full md:justify-center">
      {productCategories.map((category) => {
        return <CategoryBtn key={category.name} categoryName={category.name} />;
      })}
    </div>
  );
}
