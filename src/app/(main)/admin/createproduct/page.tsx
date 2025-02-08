import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function CreateProductPage() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-white">
      <h1 className="text-xl px-44 pt-10 font-bold">Sell a new product</h1>
      <form className="flex flex-col w-full py-8 px-44 gap-6">
        <div className="w-full">
          <label htmlFor="name" className="text-sm text-slate-700">
            Name
          </label>
          <Input required id="name" type="text" />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="description" className="text-sm text-slate-700">
            Description
          </label>
          <Textarea required className="text-sm" />
        </div>
        {/* TODO: add proudct image_url, showcase_img_urls, price, inventory */}
        <div className="w-full">
          <label htmlFor="price" className="text-sm text-slate-700">
            Price
          </label>
          <Input required id="price" type="number" />
        </div>
      </form>
    </div>
  );
}
