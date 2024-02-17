import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  wrapperClassName?: string;
}

const Select = ({ children, wrapperClassName, ...props }: SelectProps) => {
  return (
    <div className={wrapperClassName}>
      <select {...props}>{children}</select>
      <ChevronDownIcon
        className="pointer-events-none absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 transform select-none"
        aria-hidden
      />
    </div>
  );
};

export default Select;
