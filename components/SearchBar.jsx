const SearchBar = () => {
  return (
    <div className="mt-8 flex w-full items-center justify-center px-4">
      <div className="relative flex w-[45%] items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="flex h-10 w-full items-center justify-center rounded-2xl border border-gray-600 bg-transparent pl-11 text-sm shadow-sm shadow-gray-600 outline-none"
          placeholder="Enter city name"
        />
        <span className="material-symbols-outlined absolute left-4 text-xl text-gray-400">
          search
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
