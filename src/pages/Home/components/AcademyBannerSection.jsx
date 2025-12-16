import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdCheckCircle, MdArrowBack } from "react-icons/md";

import damascusImg from "../../../assets/universities/damascus.png";
import dots from "../../../assets/decorations/dot.svg";
import SectionWrapper from "../../../shared/components/ui/SectionWrapper";
import SectionHeader from "../../../shared/components/ui/SectionHeader";
import Button from "../../../shared/components/ui/Button";
import { ROUTES } from "../../../shared/constants/routes";

const features = [
  {
    id: 1,
    title: "سكن مجاني",
    text: "برنامج تعليمي متكامل يشمل سكن طلابي مجاني بالكامل.",
  },
  {
    id: 2,
    title: "الرسوم الدراسية 100%",
    text: "إعفاء كامل من الرسوم الدراسية طيلة فترة البرنامج.",
  },
  {
    id: 3,
    title: "مصروف شهري",
    text: "مخصص شهري يساعد الطالب على تغطية نفقاته الأساسية.",
  },
  {
    id: 4,
    title: "دعم للكتب والمراجع",
    text: "تغطية تكلفة الكتب الجامعية والمراجع الأساسية للبرنامج.",
  },
];

// Assuming the featured grant ID is 1 (Damascus University Grant)
const FEATURED_GRANT_ID = 1;

export default function ScholarshipHighlightSection() {
  return (
    <SectionWrapper bgColor="bg-[#f7faf9]" className="py-14 md:py-20 overflow-hidden">
      <div className="">
        {/* حاوية رئيسية: صورة + محتوى */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* ====================== صورة الجامعة مع الديكور ====================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center md:justify-start"
          >
            {/* مربع بيج كبير خلف الصورة */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className="absolute -top-10 -left-10 w-[340px] h-[340px] bg-[#b89c6d] rounded-sm opacity-90"
            />

            {/* صورة النقاط dot.svg */}
            <motion.img
              src={dots}
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-16 left-32 w-[180px] opacity-60 z-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* كرت الصورة الأساسية */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 bg-white"
            >
              <img
                src={damascusImg}
                alt="جامعة دمشق"
                className="w-[360px] md:w-[420px] lg:w-[440px] h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <span className="text-white font-bold text-lg">جامعة دمشق العريقة</span>
              </div>
            </motion.div>

            {/* شريط صغير في الأسفل لمحاكاة التصميم */}
            <div className="absolute -bottom-6 left-16 right-16 h-4 rounded-full bg-[#b89c6d]/50 blur-sm" />
          </motion.div>

          {/* ====================== المحتوى النصي + الكروت ====================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-right"
          >
            <div className="space-y-4">
              {/* البادجات */}
              <div className="flex justify-end gap-2 text-[11px] md:text-sm">
                <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-emerald-800 font-bold border border-emerald-200">
                  ممولة بالكامل
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-700 font-medium border border-slate-200">
                  حكومية
                </span>
              </div>

              {/* العنوان */}
              <SectionHeader
                align="right"
                title={
                  <div className="leading-tight">
                    منحة التميز الأكاديمي{" "}
                    <span className="relative inline-block whitespace-nowrap mt-2 md:mt-0">
                      بجامعة دمشق
                      <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="#f2b95b" strokeWidth="3" fill="none" />
                      </svg>
                    </span>
                  </div>
                }
                subtitle="منحة شاملة تغطي كامل الرسوم الدراسية مع بدل سكن ومعيشة، وتهدف إلى دعم الطلاب المتفوقين أكاديميًا من ذوي الدخل المحدود."
                className="mb-0"
              />
            </div>

            {/* كروت المزايا */}
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, backgroundColor: "#dcfce7" }}
                  className="group rounded-2xl bg-[#eff6f3] p-5 text-right border border-emerald-100/50 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-800 group-hover:text-[#004733] transition-colors">
                      {item.title}
                    </h3>
                    <div className="bg-white rounded-full p-1 shadow-sm">
                      <MdCheckCircle className="text-emerald-600 text-xl" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* زر اتخاذ الإجراء */}
            <div className="flex justify-end pt-2">
              <Link to={`${ROUTES.GRANTS}/${FEATURED_GRANT_ID}`}>
                <Button className="bg-[#004733] hover:bg-[#003723] text-white px-8 py-3 rounded-xl shadow-lg shadow-emerald-900/20 flex items-center gap-2 group">
                  <span>عرض تفاصيل المنحة</span>
                  <MdArrowBack className="text-lg transition-transform group-hover:-translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
