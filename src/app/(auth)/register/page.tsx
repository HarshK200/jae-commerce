import RegisterForm from "@/components/RegisterForm";
import JaeCart from "@public/logos-svg/jae_cart";

export default function Register() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white sm:bg-slate-100">
      <div className="sm:shadow-xl sm:w-[450px] rounded-xl p-8 bg-white">
        <div className="flex items-center pt-2 pb-8 text-2xl">
          <JaeCart width={0.46} />
          <h1 className="mx-5">Get Started</h1>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
