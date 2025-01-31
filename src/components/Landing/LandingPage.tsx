import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function LandingPage() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <main className="flex flex-col">
        landing page
        <div className="flex flex-col">
          <h1>Sever session:</h1>
          <p>{JSON.stringify(session)}</p>
        </div>
      </main>
    </>
  );
}
