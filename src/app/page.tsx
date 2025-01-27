import React from "react";
import LandingPage from "@components/Landing/LandingPage";

// server side rendered page because of the async
export default async function Landing() {
  return (
    <>
      <LandingPage />
    </>
  );
}
