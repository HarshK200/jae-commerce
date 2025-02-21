import RegisterForm from "@/components/RegisterForm";
import JaeCart from "@public/logos-svg/jae_cart";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white sm:bg-slate-100">
      <Link className="flex items-center py-2 fixed top-6 left-12" href="/">
        <JaeCart width={0.46} />
      </Link>
      <div className="sm:shadow-xl w-full sm:w-[500px] rounded-xl p-12 bg-white">
        <h1 className="pt-3 pb-8 text-2xl font-semibold text-slate-700">
          Become a seller today
        </h1>
        <RegisterForm />
        <p className="flex justify-center gap-1 my-1">
          Already have an account?
          <Link
            href="/api/auth/signin"
            className="text-purple-900 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
