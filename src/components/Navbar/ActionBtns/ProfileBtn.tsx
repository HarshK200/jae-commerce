"use client";
import { UserRound } from "lucide-react";

interface ProfileBtnProps extends React.HTMLProps<HTMLButtonElement> {
  firstname: string | undefined;
}

export default function ProfileBtn({ firstname, onClick }: ProfileBtnProps) {
  return (
    <button
      className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-100"
      onClick={onClick}
    >
      <UserRound width={23} />
      <p>{firstname ? firstname : "user"}</p>
    </button>
  );
}
