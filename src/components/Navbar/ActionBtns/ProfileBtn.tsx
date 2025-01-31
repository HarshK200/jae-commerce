"use client";
import { UserRound } from "lucide-react";

export default function ProfileBtn({ firstname }: { firstname: string | undefined }) {
  return (
    <button className="flex gap-2 transition-transform hover:scale-105 active:scale-100">
      <UserRound width={23} />
      <p>{firstname ? firstname : "fetching..."}</p>
    </button>
  );
}
