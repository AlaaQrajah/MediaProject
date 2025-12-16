import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { motion } from "framer-motion";
import heroMain from "../../../assets/home/hero-students.png";
import { ROUTES } from "../../../shared/constants/routes";
import { useAuth } from "../../../contexts/AuthContext";

// أنيميشن للصورة
const imageVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

// أنيميشن للنص
const textVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

// أنيميشن خفيف لزر البحث
const searchVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`${ROUTES.UNIVERSITIES}?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section
      className="bg-transparent border-b border-[#f4d9a3]"
      dir="rtl"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* ---------- الصورة (مع أنيميشن) ---------- */}
          <motion.div
            className="order-2 md:order-1 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={heroMain}
              alt="طلاب الجامعات"
              className="w-full max-w-sm md:max-w-md h-auto drop-shadow-lg"
            />
          </motion.div>

          {/* ---------- النصوص (مع أنيميشن) ---------- */}
          <motion.div
            className="order-1 md:order-2 space-y-5 md:space-y-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            {/* الشارة */}
            <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-900">
              <span className="ml-1 text-gray-600">البوابة الجامعية الشاملة -</span>
              <span className="font-semibold">UniGate</span>
            </div>

            {/* العنوان - مخصص للمستخدمين المسجلين */}
            {isAuthenticated ? (
              <>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-relaxed tracking-tight text-slate-900">
                  مرحباً بعودتك،
                  <span className="block bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                    {user?.firstName} {user?.lastName}! 👋
                  </span>
                </h1>
                <p className="text-sm md:text-base text-gray-700 max-w-md leading-relaxed">
                  نحن سعداء برؤيتك مجدداً! استكشف الجامعات والاختصاصات والمنح المتاحة لك.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-relaxed tracking-tight text-slate-900">
                  بوابتك الشاملة للتعليم
                  <span className="block">العالي في سوريا</span>
                </h1>
                <p className="text-sm md:text-base text-gray-700 max-w-md leading-relaxed">
                  دليلك الموثوق لاكتشاف الجامعات السورية، برامجها الأكاديمية،
                  وكل ما تحتاجه لرحلتك التعليمية.
                </p>
              </>
            )}

            {/* ---------- البحث ---------- */}
            <motion.div
              className="flex items-center gap-3 mt-4"
              variants={searchVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              {/* زر البحث */}
              <motion.button
                aria-label="ابحث عن جامعة"
                onClick={handleSearch}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="
                  flex items-center justify-center
                  h-11 w-11 rounded-full
                  bg-[#004733] text-white shadow-lg
                  hover:bg-[#003723] transition-colors
                "
              >
                <MdSearch className="text-xl" />
              </motion.button>

              {/* حقل الإدخال */}
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="الجامعة التي تبحث عنها ؟"
                className="
                  flex-1 rounded-full bg-white shadow-md
                  px-5 py-2.5 text-sm text-gray-700
                  border border-gray-200 outline-none
                  placeholder:text-gray-400
                  focus:ring-2 focus:ring-[#004733]/40
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
