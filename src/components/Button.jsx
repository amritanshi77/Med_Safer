export default function Button({
  children,
  onClick,
  variant = "primary",
  icon: Icon,
  full = true,
  size = "lg",
  type = "button",
}) {
  const base =
    "flex items-center justify-center gap-2 rounded-2xl font-display font-semibold transition-transform active:scale-[0.97] disabled:opacity-50";

  const sizes = {
    lg: "h-16 px-6 text-lg",
    md: "h-14 px-5 text-base",
    sm: "h-11 px-4 text-sm",
  };

  const variants = {
    primary: "bg-primary text-white shadow-floating hover:bg-primary-dark",
    secondary: "bg-primary-light text-primary-dark hover:bg-mint",
    outline: "bg-white border-2 border-primary text-primary-dark hover:bg-primary-light",
    danger: "bg-danger text-white hover:opacity-90",
    ghost: "bg-transparent text-slate hover:bg-surfaceAlt",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${full ? "w-full" : ""}`}
    >
      {Icon && <Icon size={22} strokeWidth={2.2} />}
      {children}
    </button>
  );
}