import Link from "next/link";
import { Plus } from "lucide-react";

export default function SellerDashboardPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <h1 className="text-3xl p-2">Dashboard</h1>
      <div className="flex flex-col w-[300px] my-8 rounded-md shadow-md">
        <div className="flex justify-between bg-slate-100 p-3 rounded-t-md">
          <h1 className="text-lg font-bold">List of products</h1>
          <Link href={"/admin/createproduct"}>
            <Plus width={20} />
          </Link>
        </div>
        <div className="flex flex-col px-3 py-2">
          <p>product 1</p>
          <p>product 2</p>
        </div>
      </div>
    </div>
  );
}
