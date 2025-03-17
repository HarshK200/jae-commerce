import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col">
      <h1>USER DETAILS:</h1>
      <h1>id - {session?.user.id}</h1>
      <h1>firstname - {session?.user.firstname}</h1>
      <h1>lastname - {session?.user.lastname}</h1>
      <h1>email - {session?.user.email}</h1>
      <h1>role - {session?.user.role}</h1>
    </div>
  );
}
