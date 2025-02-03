"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Alert } from "./ui/Alert";
import { signIn } from "next-auth/react";

type tFormDetails = {
  email?: string;
  password?: string;
};

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formDetails, setFormDeatils] = useState<tFormDetails>({});
  const searchParams = useSearchParams();
  const error = searchParams.get("error") ? "Invalid credentials" : null;
  const callbackUrl = searchParams.get("callbackUrl");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      signIn("credentials", {
        email: formDetails.email,
        password: formDetails.password,
        callbackUrl: callbackUrl || "/home",
      });
    } catch (err: any) {
      // setResponseErr(err.response.data.error);
      console.log("error occured registering user: ", err);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-y-5 flex-col">
      <div>
        <label htmlFor="email" className="text-sm text-slate-700">
          Email
        </label>
        <Input
          required
          id="email"
          type="email"
          value={formDetails?.email || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormDeatils((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="password" className="text-sm text-slate-700">
          Password
        </label>
        <div className="flex">
          <Input
            required
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            className="rounded-r-none"
            value={formDetails?.password || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFormDeatils((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
          />
          <button
            type="button"
            className="px-2 border border-l-0 rounded-md rounded-l-none"
            onClick={() => {
              setIsPasswordVisible((prev) => {
                return !prev;
              });
            }}
          >
            {isPasswordVisible ? <Eye /> : <EyeOff />}
          </button>
        </div>
      </div>

      {error && <Alert>{error}</Alert>}

      <Button className="my-4 font-bold" type="sumbit">
        Login
      </Button>
    </form>
  );
}
