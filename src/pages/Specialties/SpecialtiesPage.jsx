import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdSearch,
  MdComputer,
  MdBusiness,
  MdHealthAndSafety,
  MdGavel,
  MdArchitecture
} from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Button from "../../shared/components/ui/Button";
import { ROUTES } from "../../shared/constants/routes";

 
const CATEGORIES = [
  { id: "all", label: "الكل" },
  { id: "engineering", label: "الهندسة" },
  { id: "medical", label: "الطبية" },
  { id: "sciences", label: "العلوم" },
  { id: "arts", label: "الآداب" },
  { id: "economics", label: "الاقتصاد" },
];

 
const SPECIALTIES = [
  { id: 1, title: "هندسة البرمجيات", category: "engineering", level: "ماجستير", icon: <MdComputer />, color: "bg-blue-100 text-blue-600", image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80" },
  { id: 2, title: "الذكاء الصنعي", category: "engineering", level: "دكتوراه", icon: <FaUserGraduate />, color: "bg-purple-100 text-purple-600", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80" },
  { id: 3, title: "طب الأسنان التجميلي", category: "medical", level: "ماجستير", icon: <MdHealthAndSafety />, color: "bg-emerald-100 text-emerald-600", image: "https://images.unsplash.com/photo-1588776814546-1b967dc86527?w=800&q=80" },
  { id: 4, title: "إدارة الأعمال", category: "economics", level: "ماجستير", icon: <MdBusiness />, color: "bg-orange-100 text-orange-600", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" },
  { id: 5, title: "القانون الدولي", category: "arts", level: "دبلوم", icon: <MdGavel />, color: "bg-red-100 text-red-600", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80" },
  { id: 6, title: "التصميم المعماري", category: "engineering", level: "ماجستير", icon: <MdArchitecture />, color: "bg-indigo-100 text-indigo-600", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" },
];

export default function SpecialtiesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = SPECIALTIES.filter(s => {
    const matchesTab = activeTab === "all" || s.category === activeTab;
    const matchesSearch = s.title.includes(search);
    return matchesTab && matchesSearch;
  });

  return (
    <PageWrapper>
      <SEO title="الاختصاصات والدراسات العليا" description="تصفح كافة الاختصاصات المتاحة للدراسات العليا في الجامعات السورية" />

      
      <div className="relative mb-24">
         <div className="bg-[#4a0f18] py-16 text-center text-white relative overflow-hidden rounded-b-[3rem]">
          <div className="absolute inset-0 bg-black/10"></div>
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4" dir="rtl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الاختصاصات والدراسات العليا</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              اكتشف مسارك الأكاديمي المستقبلي من بين مجموعة واسعة من برامج الماجستير والدكتوراه
            </p>
          </div>
        </div>

         <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-full max-w-2xl px-4 z-20">
          <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center pr-4 border border-gray-100">
            <MdSearch className="text-3xl text-gray-400 ml-2 shrink-0" />
            <input
              type="text"
              placeholder="ابحث عن اختصاص (مثال: هندسة برمجيات...)"
              className="flex-1 h-12 outline-none text-gray-700 text-base md:text-lg bg-transparent w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button className="rounded-xl bg-[#004733] hover:bg-[#003828] text-white px-6 md:px-8 h-12 mr-2 transition-all shadow-md hover:shadow-lg shrink-0">
              بحث
            </Button>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8" dir="rtl">

         <div className="flex justify-center flex-wrap gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === cat.id
                ? "bg-[#c5a365] text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x400/e2e8f0/475569?text=University"; // Fallback
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm text-slate-800">
                    {item.level}
                  </div>
                  <div className="absolute bottom-4 right-4 text-white">
                    <p className="text-xs opacity-90 mb-1">الكلية</p>
                    <p className="font-bold text-sm">كلية الهندسة المعلوماتية</p>
                  </div>
                </div>

                <div className="p-6 text-center -mt-10 relative flex-1 flex flex-col">
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl shadow-lg mb-4 border-[6px] border-white ${item.color} relative z-10 bg-white`}>
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#004733] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    برنامج متميز يهدف إلى إعداد كوادر متخصصة في {item.title} وفق أحدث المناهج العلمية والمعايير العالمية.
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center group/footer">
                    <div className="flex -space-x-3 space-x-reverse px-2">
                       {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${item.id + i}`} alt="student" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-[10px] text-gray-600 font-bold border-2 border-white shadow-sm">+50</span>
                    </div>

                    <Link
                      to={`${ROUTES.SPECIALTIES}/${item.id}`} // assuming ROUTES.SPECIALTIES is /specialties
                      className="flex items-center gap-1 text-[#004733] font-bold text-sm hover:gap-2 transition-all bg-emerald-50 px-4 py-2 rounded-full hover:bg-emerald-100"
                    >
                      <span>عرض التفاصيل</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>لا توجد نتائج مطابقة لبحثك</p>
          </div>
        )}

      </section>

    </PageWrapper>
  );
}
