export default function PageWrapper({ children, className }) {
  return (
    <div className={`w-full flex-1 ${className || ""}`}>
      {children}
    </div>
  );
}
