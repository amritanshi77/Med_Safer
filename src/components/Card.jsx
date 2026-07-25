export default function Card({ children, className = "", onClick, as = "div" }) {
  const Tag = as;
  return (
    <Tag
      onClick={onClick}
      className={`bg-surface rounded-card shadow-card p-5 ${
        onClick ? "cursor-pointer active:scale-[0.98] transition-transform" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}