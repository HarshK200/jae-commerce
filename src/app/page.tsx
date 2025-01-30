import React from "react";
import LandingPage from "@/components/Landing/LandingPage";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

// server side rendered page because of the async
export default async function Landing() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <LandingPage />
      <div className="flex flex-col">
        <h1>Sever session:</h1>
        <p>{JSON.stringify(session)}</p>
      </div>
    </>
  );
}
