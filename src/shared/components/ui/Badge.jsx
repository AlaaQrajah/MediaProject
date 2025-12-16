import clsx from "clsx";

export default function Badge({ children, variant = "default", className, ...props }) {
    const variants = {
        default: "bg-slate-100 text-slate-800",
        success: "bg-emerald-100 text-emerald-800",
        warning: "bg-amber-100 text-amber-800",
        danger: "bg-red-100 text-red-800",
        outline: "border border-slate-200 text-slate-600 bg-transparent"
    };

    return (
        <span
            className={clsx(
                "inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                variants[variant] || variants.default,
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
