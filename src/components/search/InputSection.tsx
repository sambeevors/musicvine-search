import Input from "../form/Input";
import Select from "../form/Select";

interface InputSectionProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  searchType: string;
  searchQuery: string;
}

const InputSection = ({
  handleInputChange,
  handleSelectChange,
  searchType,
  searchQuery,
}: InputSectionProps) => {
  return (
    <div className="container mx-auto mb-4 flex justify-center gap-4 sm:mb-8">
      <Input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="text-brand-main-text placeholder:text-brand-main-text/25 w-full bg-transparent px-3 py-2 text-2xl font-black placeholder-opacity-25 focus:outline-none"
        wrapperClassName="relative w-full max-w-md flex bg-transparent border-b px-3 py-2 items-center text-brand-main-text border-brand-main-border focus-within:border-brand-main-border-focus transition"
      />
      <Select
        onChange={handleSelectChange}
        defaultValue={searchType}
        className="hover:bg-brand-main-bg-hover focus:ring-brand-main h-full appearance-none rounded-lg bg-transparent py-2 pl-3 pr-12 text-2xl font-black transition focus:outline-none focus:ring-2"
        wrapperClassName="relative flex items-center"
      >
        <option value="tracks">Tracks</option>
        <option value="sfx">SFX</option>
      </Select>
    </div>
  );
};

export default InputSection;
