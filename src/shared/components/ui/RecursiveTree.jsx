import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronLeft, MdChevronRight, MdDomain, MdSchool, MdClass } from "react-icons/md";
import clsx from "clsx";
 
const getIcon = (type) => {
    switch (type) {
        case "university": return <MdDomain className="text-emerald-700" />;
        case "faculty": return <MdSchool className="text-emerald-600" />;
        case "department": return <MdClass className="text-emerald-500" />;
        default: return <MdDomain />;
    }
};

const TreeNode = ({ node }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="select-none">
            <motion.div
                whileHover={{ x: 4 }}
                className={clsx(
                    "flex items-center gap-3 p-3 my-1 rounded-lg cursor-pointer transition-colors border",
                    isOpen ? "bg-emerald-50 border-emerald-200" : "bg-white border-transparent hover:bg-gray-50"
                )}
                onClick={() => hasChildren && setIsOpen(!isOpen)}
            >
              
                <span className={clsx("text-gray-400 transition-transform", !hasChildren && "opacity-0")}>
                    {isOpen ? <MdChevronRight className="rotate-90" /> : <MdChevronLeft />}
                </span>
 
                <span className="text-xl bg-white p-1 rounded-full shadow-sm">
                    {getIcon(node.type)}
                </span>

               
                <span className={clsx("font-medium", node.type === "university" ? "text-lg text-slate-800" : "text-base text-gray-700")}>
                    {node.name}
                </span>
            </motion.div>

             
            <AnimatePresence>
                {isOpen && hasChildren && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden mr-6 border-r-2 border-emerald-100 pr-2"
                    >
                        {node.children.map((child) => (
                            <TreeNode key={child.id} node={child} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function RecursiveTree({ data }) {
    return (
        <div className="max-w-3xl mx-auto space-y-2">
            {data.map((node) => (
                <TreeNode key={node.id} node={node} />
            ))}
        </div>
    );
}
