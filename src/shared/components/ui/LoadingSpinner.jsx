import clsx from "clsx";

export default function LoadingSpinner({ size = "md", className }) {
    const sizeClasses = {
        sm: "w-5 h-5 border-2",
        md: "w-8 h-8 border-4",
        lg: "w-12 h-12 border-4",
        xl: "w-16 h-16 border-4",
    };

    return (
        <div className={clsx("flex justify-center items-center", className)}>
            <div
                className={clsx(
                    "border-[#004733] border-t-transparent rounded-full animate-spin",
                    sizeClasses[size]
                )}
            ></div>
        </div>
    );
}
