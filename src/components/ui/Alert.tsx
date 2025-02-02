type AlertProps = {
  children: React.ReactNode;
};

export function Alert({ children }: AlertProps) {
  return (
    <div className="my-2 px-4 py-1.5 border border-red-200 rounded-md bg-red-50 text-red-500">
      {children}
    </div>
  );
}
