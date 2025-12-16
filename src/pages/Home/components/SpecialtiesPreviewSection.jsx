import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../../../shared/components/ui/Card";
import Button from "../../../shared/components/ui/Button";
import SectionWrapper from "../../../shared/components/ui/SectionWrapper";
import SectionHeader from "../../../shared/components/ui/SectionHeader";
import SpecialtyCardSkeleton from "../../../shared/components/skeletons/SpecialtyCardSkeleton";
import {
  MdOutlineSchool,
  MdWorkOutline,
  MdGroups,
  MdArrowForward,
  MdChevronRight,
  MdChevronLeft,
} from "react-icons/md";

import specialtyMain from "../../../assets/specialties/specialty-main.png";
import decoCap from "../../../assets/decorations/specialties-cap.svg";
import decoGlobe from "../../../assets/decorations/specialties-globe.svg";

import { useSpecialties } from "../../../features/specialties/hooks/useSpecialties";
import { ROUTES } from "../../../shared/constants/routes";

const PAGE_SIZE = 3;

export default function SpecialtiesPreviewSection() {
  const { data: specialties = [], isLoading } = useSpecialties();
  const [page, setPage] = useState(0);

  if (isLoading) {
    return (
      <SectionWrapper bgColor="bg-[#f4f8fb]" className="relative">
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <SpecialtyCardSkeleton key={i} />
          ))}
        </div>
      </SectionWrapper>
    );
  }

  const pageCount = Math.ceil(specialties.length / PAGE_SIZE);
  const handleNext = () => setPage((prev) => (prev + 1) % pageCount);
  const handlePrev = () => setPage((prev) => (prev - 1 + pageCount) % pageCount);

  const start = page * PAGE_SIZE;
  const current = specialties.slice(start, start + PAGE_SIZE);

  return (
    <SectionWrapper bgColor="bg-[#f8fafc]" className="relative overflow-hidden">
      {/* الزخارف */}
      <img
        src={decoCap}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-6 right-10 w-28 md:w-36 opacity-40 rotate-12"
      />
      <img
        src={decoGlobe}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-6 left-6 w-32 md:w-40 opacity-30"
      />

      <div className="relative space-y-10 z-10">
        {/* أعلى القسم: العنوان + زر كل الاختصاصات */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <SectionHeader
              title="الاختصاصات والدراسات العليا"
              subtitle="طوّر مسارك الأكاديمي والمهني مع برامج الدراسات العليا المتخصصة."
              align="right"
              className="mb-0"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
              <button
                onClick={handleNext}
                className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-700 hover:bg-[#004733] hover:text-white transition-all shadow-sm"
              >
                <MdChevronRight className="text-xl" />
              </button>
              <button
                onClick={handlePrev}
                className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-700 hover:bg-[#004733] hover:text-white transition-all shadow-sm"
              >
                <MdChevronLeft className="text-xl" />
              </button>
            </div>

            <Link to={ROUTES.SPECIALTIES}>
              <Button className="bg-[#004733] hover:bg-[#003723] text-white px-6 shadow-lg shadow-emerald-900/10">
                كل الاختصاصات
              </Button>
            </Link>
          </div>
        </div>

        {/* Slider Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {current.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="group flex flex-col overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white rounded-3xl">
                    {/* الصورة */}
                    <div className="relative bg-gradient-to-b from-[#e3f2fd] to-white h-48 flex items-center justify-center overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        src={specialtyMain}
                        alt={item.title}
                        className="w-4/5 h-4/5 object-contain drop-shadow-lg"
                      />

                      <div className="absolute top-4 right-4">
                        <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-bold text-[#004733] shadow-sm border border-emerald-100">
                          {item.level}
                        </span>
                      </div>
                    </div>

                    {/* المحتوى */}
                    <div className="flex-1 px-6 py-5 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 leading-tight mb-2 group-hover:text-[#004733] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                          {item.faculty} · {item.university}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                        <div className="text-center group-stat">
                          <div className="bg-emerald-50 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-[#004733] group-hover:text-white transition-colors duration-300">
                            <MdOutlineSchool className="text-lg text-[#004733] group-hover:text-white" />
                          </div>
                          <span className="block text-[10px] text-slate-600 font-medium truncate">{item.studyType}</span>
                        </div>
                        <div className="text-center">
                          <div className="bg-amber-50 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-amber-600">
                            <MdWorkOutline className="text-lg" />
                          </div>
                          <span className="block text-[10px] text-slate-600 font-medium truncate">مشاريع</span>
                        </div>
                        <div className="text-center">
                          <div className="bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600">
                            <MdGroups className="text-lg" />
                          </div>
                          <span className="block text-[10px] text-slate-600 font-medium truncate">طلاب</span>
                        </div>
                      </div>

                      <Link to={`${ROUTES.SPECIALTIES}/${item.id}`}>
                        <button className="w-full mt-2 flex items-center justify-center gap-2 text-sm text-[#004733] font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span>عرض التفاصيل</span>
                          <MdArrowForward />
                        </button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`transition-all duration-300 rounded-full ${i === page ? "w-8 h-2 bg-[#004733]" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
