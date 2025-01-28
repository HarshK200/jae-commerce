import SearchBar from "@components/Navbar/SearchBar";
import { JaeLogo } from "@public/logos-svg/all-logos";

export default async function LandingPage() {
  return (
    <>
      <nav className="flex justify-between py-3 px-10 bg-zinc-100">
        <JaeLogo width={"1.2"} />
        <SearchBar />
      </nav>
      <main className="flex flex-col"></main>
    </>
  );
}
