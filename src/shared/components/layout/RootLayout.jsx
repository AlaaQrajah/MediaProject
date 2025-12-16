import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundAnimation from "../ui/BackgroundAnimation";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../ui/PageTransition";

export default function RootLayout() {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col" dir="rtl">
            <BackgroundAnimation />
            <Navbar />

            <div className="flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                    {/* Main Page Transition Handler */}
                    <PageTransition key={location.pathname}>
                        <Outlet />
                    </PageTransition>
                </AnimatePresence>
            </div>

            <Footer />
        </div >
    );
}
