"use client";
import { createProduct } from "@/app/seller/_actions/products";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { ChangeEvent, useState } from "react";
import { formatCurrency } from "@/lib/formatters";
import { Option, Select } from "@/components/ui/Select";

export default function AddProductForm() {
  const [price, setPrice] = useState<number | null>(null);
  const categories = ["cat 1", "cat 2", "cat 3"];

  return (
    <form
      className="flex flex-col w-full py-8 px-44 gap-6"
      action={createProduct}
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
      <div className="w-full flex gap-8">
        <div className="flex gap-2 items-center">
          <label htmlFor="category" className="text-sm text-slate-700">
            Category
          </label>
          <Select>
            {categories.map((category) => (
              <Option>{category}</Option>
            ))}
          </Select>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="category" className="text-sm text-slate-700">
            Sub-Category
          </label>
          <Select>
            {categories.map((category) => (
              <Option>{category}</Option>
            ))}
          </Select>
        </div>
      </div>
      <div>
        <label htmlFor="inventory" className="text-sm text-slate-700">
          Inventory
        </label>
        <Input required id="inventory" name="inventory" type="number" />
      </div>
      <div>
        <label htmlFor="cover_image" className="text-sm text-slate-700">
          Cover Image
        </label>
        <Input
          required
          id="cover_image"
          name="cover_image"
          type="file"
          accept="image/*"
        />
      </div>
      <div>
        <label htmlFor="showcase_images" className="text-sm text-slate-700">
          Showcase Images
        </label>
        <Input
          required
          id="showcase_images"
          name="showcase_images"
          type="file"
          accept="image/*"
          multiple
        />
      </div>
      {/* TODO: add proudct  inventory */}
      <Button type="submit" className="w-24">
        Submit
      </Button>
    </form>
  );
}
