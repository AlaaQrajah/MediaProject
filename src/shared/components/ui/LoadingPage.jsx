import { motion } from "framer-motion";

export default function LoadingPage() {
    return (
        <div className="fixed inset-0 min-h-screen bg-[#faf7f3] flex items-center justify-center z-50">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="w-16 h-16 border-4 border-[#004733] border-t-transparent rounded-full animate-spin"
            />
        </div>
    );
}
