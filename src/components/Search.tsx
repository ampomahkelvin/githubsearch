import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, KeyboardEvent } from "react";

type Props = {
  username: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  showError: boolean;
};

const Search = ({ username, onInputChange, onSearch, showError }: Props) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex bg-light-background mt-9 rounded-md shadow-xl h-[69px]">
      <div className="flex w-full items-center">
        <MagnifyingGlassIcon className="h-8 pl-8 text-primary" />
        <div className="flex w-full justify-between">
          <input
            type="text"
            placeholder="Search GitHub username…"
            value={username}
            onChange={onInputChange}
            onKeyDown={handleKeyPress}
            className="pl-6 outline-none w-full"
          />
          {showError && (
            <span className="text-red-500 text-sm whitespace-nowrap">
              No results
            </span>
          )}
        </div>
      </div>
      <button
        onClick={onSearch}
        className="bg-primary text-white px-6 py-auto3 my-2 mx-2 rounded-md hover:bg-[#60ABFF]"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
