import LoginForm from "@/components/LoginForm";
import JaeCart from "@public/logos-svg/jae_cart";
import Link from "next/link";

export default function SigninPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white sm:bg-slate-100">
      <Link className="flex items-center py-2 fixed top-6 left-12" href="/">
        <JaeCart width={0.46} />
      </Link>
      <div className="sm:shadow-xl sm:w-[450px] rounded-xl p-8 bg-white">
        <h1 className="pt-3 pb-8 text-2xl font-semibold text-slate-700">
          Sign in
        </h1>
        <LoginForm />
        <p className="flex justify-center gap-1 my-1">
          Need to create an account?
          <Link href="/register" className="text-purple-900 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
