import clsx from "clsx";

export default function SectionWrapper({
    children,
    className,
    bgColor = "bg-[#f9f5f1]",
    containerWidth = "max-w-6xl"  
}) {
    return (
        <section className={clsx(bgColor, "py-12 md:py-16", className)} dir="rtl">
            <div className={clsx("mx-auto px-4", containerWidth)}>
                {children}
            </div>
        </section>
    );
}
