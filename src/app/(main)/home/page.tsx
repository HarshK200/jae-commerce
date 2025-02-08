import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/admin/dashboard">admin/dashboard</Link>
    </div>
  );
}
