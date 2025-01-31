"use client";
import { JaeLogo } from "@public/logos-svg/all-logos";
import SearchBar from "@/components/Navbar/SearchBar";
import CartBtn from "@/components/Navbar/ActionBtns/CartBtn";
import ProfileBtn from "@/components/Navbar/ActionBtns/ProfileBtn";
import LocationBtn from "@/components/Navbar/ActionBtns/LocationBtn";
import { useSession } from "next-auth/react";
import { Signin, Signout } from "./ActionBtns/AuthBtns";
import { redirect } from "next/navigation";

export default function Navbar() {
  const session = useSession();

  return (
    <nav className="flex justify-between items-center py-2.5 px-10 bg-zinc-100">
      <JaeLogo
        width={"1.1"}
        classname="hover:cursor-pointer"
        onClick={() => {
          redirect("/");
        }}
      />
      <SearchBar />
      <div className="flex items-center gap-x-8">
        <CartBtn />
        <LocationBtn />
        {session.status === "authenticated" ? (
          <div className="flex gap-5 items-center">
            <ProfileBtn firstname={session.data.user.firstname} />
            <Signout />
          </div>
        ) : (
          <Signin />
        )}
      </div>
    </nav>
  );
}
