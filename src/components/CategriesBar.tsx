import { prisma as db } from "@/db";
import { CategoryBtn } from "./ui/CategoryBtn";
import { Menu } from "lucide-react";

export async function CategoryBar() {
  const productCategories = await db.productCategory.findMany();

  return (
    <div className="flex overflow-x-auto w-full md:justify-center">
      <CategoryBtn categoryName={"All Category"}>
        <Menu width={20} />
      </CategoryBtn>
      {productCategories.map((category) => {
        return <CategoryBtn key={category.name} categoryName={category.name} />;
      })}
    </div>
  );
}
