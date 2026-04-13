import BackButton from "./BackButton";
import SearchInput from "./SearchInput";

function SectionTitle({
  title,
  subtitle,
  action,
  showBack = true,
  backLabel,
  searchPlaceholder,
  searchValue = "",
  onSearchChange,
}) {
  return (
    <div className="section-title-block">
      <div className="section-title-wrap">
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>

      <div className="section-top-tools">
        {showBack ? <BackButton label={backLabel} /> : <span />}
        {searchPlaceholder && onSearchChange && (
          <SearchInput
            value={searchValue}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
          />
        )}
      </div>
    </div>
  );
}

export default SectionTitle;
