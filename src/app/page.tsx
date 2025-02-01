import React from "react";
import LandingPage from "@/components/Landing/LandingPage";
import Navbar from "@/components/Navbar/Navbar";

// server side rendered page because of the async
export default async function Landing() {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
}
