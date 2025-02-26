import { SellerNavbar } from "@/components/Navbar/Navbar";

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SellerNavbar/>
      {children}
    </>
  );
}
