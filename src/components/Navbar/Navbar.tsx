import { JaeLogo } from "@public/logos-svg/all-logos";
import SearchBar from "@/components/Navbar/SearchBar";
import CartBtn from "@/components/Navbar/Btns/CartBtn";
import ProfileBtn from "@/components/Navbar/Btns/ProfileBtn";
import LocationBtn from "@/components/Navbar/Btns/LocationBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center py-3 px-10 bg-zinc-100">
      <JaeLogo width={"1.2"} />
      <SearchBar />
      <div className="flex items-center gap-x-8">
        <CartBtn />
        <LocationBtn />
        {session ? <ProfileBtn /> : "Login"}
      </div>
    </nav>
  );
}
