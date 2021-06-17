const Search = ({ changeSearch, search }) => {
  return (
      <div className="side-search">
        <input
          type="text"
          value={search}
          onChange={changeSearch}
          id="search"
          placeholder="search..."
        />
          <button id="search-btn">
            <img className="search-img" src="/assets/search.jpg" alt="search" />
        </button>
      </div>
  )
};

export default Search;
