import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div className="flex flex-col">
      <h1>USER DETAILS:</h1>
      <h1>id - {}</h1>
      <h1>firstname - {}</h1>
      <h1>lastname - {}</h1>
      <h1>email - {}</h1>
    </div>
  );
}
