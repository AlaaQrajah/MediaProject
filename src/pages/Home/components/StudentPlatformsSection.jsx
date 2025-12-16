import { motion } from "framer-motion";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

// ديكورات
import decoGlobe from "../../../assets/decorations/platforms-globe.svg";
import decoStar from "../../../assets/decorations/deco-star.svg";

// شعارات المنصات
import uniStudentLogo from "../../../assets/platforms/uni-student.svg";
import googleStudentLogo from "../../../assets/platforms/google-student.svg";

// ================== بيانات المنصات ==================
const PLATFORMS = [
  {
    id: 1,
    name: "منصة Google الطلابية",
    description:
      "منصة تخدم طلبة الجامعات في سوريا من خلال نقل أخبارهم، وتسليط الضوء على فعالياتهم، ودعمهم وتمكينهم بما يعزز الوعي ويسهم في بناء التعليم.",
    logo: googleStudentLogo,
    cta: "فيسبوك",
    link: "https://www.facebook.com/GoogleDSC", // Example link
    bgColor: "bg-[#6B1F2A]", // Deep red/burgundy
  },
  {
    id: 2,
    name: "منصة طالب جامعي",
    description:
      "وُجدت لخدمة طلاب الجامعات في سوريا من خلال نقل أخبارهم، وتسليط الضوء على فعالياتهم، ودعمهم وتمكينهم بما يعزز الوعي ويسهم في بناء التعليم.",
    logo: uniStudentLogo,
    cta: "فيسبوك",
    link: "https://www.facebook.com/UniversityStudentPlatform", // Example link
    bgColor: "bg-[#6B1F2A]",
  },
];

// أنيميشن للكروت
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function StudentPlatformsSection() {
  return (
    <section
      dir="rtl"
      className="relative bg-transparent py-16 md:py-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-4">
        {/* ================== الخطوط المتصلة في الخلفية ================== */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 -z-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10%" cy="10%" r="2" fill="#004733" />
            <circle cx="90%" cy="20%" r="2" fill="#004733" />
            <circle cx="50%" cy="50%" r="2" fill="#004733" />
            <line x1="10%" y1="10%" x2="50%" y2="50%" stroke="#004733" strokeWidth="0.5" />
            <line x1="90%" y1="20%" x2="50%" y2="50%" stroke="#004733" strokeWidth="0.5" />
          </svg>
        </div>

        {/* ================== الزخارف ================== */}
        {/* <motion.img
          src={decoGlobe}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-6 left-4 w-32 md:w-40 opacity-40 z-0"
          animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        /> */}

        {/* ================== العنوان ================== */}
        <div className="text-center mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#111827]"
          >
            المنصات الطلابية
          </motion.h2>
        </div>

        {/* ================== الكروت ================== */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {PLATFORMS.map((platform, index) => (
            <motion.article
              key={platform.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`relative rounded-[2rem] shadow-xl overflow-hidden ${platform.bgColor} text-white`}
            >
              <div className="px-8 py-10 md:px-12 md:py-14 flex flex-col justify-between h-full min-h-[350px]">

                {/* العنوان والوصف */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {platform.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-7 md:leading-8 font-light opacity-90">
                    {platform.description}
                  </p>
                </div>

                {/* الأسفل: زر + لوجو */}
                <div className="mt-10 flex items-center justify-between gap-4">
                  {/* زر فيسبوك */}
                  <a href={platform.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        group
                        flex items-center gap-3
                        bg-[#004733] hover:bg-[#003723]
                        text-white
                        pr-2 pl-6 py-2
                        rounded-full
                        transition-colors duration-300
                        shadow-lg shadow-black/20
                        "
                    >
                      <span className="bg-[#003723] rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#00281a] transition-colors">
                        <MdArrowBack className="text-lg" />
                      </span>
                      <span className="font-bold text-sm">فيسبوك</span>
                    </motion.button>
                  </a>
                  {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-6">
                      {platform.cta}
                  </Button> */}

                  {/* اللوجو */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-0 invert opacity-90"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
