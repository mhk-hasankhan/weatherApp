import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={submitHandler} className="search">
      <input
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
