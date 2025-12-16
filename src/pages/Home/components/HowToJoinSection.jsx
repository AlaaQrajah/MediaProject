import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MdArrowBack,
  MdPersonAddAlt,
  MdChecklist,
  MdTravelExplore,
} from "react-icons/md";

// === الصور (عدّل المسارات حسب مشروعك) ===
import joinLeftImg from "../../../assets/join/howto-1.jpg"; // صورة الطالب
import joinRightImg from "../../../assets/join/howto-2.jpg"; // صورة السيدة
import avatar1 from "../../../assets/join/avatar-1.png";
import avatar2 from "../../../assets/join/avatar-2.png";
import avatar3 from "../../../assets/join/avatar-3.png";
import { ROUTES } from "../../../shared/constants/routes";

// بيانات الخطوات
const STEPS = [
  {
    id: 1,
    title: "قم بتسجيل الدخول أو إنشاء حساب",
    description: "اسم المستخدم وكلمة المرور",
    icon: MdPersonAddAlt,
    color: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-100",
  },
  {
    id: 2,
    title: "أكمل بيانات حسابك",
    description: "أكمل بياناتك الشخصية والأكاديمية",
    icon: MdChecklist,
    color: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-100",
  },
  {
    id: 3,
    title: "ابدأ رحلتك",
    description: "اكتشف الجامعات السورية المناسبة لك",
    icon: MdTravelExplore,
    color: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-100",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

export default function HowToJoinSection() {
  return (
    <section
      dir="rtl"
      className="bg-gradient-to-b from-white via-[#f5f8ff] to-white py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        {/* ================= العنوان ================= */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black text-slate-900"
          >
            كيف تنضم إلينا؟
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-3 text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed"
          >
            خطوات بسيطة لتبدأ رحلتك في اكتشاف الجامعات والاختصاصات المناسبة لك،
            وتبقى على اطلاع بكل جديد.
          </motion.p>
        </div>

        {/* ============== المحتوى: خطوات يسار / صور يمين ============== */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          {/* --------- عمود الخطوات (يسار بالصورة) --------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="relative w-full lg:w-[50%]"
          >
            <div
              className="
                relative rounded-[32px]
                bg-gradient-to-br from-white via-[#f3f7ff] to-[#e4f0ff]
                shadow-[0_28px_70px_rgba(15,23,42,0.18)]
                px-4 py-6 md:px-7 md:py-8
                overflow-hidden
              "
            >
              {/* الأرقام الكبيرة في الخلفية */}
              <span
                className="
                  pointer-events-none select-none
                  absolute -left-3 top-4
                  text-[90px] md:text-[130px]
                  font-black text-slate-200/70 leading-none
                "
              >
                01
              </span>
              <span
                className="
                  pointer-events-none select-none
                  absolute -right-1 top-1/2 -translate-y-1/2
                  text-[90px] md:text-[130px]
                  font-black text-slate-200/70 leading-none
                "
              >
                02
              </span>
              <span
                className="
                  pointer-events-none select-none
                  absolute -left-3 bottom-0
                  text-[90px] md:text-[130px]
                  font-black text-slate-200/70 leading-none
                "
              >
                03
              </span>

              {/* الكروت فوق الأرقام */}
              <div className="relative space-y-4 md:space-y-5">
                {STEPS.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.id}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                      whileHover={{ scale: 1.02, x: -5 }}
                      className="
                        group
                        bg-white/95 backdrop-blur
                        rounded-2xl
                        px-4 md:px-6 py-4 md:py-5
                        border border-slate-100
                        shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                        hover:shadow-[0_15px_40px_rgba(15,23,42,0.12)]
                        flex items-center justify-between gap-4
                        transition-all duration-300
                        cursor-default
                      "
                    >
                      {/* النص */}
                      <div className="flex-1 text-right space-y-1">
                        <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-[#004733] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">
                          {step.description}
                        </p>
                      </div>

                      {/* دائرة الأيقونة */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`
                          flex items-center justify-center
                          h-12 w-12 md:h-14 md:w-14
                          rounded-full
                          bg-gradient-to-tr ${step.color}
                          border ${step.borderColor}
                          shadow-lg
                          transition-all duration-300
                        `}
                      >
                        <Icon className={`text-xl md:text-2xl ${step.iconColor}`} />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* زر نصي صغير أسفل الكرت */}
              <div className="relative mt-5 flex justify-end">
                <Link to={ROUTES.REGISTER}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      group
                      inline-flex items-center gap-2
                      text-xs md:text-sm text-[#004733] font-bold
                      hover:text-[#003723]
                      transition-colors
                    "
                  >
                    <span>تعرّف أكثر على مزايا الحساب</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                      <MdArrowBack className="text-base" />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* --------- عمود الصور (يمين بالصورة) --------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="relative w-full lg:w-[50%]"
          >
            {/* الإطار الأبيض حول الصور */}
            <div
              className="
                relative rounded-[32px] bg-white
                shadow-[0_26px_70px_rgba(15,23,42,0.22)]
                ring-1 ring-[#dbeafe]
                overflow-hidden
                p-3 md:p-4
              "
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
                {/* الصورة اليسار (طالب جالس) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden"
                >
                  <img
                    src={joinLeftImg}
                    alt="طالب يدرس"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>

                {/* الصورة اليمين (سيدة) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden"
                >
                  <img
                    src={joinRightImg}
                    alt="طالبة على الحاسوب"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>
              </div>

              {/* الكرت العائم +10K طالب وطالبة */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="
                  absolute bottom-5 left-6 md:left-10
                  rounded-3xl bg-white
                  px-4 md:px-5 py-3
                  shadow-[0_20px_45px_rgba(15,23,42,0.30)]
                  hover:shadow-[0_25px_55px_rgba(15,23,42,0.40)]
                  flex items-center gap-3 md:gap-4
                  border border-slate-50
                  transition-all duration-300
                  cursor-default
                "
              >
                {/* صور البروفايل المتداخلة */}
                <div className="flex -space-x-2">
                  {[avatar1, avatar2, avatar3].map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt="طالب"
                      className="
                        h-9 w-9 md:h-10 md:w-10
                        rounded-full border-2 border-white
                        object-cover
                      "
                    />
                  ))}
                </div>

                <div className="flex flex-col leading-tight">
                  <span className="text-xs md:text-sm font-semibold text-gray-800">
                    +10K
                  </span>
                  <span className="text-[11px] md:text-xs text-gray-500">
                    طالب وطالبة انضموا إلينا
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
