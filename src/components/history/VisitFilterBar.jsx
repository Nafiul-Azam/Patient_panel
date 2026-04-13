import FilterTabs from "../common/FilterTabs";

function VisitFilterBar({ filters, activeFilter, onChange }) {
  return (
    <FilterTabs items={filters} active={activeFilter} onChange={onChange} />
  );
}

export default VisitFilterBar;
