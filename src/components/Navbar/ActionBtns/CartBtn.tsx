"use client";
import { ShoppingCart } from "lucide-react";

export default function CartBtn() {
  return (
    <button className="flex gap-2 transition-transform hover:scale-105 active:scale-100">
      <ShoppingCart width={20} />
      <p className="text-lg">Cart</p>
    </button>
  );
}
