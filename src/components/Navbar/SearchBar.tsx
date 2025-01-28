"use client";
import { Search } from "lucide-react";
import { MouseEvent } from "react";

export default function SearchBar() {
  function handleSearch(e: MouseEvent<HTMLButtonElement>) {}

  return (
    <div className="w-[45%] flex">
      <input
        className="w-[90%] px-8 py-1.5 rounded-l-full border border-r-[0] border-zinc-300 outline-none"
        placeholder="Search..."
      />
      <button
        className="w-14 bg-white flex justify-center py-1.5 border border-l-[0] rounded-r-full border-zinc-300"
        onClick={handleSearch}
      >
        <Search className="text-primary transition-transform transform hover:text-accent hover:scale-110 active:scale-100 hover:shadow-[0_0_20px_rgba(39, 206, 39, 1)]" />
      </button>
    </div>
  );
}
