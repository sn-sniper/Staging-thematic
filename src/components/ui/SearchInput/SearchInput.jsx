import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCompass } from "react-icons/fi";
import "./SearchInput.css";

const SearchInput = ({ onActiveChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof onActiveChange === "function") {
      onActiveChange(isFocused);
    }
  }, [isFocused, onActiveChange]);

  const handleContainerBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const handleContainerFocus = () => {
    setIsFocused(true);
  };

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (query.trim()) {
        navigate(`/search=${encodeURIComponent(query.trim())}`);
      }
    }
  };

  return (
    <div
      className={`search-wrapper${isFocused ? " open" : ""}`}
      onClick={handleContainerClick}
      onFocus={handleContainerFocus}
      onBlur={handleContainerBlur}
      role="search"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearchSubmit}
      />
      <button
        type="button"
        className="discover-button"
        onClick={() => {
          if (query.trim()) {
            navigate(`?search=${encodeURIComponent(query.trim())}`);
          }
        }}
      >
        <FiCompass size={20} color="#666670" />
      </button>
    </div>
  );
};

export default SearchInput;
