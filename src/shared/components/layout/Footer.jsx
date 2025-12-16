import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import uniGateLogo from "../../../assets/logos/unigate-logo.svg";
import { ROUTES } from "../../constants/routes";

export default function Footer() {
  const platformLinks = [
    { name: "الرئيسية", path: ROUTES.HOME },
    { name: "الجامعات", path: ROUTES.UNIVERSITIES },
    { name: "الاختصاصات", path: ROUTES.SPECIALTIES },
    { name: "المنح والمنصات", path: ROUTES.GRANTS },
  ];

  const accountLinks = [
    { name: "تسجيل دخول", path: ROUTES.LOGIN },
    { name: "إنشاء حساب", path: ROUTES.REGISTER },
    { name: "استعادة كلمة المرور", path: ROUTES.FORGOT_PASSWORD },
  ];

  const siteLinks = [
    { name: "من نحن", path: ROUTES.ABOUT },
    { name: "الأسئلة الشائعة", path: ROUTES.FAQ },
    { name: "المدونة", path: ROUTES.BLOG },
    { name: "تواصل معنا", path: ROUTES.CONTACT },
  ];

  const legalLinks = [
    { name: "سياسة الخصوصية", path: ROUTES.PRIVACY },
    { name: "شروط الاستخدام", path: ROUTES.TERMS },
    { name: "ملفات الارتباط", path: ROUTES.COOKIES },
  ];

  const socialLinks = [
    { Icon: FaFacebook, url: "https://facebook.com/unigate", color: "hover:bg-[#1877F2]" },
    { Icon: FaTwitter, url: "https://twitter.com/unigate", color: "hover:bg-[#1DA1F2]" },
    { Icon: FaInstagram, url: "https://instagram.com/unigate", color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:to-[#FD1D1D]" },
    { Icon: FaLinkedin, url: "https://linkedin.com/company/unigate", color: "hover:bg-[#0A66C2]" },
  ];

  return (
    <footer
      className="relative bg-gradient-to-b from-[#020814] via-[#020c0a] to-[#000000] text-slate-100 pt-16 pb-8 overflow-hidden"
      dir="rtl"
    >
      {/* ===== زخارف خلفية محسنة ===== */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-emerald-900/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-amber-900/15 blur-3xl animate-blob animation-delay-2000" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-900/15 blur-3xl animate-blob animation-delay-4000" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* =================== القسم الأوسط: تعريف UniGate =================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-12"
        >
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            {/* الشعار */}
            <Link to={ROUTES.HOME} className="flex items-center gap-4 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl"
              >
                <img
                  src={uniGateLogo}
                  alt="UniGate Logo"
                  className="h-25 w-25"
                />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">UniGate</h2>
                <p className="text-sm text-slate-300">بوابة الجامعات السورية</p>
              </div>
            </Link>

            {/* النص التعريفي */}
            <div className="flex-1 text-center lg:text-right">
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 lg:mx-0">
                تعمل منصة{" "}
                <span className="font-semibold text-emerald-300">UniGate</span>{" "}
                على ربط طلاب الجامعات في سوريا بالبرامج والجامعات المناسبة لهم،
                لمساعدتهم في اتخاذ القرار التعليمي الصحيح بناءً على بيانات
                موثوقة ومحدّثة بشكل مستمر.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =================== القسم العلوي (الأعمدة) =================== */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ===== العمود الأول: معلومات الاتصال ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-amber-400 shadow-lg shadow-emerald-500/30">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold">تواصل معنا</h3>
                <a href="mailto:unigate25@gmail.com" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                  unigate25@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <a href="tel:+963936968883" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <FaPhone className="text-emerald-400" />
                <span>+963 936 968 883</span>
              </a>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-amber-400" />
                <span>حلب - كلية الهندسة المعلوماتية</span>
              </div>
            </div>
          </motion.div>

          {/* ===== العمود الثاني: منصّتنا ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <h3 className="bg-gradient-to-l from-emerald-400 to-lime-300 bg-clip-text text-xl font-bold text-transparent">
              منصّتنا
            </h3>
            <ul className="space-y-3 text-sm">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-slate-300 transition-all hover:text-emerald-400 hover:translate-x-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== العمود الثالث: الخدمات (الحساب) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="bg-gradient-to-l from-emerald-300 to-amber-300 bg-clip-text text-xl font-bold text-transparent">
              الحساب والخدمات
            </h3>
            <ul className="space-y-3 text-sm">
              {accountLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -5 }}
                >
                  <Link
                    to={link.path}
                    className="flex cursor-pointer items-center gap-2 text-slate-300 transition-colors hover:text-emerald-400"
                  >
                    <span className="text-xs">●</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ===== العمود الرابع: الروابط السريعة ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="bg-gradient-to-l from-amber-400 to-yellow-300 bg-clip-text text-xl font-bold text-transparent">
              الروابط
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-200">الموقع</h4>
                <ul className="space-y-1 text-slate-400">
                  {siteLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="cursor-pointer transition-colors hover:text-emerald-400"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-200">القانوني</h4>
                <ul className="space-y-1 text-slate-400">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="cursor-pointer transition-colors hover:text-emerald-400"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================== القسم السفلي: السوشال + الحقوق =================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 pt-6"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, url, color }, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-emerald-300/40 bg-white/5
                    shadow-[0_8px_18px_rgba(4,120,87,0.6)]
                    transition-all duration-300
                    ${color}
                  `}
                >
                  <Icon className="text-[18px]" />
                </motion.a>
              ))}
            </div>

            {/* حقوق النشر */}
            <div className="text-center text-sm text-slate-400 md:text-right">
              <p>
                © {new Date().getFullYear()} UniGate. جميع الحقوق محفوظة.
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                تصميم وتطوير بواسطة فريق UniGate.
              </p>
            </div>

            {/* روابط إضافية مختصرة */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link to={ROUTES.PRIVACY} className="transition-colors hover:text-emerald-400">
                سياسة الخصوصية
              </Link>
              <Link to={ROUTES.TERMS} className="transition-colors hover:text-emerald-400">
                شروط الاستخدام
              </Link>
              <Link to={ROUTES.CONTACT} className="transition-colors hover:text-emerald-400">
                اتصل بنا
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
