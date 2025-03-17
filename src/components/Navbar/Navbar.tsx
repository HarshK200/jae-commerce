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
import { Menu, Search, ShoppingCart } from "lucide-react";

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

      <div className="items-center gap-x-7 hidden lg:flex">
        <CartBtn />
        <LocationBtn />
        {session.status === "authenticated" ? (
          <div className="flex gap-x-5 items-center">
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

      <div className="items-center gap-x-7 hidden md:flex lg:hidden">
        <ShoppingCart />
        <Menu className="cursor-pointer" />
      </div>

      <div className="flex md:hidden gap-x-5 f">
        <Search className="text-primary cursor-pointer transition-transform transform hover:text-accent hover:scale-110 active:scale-100 hover:shadow-[0_0_20px_rgba(39, 206, 39, 1)]" />
        <Menu className="cursor-pointer" />
      </div>
    </nav>
  );
}

export function SellerNavbar() {
  const session = useSession();
  const router = useRouter();

  return (
    <nav className="flex px-10 bg-zinc-100 justify-between">
      <JaeLogo
        width={"1"}
        classname="hover:cursor-pointer my-auto justify-self-start py-3"
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="hidden md:flex">
        <NavLink href="/seller">Dashboard</NavLink>
        <NavLink href="/seller/products">Products</NavLink>
        <NavLink href="/seller/customers">Customers</NavLink>
        <NavLink href="/seller/sales">Sales</NavLink>
      </div>

      <div className="hidden lg:flex items-center gap-x-8 justify-self-end">
        <div className="flex gap-5 items-center">
          <ProfileBtn
            firstname={session?.data?.user.firstname}
            onClick={() => {
              router.push("/seller/profile");
            }}
          />
          <Signout />
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-x-8 justify-self-end">
        <Menu className="cursor-pointer" />
      </div>
    </nav>
  );
}

function NavLink(props: Omit<ComponentProps<typeof Link>, "classname">) {
  const pathName = usePathname();

  return (
    <Link
      {...props}
      className={`h-full px-4 py-3.5 hover:bg-secondary ${pathName === props.href ? "bg-accent" : ""}`}
    />
  );
}
