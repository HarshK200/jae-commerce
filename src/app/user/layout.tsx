import { Navbar } from "@/components/Navbar/Navbar";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <>
    <Navbar />
    {children}
  </>
}
