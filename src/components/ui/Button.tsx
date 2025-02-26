interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Button({
  children,
  className,
  type,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full bg-primary transition-all py-2 rounded-md text-white ${className}`}
      // @ts-ignore
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
