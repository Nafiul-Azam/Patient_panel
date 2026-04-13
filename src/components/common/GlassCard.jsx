function GlassCard({ title, subtitle, rightSlot, children, className = "" }) {
  return (
    <section className={`glass-card ${className}`.trim()}>
      {(title || subtitle || rightSlot) && (
        <header className="glass-card-header">
          <div>
            {title && <h3>{title}</h3>}
            {subtitle && <p>{subtitle}</p>}
          </div>
          {rightSlot && <div>{rightSlot}</div>}
        </header>
      )}
      {children}
    </section>
  );
}

export default GlassCard;
