"use client";
import { Search } from "lucide-react";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");

  function handleSearch(e: MouseEvent<HTMLButtonElement>) {}

  /* appears only on large*/
  return (
    <div className="w-[40%] hidden md:flex">
      <input
        className="w-[80%] text-sm px-8 rounded-l-full border-zinc-300 outline-none"
        placeholder="Search..."
        value={searchText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
      />
      <button
        className="w-14 bg-white flex justify-center py-[3px] rounded-r-full border-zinc-300"
        onClick={handleSearch}
      >
        <Search width={23} className="text-primary transition-transform transform hover:text-accent hover:scale-110 active:scale-100 hover:shadow-[0_0_20px_rgba(39, 206, 39, 1)]" />
      </button>
    </div>
  );
}
