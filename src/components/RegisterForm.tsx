"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Alert } from "./ui/Alert";

type tFormDetails = {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
};

export default function RegisterForm() {
  const [responseErr, setResponseErr] = useState<string | undefined>(undefined);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formDetails, setFormDeatils] = useState<tFormDetails>({});
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await axios.post("/api/register", formDetails);

      if (res.data.status === "success") {
        router.push("/api/auth/signin");
      }
    } catch (err: any) {
      setResponseErr(err.response.data.error);
      // console.log("error occured registering user: ", err);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-y-4 flex-col">
      <div className="flex gap-4 w-full">
        <div className="w-full">
          <label htmlFor="firstname" className="text-sm text-slate-700">
            First name
          </label>
          <Input
            required
            id="firstname"
            type="text"
            value={formDetails?.firstname || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFormDeatils((prev) => {
                return { ...prev, firstname: e.target.value };
              });
            }}
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastname" className="text-sm text-slate-700">
            Last name
          </label>
          <Input
            required
            id="lastname"
            type="text"
            value={formDetails?.lastname || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFormDeatils((prev) => {
                return { ...prev, lastname: e.target.value };
              });
            }}
          />
        </div>
      </div>
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

      {responseErr ? <Alert>{responseErr}</Alert> : null}

      <Button className="my-4 font-bold" type="sumbit">
        Register
      </Button>
      <p className="mx-auto">
        Already have an account?{" "}
        <Link
          href="/api/auth/signin"
          className="text-purple-900 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
