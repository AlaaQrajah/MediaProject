import clsx from "clsx";

export default function Skeleton({ className, ...props }) {
    return (
        <div
            className={clsx("animate-pulse rounded-md bg-slate-200/80", className)}
            {...props}
        />
    );
}
