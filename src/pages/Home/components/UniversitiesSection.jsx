import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  MdLocationOn,
  MdGroups,
  MdVisibility,
  MdAccountBalance,
  MdChevronRight,
  MdChevronLeft,
  MdArrowForward,
} from "react-icons/md";

import { ROUTES } from "../../../shared/constants/routes";
import SectionWrapper from "../../../shared/components/ui/SectionWrapper";
import SectionHeader from "../../../shared/components/ui/SectionHeader";
import LoadingSpinner from "../../../shared/components/ui/LoadingSpinner";
import Button from "../../../shared/components/ui/Button";

 
import decoArrows from "../../../assets/decorations/universities-arrows.svg";
import decoArrowRight from "../../../assets/decorations/deco-arrow-right.svg";
import decoStar from "../../../assets/decorations/deco-star.svg";

import { useUniversities } from "../../../features/universities/hooks/useUniversities";

const PAGE_SIZE = 3;

export default function UniversitiesSection() {
  const { data: universities = [], isLoading } = useUniversities();
  const [page, setPage] = useState(0);

  if (isLoading) {
    return (
      <SectionWrapper>
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      </SectionWrapper>
    );
  }

  const pageCount = Math.ceil((universities?.length || 0) / PAGE_SIZE);

  const handleNext = () => setPage((prev) => (prev + 1) % pageCount);
  const handlePrev = () => setPage((prev) => (prev - 1 + pageCount) % pageCount);

  const start = page * PAGE_SIZE;
  const current = universities ? universities.slice(start, start + PAGE_SIZE) : [];

  return (
    <SectionWrapper className="relative">
      <div className="relative space-y-10">
     
        <img
          src={decoArrows}
          alt=""
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 opacity-70 pointer-events-none select-none"
        />

        <img
          src={decoArrowRight}
          alt=""
          className="hidden md:block absolute top-32 -right-20 w-16 opacity-80 pointer-events-none select-none"
        />

        <img
          src={decoStar}
          alt=""
          className="hidden md:block absolute bottom-10 -left-16 w-10 opacity-90 pointer-events-none select-none"
        />

      
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right space-y-2">
            <SectionHeader
              title="الجامعات"
              subtitle="اكتشف أفضل الجامعات السورية المناسبة لك."
              align="right"
              className="mb-0 md:mb-0"
            />
          </div>
 
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-full border border-slate-200">
              <button
                onClick={handleNext}
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-slate-700 hover:bg-[#004733] hover:text-white transition-all shadow-sm"
                aria-label="التالي"
              >
                <MdChevronRight className="text-xl" />
              </button>

              <button
                onClick={handlePrev}
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-slate-700 hover:bg-[#004733] hover:text-white transition-all shadow-sm"
                aria-label="السابق"
              >
                <MdChevronLeft className="text-xl" />
              </button>
            </div>

            <Link to={ROUTES.UNIVERSITIES}>
              <Button size="sm" className="bg-[#004733] hover:bg-[#003723] text-white px-6">
                كل الجامعات
              </Button>
            </Link>
          </div>
        </div>

    
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {current.map((uni) => (
                <motion.article
                  key={uni.id}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#004733]/10 border border-gray-100 transition-all duration-300"
                >
                   
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <span className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#004733] shadow-lg">
                      {uni.type}
                    </span>

                    <div className="absolute bottom-4 right-4 text-white">
                      <h3 className="font-bold text-lg leading-tight mb-1">{uni.name}</h3>
                      <p className="text-xs text-white/80 flex items-center gap-1">
                        <MdLocationOn /> {uni.city}
                      </p>
                    </div>
                  </div>
 
                  <div className="p-5 flex-1 flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-2 rounded-xl text-center">
                        <span className="block text-[#c5a365] text-lg font-bold">{uni.colleges}</span>
                        <span className="text-[10px] text-slate-500 font-medium">كلية</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl text-center">
                        <span className="block text-[#004733] text-lg font-bold">{uni.founded}</span>
                        <span className="text-[10px] text-slate-500 font-medium">التأسييس</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link to={`${ROUTES.UNIVERSITIES}/${uni.id}`}>
                        <button className="w-full group/btn flex items-center justify-center gap-2 rounded-xl bg-white border-2 border-[#004733] py-2.5 text-[#004733] font-bold text-sm hover:bg-[#004733] hover:text-white transition-all duration-300">
                          <span>عرض التفاصيل</span>
                          <MdArrowForward className="transition-transform group-hover/btn:-translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

         <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`transition-all duration-300 rounded-full ${i === page ? "w-8 h-2 bg-[#004733]" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

