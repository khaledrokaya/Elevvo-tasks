function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <i className="fas fa-search w-5 h-5 text-gray-400"></i>
      </div>
      <input
        type="text"
        placeholder="Search posts by title or description..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="block w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <i className="fas fa-times w-4 h-4 text-gray-400 hover:text-gray-600"></i>
        </button>
      )}
    </div>
  );
}

export default SearchBar;