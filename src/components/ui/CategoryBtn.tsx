"use client";
import { Amphora, Bike, Car, HeartPulse, Heater, Shirt } from "lucide-react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  categoryName: String;
}

function getIconForCategory(categoryName: String) {
  switch (categoryName) {
    case "Electronics":
      return <Heater width={20} />;
    case "Motor":
      return <Car width={20} />;
    case "Fashion":
      return <Shirt width={20} />;
    case "Collectibles And Art":
      return <Amphora width={20} />;
    case "Sports":
      return <Bike width={20} />;
    case "Health & beauty":
      return <HeartPulse width={20} />;
    default:
      return null;
  }
}

export function CategoryBtn({ categoryName, children }: ButtonProps) {
  return (
    <button className="whitespace-nowrap flex items-center gap-2 text-sm font-bold px-3 py-1 bg-background border-border-color border-[1px]">
      {children}
      {getIconForCategory(categoryName)}
      <p>{categoryName}</p>
    </button>
  );
}
