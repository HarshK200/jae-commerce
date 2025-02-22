"use client";
import { JaeLogo } from "@public/logos-svg/all-logos";
import SearchBar from "@/components/Navbar/SearchBar";
import CartBtn from "@/components/Navbar/ActionBtns/CartBtn";
import ProfileBtn from "@/components/Navbar/ActionBtns/ProfileBtn";
import LocationBtn from "@/components/Navbar/ActionBtns/LocationBtn";
import { useSession } from "next-auth/react";
import { Signin, Signout } from "./ActionBtns/AuthBtns";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ComponentProps } from "react";

export function Navbar() {
  const session = useSession();
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center py-2.5 px-10 bg-zinc-100">
      <JaeLogo
        width={"1"}
        classname="hover:cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      />
      <SearchBar />
      <div className="flex items-center gap-x-8">
        <CartBtn />
        <LocationBtn />
        {session.status === "authenticated" ? (
          <div className="flex gap-5 items-center">
            <ProfileBtn
              firstname={session.data.user.firstname}
              onClick={() => {
                router.push("/user/profile");
              }}
            />
            <Signout />
          </div>
        ) : (
          <Signin />
        )}
      </div>
    </nav>
  );
}

export function SellerNavbar() {
  const session = useSession();
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center px-10 bg-zinc-100">
      <JaeLogo
        width={"1"}
        classname="hover:cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="flex">
        <NavLink href="/seller/dashboard">Dashboard</NavLink>
        <NavLink href="/seller/products">Products</NavLink>
        <NavLink href="/seller/customers">Customers</NavLink>
        <NavLink href="/seller/sales">Sales</NavLink>
      </div>
      <div className="flex items-center gap-x-8">
        <LocationBtn />
        <div className="flex gap-5 items-center">
          <ProfileBtn
            firstname={session?.data?.user.firstname}
            onClick={() => {
              router.push("/user/profile");
            }}
          />
          <Signout />
        </div>
      </div>
    </nav>
  );
}

function NavLink(props: Omit<ComponentProps<typeof Link>, "classname">) {
  const pathName = usePathname();

  return (
    <Link
      {...props}
      className={`h-full p-4 hover:bg-secondary ${pathName === props.href ? "bg-accent" : ""}`}
    />
  );
}
