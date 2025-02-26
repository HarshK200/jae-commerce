import { createProduct } from "@/app/seller/_actions/products";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export default function AddProductForm() {
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
        <Input required id="price" name="price" type="number" />
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
      <div className="w-full">
        <label htmlFor="category" className="text-sm text-slate-700">
          Category
        </label>
        {/* TODO: add dropdown*/}
        <Input required id="category" name="category" type="number" />
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
      {/* TODO: add proudct cover_image, showcase_images, inventory */}
      <Button type="submit" className="w-20">
        Submit
      </Button>
    </form>
  );
}
