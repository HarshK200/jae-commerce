import AddProductForm from "@/components/(Seller)/AddProductForm";

export default function CreateProductPage() {
  return (
    <div className="flex flex-col h-min w-full bg-white">
      <h1 className="text-3xl px-44 pt-10 font-bold">Add new product</h1>
      <AddProductForm />
    </div>
  );
}
