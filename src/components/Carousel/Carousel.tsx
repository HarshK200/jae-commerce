"use client";
import { useState } from "react";
import { GetStartedBtn } from "./GettingStartedBtn";

const CarouselCardsData = [
  {
    title: "Your One-Stop online store",
    subTitle: "We got everthing you could ever want and more...",
    imageUrl: "url(/assets/wide_packages.jpg)",
  },
  {
    title: "Returns made simple",
    subTitle: "Not happy with your purchase? It's easy to start a return.",
    imageUrl: "url(/assets/loading_package.jpg)",
    className: "bg-center",
  },
];

export function Carousel() {
  const [currentCard, setCurrentCard] = useState<number>(0);

  return (
    <section className="w-full lg:max-w-[1440px]">
      {CarouselCardsData.map((data, index) => {
        if (currentCard === index) {
          return <CarouselCard key={index} {...data} />;
        }
      })}
      <button
        onClick={() =>
          setCurrentCard((prev) => {
            if (prev + 1 === CarouselCardsData.length) {
              return 0;
            }
            return prev + 1;
          })
        }
      >
        Change card
      </button>
    </section>
  );
}

interface CarouselCardProps {
  title: string;
  subTitle: string;
  imageUrl: string;
  className?: string;
}

function CarouselCard({
  title,
  subTitle,
  imageUrl,
  className,
}: CarouselCardProps) {
  return (
    <div
      className={`flex flex-col md:justify-center w-full max-w-[1440px] h-96 md:h-80 text-white my-8 px-10 bg-cover bg-bottom lg:rounded-md ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), ${imageUrl}`,
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
