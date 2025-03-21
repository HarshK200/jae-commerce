import SigninForm from "@/components/SigninForm";
import JaeCart from "@public/logos-svg/jae_cart";
import Link from "next/link";
import { Suspense } from "react";

export default function SigninPage() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white sm:bg-slate-100">
      <Link className="flex items-center py-2 fixed top-6 left-12" href="/">
        <JaeCart width={0.46} />
      </Link>
      <div className="sm:shadow-xl w-full sm:w-[500px] rounded-xl p-12 bg-white">
        <h1 className="pt-3 pb-8 text-2xl font-semibold text-slate-700">
          Sign in as seller
        </h1>
        <Suspense>
          <SigninForm />
        </Suspense>
        <p className="flex justify-center gap-1 my-1">
          Need to create an account?
          <Link
            href="/register/seller"
            className="text-purple-900 hover:underline"
          >
            Become a seller
          </Link>
        </p>
      </div>
    </div>
  );
}
