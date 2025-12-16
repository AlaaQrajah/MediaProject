import clsx from "clsx";

export default function SectionHeader({ title, subtitle, className, align = "center" }) {
    return (
        <div className={clsx(`text-${align} space-y-2 mb-8 md:mb-12`, className)}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
