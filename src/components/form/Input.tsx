import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

const Input = ({ wrapperClassName, ...props }: InputProps) => {
  return (
    <div className={wrapperClassName}>
      <MagnifyingGlassIcon className="h-8 w-8" />
      <input {...props} />
    </div>
  );
};

export default Input;
