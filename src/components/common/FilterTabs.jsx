function FilterTabs({ items, active, onChange }) {
  return (
    <div className="filter-tabs" role="tablist" aria-label="Filters">
      {items.map((item) => (
        <button
          key={item}
          className={`filter-tab ${active === item ? "active" : ""}`.trim()}
          onClick={() => onChange(item)}
          type="button"
          role="tab"
          aria-selected={active === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
