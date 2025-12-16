import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdSearch, MdLocationOn, MdSchool, MdArrowBack, MdFilterList } from "react-icons/md";
import PageWrapper from "../../../shared/components/layout/PageWrapper";
import UniversityCardSkeleton from "../../../shared/components/skeletons/UniversityCardSkeleton";
import Button from "../../../shared/components/ui/Button";
import { ROUTES } from "../../../shared/constants/routes";

// Filter Categories matching the screenshot
const FILTERS = [
    { id: "all", label: "الكل" },
    { id: "public", label: "الحكومية" },
    { id: "private", label: "الخاصة" },
    { id: "virtual", label: "الافتراضية" },
];

const UniversityCard = ({ uni, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
        >
            {/* Logo Section */}
            <div className="flex flex-col items-center pt-8 pb-4 px-4 bg-gradient-to-b from-gray-50 to-white rounded-t-2xl">
                <div className="w-24 h-24 mb-4 rounded-full bg-white shadow-md flex items-center justify-center p-2 border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                    <img
                        src={uni.logo || uni.image}
                        alt={uni.name}
                        className="w-full h-full object-contain"
                    />
                </div>
                <h3 className="text-xl font-bold text-center text-slate-800">{uni.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{uni.subtitle || "الجمهورية العربية السورية"}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 my-2"></div>

            {/* Details Section */}
            <div className="p-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-gray-400">التأسيس</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1">
                        🗓️ {uni.establishedAt || "2000"}
                    </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-gray-400">الموقع</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1">
                        <MdLocationOn className="text-emerald-500" /> {uni.city || uni.location}
                    </span>
                </div>
            </div>

            {/* Action Button */}
            <div className="p-4 pt-0">
                <Link
                    to={`${ROUTES.UNIVERSITIES}/${uni.id}`}
                    className="mt-6 w-full py-3 rounded-xl bg-[#004733] text-white font-bold hover:bg-[#003828] transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                    <span>تصفح الجامعة</span>
                    <MdArrowBack className="group-hover:-translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

function UniversitiesList({ universities, isLoading, error, searchQuery, onSearchChange }) {
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter Logic
    const filteredUniversities = useMemo(() => {
        let result = universities;
        // 1. Category Filter
        if (activeFilter !== "all") {
            result = result.filter(u => u.type === activeFilter);
        }
        // 2. Search Query (handled by parent usually, but ensuring local consistency)
        if (searchQuery) {
            result = result.filter(u => u.name.includes(searchQuery));
        }
        return result;
    }, [universities, activeFilter, searchQuery]);


    if (error) {
        return (
            <div className="text-center py-20 bg-red-50 rounded-lg">
                <p className="text-red-500">حدث خطأ أثناء تحميل البيانات</p>
                <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">تحديث الصفحة</Button>
            </div>
        );
    }

    return (
        <PageWrapper>
            {/* Header */}
            <div className="bg-[#4a0f18] py-10 md:py-16 text-center text-white mb-8 relative">
                <h1 className="text-4xl font-bold mb-2">الجامعات</h1>
                {/* Custom Breadcrumb-ish or decorative line */}
            </div>

            <section className="mx-auto max-w-7xl px-4 pb-12" dir="rtl">

                {/* Search & Filters */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 -mt-16 relative z-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">

                    {/* Search */}
                    <div className="w-full md:w-1/3 relative">
                        <MdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="ابحث عن جامعة..."
                            className="w-full pl-4 pr-10 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#c5a365] focus:bg-white outline-none transition-all"
                        />
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${activeFilter === filter.id
                                    ? "bg-[#c5a365] text-white shadow-md"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                {isLoading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => <UniversityCardSkeleton key={i} />)}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredUniversities.map((uni, index) => (
                                <UniversityCard key={uni.id} uni={uni} index={index} />
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {!isLoading && filteredUniversities.length === 0 && (
                    <div className="text-center py-24">
                        <p className="text-gray-500 text-lg">لا توجد جامعات مطابقة للفلتر المحدد</p>
                    </div>
                )}

            </section>
        </PageWrapper>
    );
}

export default React.memo(UniversitiesList);
