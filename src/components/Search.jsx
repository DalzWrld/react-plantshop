function Search({ search, onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">🔍</label>
      <input
        type="text"
        id="search"
        placeholder="Search plants by name..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;