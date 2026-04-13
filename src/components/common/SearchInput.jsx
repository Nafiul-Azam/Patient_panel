function SearchInput({ value, onChange, placeholder }) {
  return (
    <label className="page-search" aria-label={placeholder}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="page-search-icon"
        aria-hidden="true"
      >
        <circle
          cx="11"
          cy="11"
          r="6.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M16 16L20 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

export default SearchInput;
