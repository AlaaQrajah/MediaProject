import clsx from "clsx";

export function Tabs({ value, onChange, items = [], className = "" }) {
  return (
    <div
      className={
        "inline-flex rounded-full bg-emerald-50 p-1 gap-1" + " " + className
      }
      dir="rtl"
    >
      {items.map((tab) => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={clsx(
              "px-4 py-1.5 text-sm font-medium rounded-full transition",
              active
                ? "bg-emerald-900 text-white"
                : "text-emerald-900 hover:bg-emerald-100"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
