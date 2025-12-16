import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
    label?: string;
    error?: string;
}

export default function Input({
    label,
    error,
    className = "",
    ...props
}: InputProps) {
    return (
        <div className={`flex flex-col gap-1 ${className}`} dir="rtl">
            {label && (
                <label className="text-sm font-medium text-gray-800">{label}</label>
            )}
            <input
                className="
          w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600
        "
                {...props}
            />
            {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
    );
}
