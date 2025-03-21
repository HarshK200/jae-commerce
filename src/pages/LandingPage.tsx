import { Carousel } from "@/components/Carousel/Carousel";
import { CategoryBar } from "@/components/CategriesBar";

export default async function LandingPage() {
  return (
    <>
      <CategoryBar />
      <main className="flex flex-col items-center w-full min-h-screen">
        <Carousel />
      </main>
    </>
  );
}
