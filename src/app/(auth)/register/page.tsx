import RegisterForm from "@/components/RegisterForm";
import JaeCart from "@public/logos-svg/jae_cart";

export default function Register() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white sm:bg-slate-100">
      <div className="sm:shadow-xl sm:w-[450px] rounded-xl p-8 bg-white">
        <div className="flex items-center py-2 pb-8">
          <JaeCart width={0.50} />
          <h1 className="mx-4 font-bold text-primary text-3xl">JAE</h1>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
