import { createContext, useContext, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

 
const DashboardContext = createContext();

 
export default function Dashboard({ children, defaultSidebarOpen = true }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(defaultSidebarOpen);

    return (
        <DashboardContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            <div className="flex min-h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden border">
                {children}
            </div>
        </DashboardContext.Provider>
    );
}

     const { isSidebarOpen } = useContext(DashboardContext);

    return (
        <motion.aside
            initial={false}
            animate={{ width: isSidebarOpen ? 260 : 0, opacity: isSidebarOpen ? 1 : 0 }}
            className="bg-slate-50 border-l overflow-hidden flex-shrink-0"
        >
            <div className="p-6 w-[260px] space-y-6">
                {children}
            </div>
        </motion.aside>
    );
 ;

Dashboard.Content = function DashboardContent({ children }) {
    return <main className="flex-1 bg-white p-8 overflow-y-auto">{children}</main>;
};

Dashboard.Header = function DashboardHeader({ title, subtitle }) {
    const { isSidebarOpen, setIsSidebarOpen } = useContext(DashboardContext);
    return (
        <header className="flex justify-between items-center mb-8 pb-4 border-b">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
                {subtitle && <p className="text-slate-500 text-sm mt-1">{subtitle}</p>}
            </div>
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-sm text-[#004733] font-medium hover:underline"
            >
                {isSidebarOpen ? "إخفاء القائمة" : "إظهار القائمة"}
            </button>
        </header>
    );
};

Dashboard.StatCard = function StatCard({ icon, label, value, color }) {
    return (
        <div className="bg-gray-50 p-4 rounded-xl border flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={clsx("p-3 rounded-lg text-white text-xl", color || "bg-[#004733]")}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-xl font-bold text-slate-800">{value}</p>
            </div>
        </div>
    );
}

Dashboard.Section = function DashboardSection({ title, children }) {
    return (
        <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#004733] rounded-full block"></span>
                {title}
            </h3>
            {children}
        </section>
    );
};
