import React from "react";
import LandingPage from "@/components/Landing/LandingPage";
import { Navbar } from "@/components/Navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

// server side rendered page because of the async
export default async function Landing() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/user");
  }

  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
}
