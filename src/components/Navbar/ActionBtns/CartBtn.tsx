"use client";
import { ShoppingCart } from "lucide-react";

export default function CartBtn() {
  return (
    <button className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-100">
      <ShoppingCart width={18} />
      <p>Cart</p>
    </button>
  );
}
