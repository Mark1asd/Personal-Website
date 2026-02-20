type Props = React.PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary" | "icon";
  external?: boolean;
  ariaLabel?: string;
  className?: string;
}>;

const base =
  "inline-flex items-center justify-center transition";

const variants = {
  primary:
    "rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3 font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35",
  secondary:
    "rounded-full border border-white/20 bg-white/5 px-7 py-3 font-medium text-white hover:bg-white/10",
  icon:
    "rounded-full border border-white/10 bg-white/5 p-3 text-white/60 hover:border-white/20 hover:bg-white/10 hover:text-white",
};

export function ButtonLink({
  href,
  variant = "secondary",
  external,
  ariaLabel,
  className,
  children,
}: Props) {
  const rel = external ? "noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <a
      href={href}
      rel={rel}
      target={target}
      aria-label={ariaLabel}
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
    >
      {children}
    </a>
  );
}