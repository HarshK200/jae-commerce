"use client";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { ChangeEvent, useState } from "react";
import { formatCurrency } from "@/lib/formatters";
import { Option, Select } from "@/components/ui/Select";

export default function AddProductForm() {
  const [price, setPrice] = useState<number | null>(null);

  return (
    <form
      className="flex flex-col w-full py-8 px-10 md:px-16 lg:px-24 gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        alert("submit was pressed");
      }}
    >
      <div className="w-full">
        <label htmlFor="name" className="text-sm text-slate-700">
          Name
        </label>
        <Input required id="name" name="name" type="text" />
      </div>
      <div className="w-full">
        <label htmlFor="price" className="text-sm text-slate-700">
          Price
        </label>
        <Input
          required
          id="price"
          name="price"
          type="number"
          value={price || ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            try {
              setPrice(Number(e.target.value));
            } catch (e) {
              console.log(e);
            }
          }}
        />
        <label className="text-sm text-slate-700">
          {formatCurrency(price || 0)}
        </label>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="description" className="text-sm text-slate-700">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          required
          className="text-sm"
        />
      </div>

      <CategoriesDropDowns />

      <div>
        <label htmlFor="inventory" className="text-sm text-slate-700">
          Inventory
        </label>
        <Input required id="inventory" name="inventory" type="number" />
      </div>
      <div>
        <label htmlFor="coverImage" className="text-sm text-slate-700">
          Cover Image
        </label>
        <Input
          required
          id="coverImage"
          name="coverImage"
          type="file"
          accept="image/*"
        />
      </div>
      <div>
        <label htmlFor="showcaseImages" className="text-sm text-slate-700">
          Showcase Images
        </label>
        <Input
          required
          id="showcaseImages"
          name="showcaseImages"
          type="file"
          accept="image/*"
          multiple
        />
      </div>
      <Button type="submit" className="w-24">
        Submit
      </Button>
    </form>
  );
}

const CategoriesDropDowns = () => {
  const [categories, setCategories] = useState<any[] | null>(null);
  const [subCategories, setSubCategories] = useState<any[] | null>(null);
  const [selectedCat, setSelectedCat] = useState<any | null>(null);

  return (
    <div className="w-full flex gap-8">
      <div className="flex flex-col gap-2 items-center">
        <label htmlFor="categoryName" className="text-sm text-slate-700">
          Category
        </label>
        <Select
          name="categoryName"
          id="categoryName"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const category = categories?.find(
              (cat) => cat.name === e.target.value,
            );
            // console.log("Category change to: ", category);
            setSelectedCat(category!);
          }}
        >
          {categories &&
            categories.map((category) => {
              return (
                <Option
                  key={category.id}
                  onClick={() => {
                    setSelectedCat(category);
                  }}
                >
                  {category.name}
                </Option>
              );
            })}
        </Select>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <label htmlFor="subCategoryName" className="text-sm text-slate-700">
          Sub-Category
        </label>
        <Select name="subCategoryName" id="subCategoryName">
          {subCategories &&
            subCategories.map((subCategory) => (
              <Option key={subCategory.id}>{subCategory.name}</Option>
            ))}
        </Select>
      </div>
    </div>
  );
};
