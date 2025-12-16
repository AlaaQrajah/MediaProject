import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdChevronLeft, MdChevronRight, MdFormatQuote } from "react-icons/md";

import background from "../../../assets/decorations/background.png";
import saplet from "../../../assets/decorations/saplet.png";

// ================== البيانات ==================
const TESTIMONIALS = [
  {
    id: 1,
    name: "محمد الحسين",
    role: "أب لطالب ثانوية",
    text: "كأب، أشكر القائمين على الموقع، ساعدني في توجيه ابني نحو التخصص المناسب لميوله، وقدّم له معلومات دقيقة وواضحة عن خياراته الجامعية.",
  },
  {
    id: 2,
    name: "رنا الحلبي",
    role: "طالبة هندسة حاسوب - جامعة حلب",
    text: "منصة UniGate عرّفتني على كل ما أحتاجه لمقارنة الكليات الهندسية. استخدمت المنصة لاتخاذ قراري بثقة، ووصلت لمعلومات موثوقة وشاملة.",
  },
  {
    id: 3,
    name: "عبدالكريم عتو",
    role: "طالب طب بشري - جامعة حلب",
    text: "الموقع ساعدني في اختيار تخصص الطب البشري بكل ثقة. المعلومات كانت هادئة ومفصّلة عن خطة الدراسة وسنوات التخصص والفرص المستقبلية.",
  },
];

export default function CommunityTestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % pageCount);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);

  const start = currentPage * itemsPerPage;
  const currentTestimonials = TESTIMONIALS.slice(start, start + itemsPerPage);

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 bg-[#f8fafc]"
      dir="rtl"
    >
      {/* الخلفية (خريطة العالم) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={background}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        {/* تدرّج خفيف من الأسفل لتعزيز القراءة */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 space-y-12">
        {/* ================== العنوان ================== */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-[28px] md:text-[36px] lg:text-[42px] font-black text-slate-900 leading-tight"
          >
            Creating A Community Of
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              Life Long Learners.
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 180, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto h-1 rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500"
          />
        </div>

        {/* ================== الكروت مع السلايدر ================== */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {currentTestimonials.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="
                    group
                    relative h-full
                    rounded-[28px]
                    border border-slate-200/70
                    bg-white/95 backdrop-blur
                    shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                    hover:shadow-[0_25px_50px_rgba(15,23,42,0.18)]
                    px-6 py-8 md:px-7 md:py-9
                    flex flex-col justify-between
                    transition-all duration-300
                  "
                >
                  {/* أيقونة الاقتباس أعلى الكرت */}
                  <div className="absolute -top-6 right-10">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-100 to-emerald-100 blur-lg opacity-70" />
                      <div className="relative w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <MdFormatQuote className="text-2xl text-emerald-600" />
                      </div>
                    </motion.div>
                  </div>

                  {/* نص الشهادة */}
                  <p className="text-sm md:text-[15px] leading-relaxed text-slate-700 mt-4 font-medium">
                    "{item.text}"
                  </p>

                  {/* الاسم والصفة */}
                  <div className="mt-6 pt-4 border-t border-slate-200/70 space-y-1">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-emerald-600">
                      {item.role}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {pageCount > 1 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white shadow-lg border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all hover:scale-110"
              >
                <MdChevronRight size={24} />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`transition-all duration-300 rounded-full ${i === currentPage
                        ? "w-8 h-2 bg-emerald-600"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white shadow-lg border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all hover:scale-110"
              >
                <MdChevronLeft size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
