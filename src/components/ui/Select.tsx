interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  children?: React.ReactNode;
}

interface OptionProps extends React.HTMLProps<HTMLOptionElement> {
  children?: React.ReactNode;
}

export function Select({ children, ...props }: SelectProps) {
  return (
    <select
      className="w-min-[80px] px-2 py-1 border-md rounded-md shadow-md outline-none"
      {...props}
    >
      {children}
    </select>
  );
}

export function Option({ children, ...props }: OptionProps) {
  return (
    <option className="border-solid outline-none" {...props}>
      {children}
    </option>
  );
}
