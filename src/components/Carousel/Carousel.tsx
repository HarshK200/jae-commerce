"use client";
import { useEffect, useState } from "react";
import { GetStartedBtn } from "./GettingStartedBtn";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

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
  {
    title: "Get your order or your money back",
    subTitle: "Shop confidently with eBay Money Back Guarantee.",
    imageUrl: "/assets/delivery_man_on_scooty.jpg",
  },
];

export function Carousel() {
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);
  const [autoScrollId, setAutoScrollId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    toggleAutoScroll();

    return () => {
      autoScrollId ? clearInterval(autoScrollId) : null;
    };
  }, []);

  function toggleAutoScroll() {
    if (!autoScrollId) {
      const IntervalId = setInterval(() => {
        showNextImage();
      }, 5000);

      setAutoScrollId(IntervalId);
      return IntervalId;
    }

    clearInterval(autoScrollId);
    setAutoScrollId(null);
    return null;
  }

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
      <button
        className="absolute right-[7.5rem] bottom-12 bg-white rounded-full p-0.5"
        onClick={showPrevImage}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute right-20 bottom-12 bg-white rounded-full p-0.5"
        onClick={showNextImage}
      >
        <ChevronRight />
      </button>
      <button
        className="absolute right-10 bottom-12 bg-white rounded-full p-0.5"
        onClick={() => toggleAutoScroll()}
      >
        {autoScrollId ? <Pause width={22} /> : <Play width={22} />}
      </button>
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
      className={`flex-shrink-0 flex flex-col md:justify-center w-full max-w-[1440px] h-96 md:h-[22rem] text-white my-8 px-10 bg-cover bg-bottom xl:rounded-md ${className}`}
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
