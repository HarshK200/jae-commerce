export function Select({ children }: { children: React.ReactNode }) {
  return (
    <select className="px-2 py-1 border-md rounded-md shadow-md outline-none">
      {children}
    </select>
  );
}

export function Option({ children, ...props }: { children: React.ReactNode }) {
  return (
    <option className="border-none outline-none" {...props}>
      {children}
    </option>
  );
}
