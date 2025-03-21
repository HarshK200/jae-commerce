interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
}

export function GetStartedBtn({ className }: ButtonProps) {
  return (
    <button
      className={`w-fit text-black px-5 py-2 font-bold bg-accent rounded-full ${className}`}
    >
      Get Started
    </button>
  );
}
