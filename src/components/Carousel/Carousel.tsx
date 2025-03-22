"use client";
import { useState } from "react";
import { GetStartedBtn } from "./GettingStartedBtn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselCardsData = [
  {
    title: "Your One-Stop online store",
    subTitle: "We got everthing you could ever want and more...",
    imageUrl: "/assets/wide_packages.jpg",
  },
  {
    title: "Returns made simple",
    subTitle: "Not happy with your purchase? It's easy to start a return.",
    imageUrl: "/assets/loading_package.jpg",
    className: "bg-center",
  },
];

export function Carousel() {
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);

  function showNextImage() {
    setCurrentImageIdx((prev) => {
      if (prev + 1 === CarouselCardsData.length) {
        return 0;
      }

      return prev + 1;
    });
  }

  function showPrevImage() {
    setCurrentImageIdx((prev) => {
      if (prev - 1 < 0) {
        return CarouselCardsData.length - 1;
      }
      return prev - 1;
    });
  }

  return (
    <section className="relative flex w-full lg:max-w-[1440px] overflow-hidden">
      {CarouselCardsData.map((data, index) => {
        return (
          <CarouselCard
            currentImageIndex={currentImageIdx}
            key={index}
            {...data}
          />
        );
      })}
      <ChevronLeft
        className="absolute right-20 bottom-12"
        onClick={showPrevImage}
      />
      <ChevronRight
        className="absolute right-10 bottom-12"
        onClick={showNextImage}
      />
    </section>
  );
}

interface CarouselCardProps {
  currentImageIndex: number;
  title: string;
  subTitle: string;
  imageUrl: string;
  className?: string;
}

function CarouselCard({
  currentImageIndex,
  title,
  subTitle,
  imageUrl,
  className,
}: CarouselCardProps) {
  return (
    <div
      className={`flex-shrink-0 flex flex-col md:justify-center w-full max-w-[1440px] h-96 md:h-80 text-white my-8 px-10 bg-cover bg-bottom lg:rounded-md ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${imageUrl})`,
        translate: `${-100 * currentImageIndex}%`,
        transition: "translate 300ms ease-in-out",
      }}
    >
      <h1 className="pt-5 text-3xl font-bold">{title}</h1>
      <div className="pt-4">
        <p>{subTitle}</p>
      </div>
      <GetStartedBtn className="mt-4 mb-4" />
    </div>
  );
}
