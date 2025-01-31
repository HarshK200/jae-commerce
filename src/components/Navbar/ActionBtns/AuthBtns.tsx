import { signIn, signOut } from "next-auth/react";

export function Signin() {
  return (
    <button
      className="px-5 py-1.5 m-[2px] hover:m-0 bg-primary text-white hover:text-black hover:bg-slate-100 rounded-lg transition-transform transition-colors hover:scale-105 hover:border-[2px] hover:border-accent active:scale-100"
      onClick={() => {
        signIn();
      }}
    >
      Sign In
    </button>
  );
}

export function Signout() {
  return (
    <button
      className="px-5 py-1.5 border-[2px] border-primary rounded-lg transition-transform transition-colors hover:scale-105 hover:border-accent active:scale-100"
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </button>
  );
}
