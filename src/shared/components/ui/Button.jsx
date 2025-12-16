import clsx from "clsx";

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-emerald-900 text-white hover:bg-emerald-800 focus:ring-2 focus:ring-emerald-500",
  outline:
    "border border-emerald-900 text-emerald-900 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500",
  ghost:
    "text-emerald-900 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500",
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={clsx(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
