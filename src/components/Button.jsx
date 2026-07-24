function Button({
  children,
  href,
  icon: Icon,
  variant = "primary",
  target,
}) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105";

  const primaryStyle =
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/40";

  const secondaryStyle =
    "bg-white/5 backdrop-blur-xl border border-slate-700 text-white hover:border-blue-500 hover:bg-white/10";

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`${baseStyle} ${
        variant === "primary" ? primaryStyle : secondaryStyle
      }`}
    >
      {Icon && <Icon className="text-lg" />}
      <span>{children}</span>
    </a>
  );
}

export default Button;