import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MdPrecisionManufacturing,
  MdArchitecture,
  MdOutlineEngineering,
  MdComputer,
  MdMedicalServices,
  MdLandscape,
  MdElectricalServices,
  MdArrowBack
} from "react-icons/md";
import { GiGears, GiElectric, GiRadioTower } from "react-icons/gi";
import SectionWrapper from "../../../shared/components/ui/SectionWrapper";
import SectionHeader from "../../../shared/components/ui/SectionHeader";
import { ROUTES } from "../../../shared/constants/routes";

const faculties = [
  {
    id: 1,
    label: "الهندسة الميكانيكية",
    icon: MdPrecisionManufacturing,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    id: 2,
    label: "الهندسة المعمارية",
    icon: MdArchitecture,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100"
  },
  {
    id: 3,
    label: "الهندسة المدنية",
    icon: MdOutlineEngineering,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100"
  },
  {
    id: 4,
    label: "هندسة الميكاترونيك",
    icon: GiGears,
    color: "text-slate-600",
    bg: "bg-slate-50",
    border: "border-slate-100"
  },
  {
    id: 5,
    label: "هندسة الاتصالات",
    icon: GiRadioTower,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100"
  },
  {
    id: 6,
    label: "الهندسة المعلوماتية",
    icon: MdComputer,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100"
  },
  {
    id: 7,
    label: "هندسة الطاقة",
    icon: GiElectric,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-100"
  },
  {
    id: 8,
    label: "الهندسة البيئية",
    icon: MdLandscape,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100"
  },
  {
    id: 9,
    label: "الهندسة الطبية",
    icon: MdMedicalServices,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-100"
  },
];

// Variants للأنيميشن
const containerVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function EngineeringFacultiesSection() {
  return (
    <SectionWrapper
      bgColor="bg-white"
      className="pt-12 pb-14 md:pb-16 border-b border-[#0f6fd1]/10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <div className="space-y-10">
        {/* العنوان */}
        <SectionHeader
          title="الكليّات الهندسية"
          subtitle="تعرّف على أهم الكليّات الهندسية المتوفّرة في الجامعات السورية."
          className="mb-8"
          center
        />

        {/* الشبكة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="
            grid gap-4 md:gap-5
            md:grid-cols-3
            max-w-5xl mx-auto
          "
        >
          {faculties.map((fac) => {
            const Icon = fac.icon;
            return (
              <motion.div key={fac.id} variants={itemVariants}>
                <Link to={`${ROUTES.SPECIALTIES}?faculty=${fac.label}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                        group
                        relative
                        flex items-center justify-between
                        rounded-2xl
                        ${fac.bg}
                        px-5 py-4
                        text-right
                        border ${fac.border}
                        shadow-sm
                        hover:shadow-md
                        transition-all
                        duration-300
                        cursor-pointer
                        overflow-hidden
                        `}
                  >
                    {/* Background decoration */}
                    <div className="absolute -left-4 -bottom-4 opacity-10 rotate-12 transform group-hover:scale-110 transition-transform duration-500">
                      <Icon className={`text-6xl ${fac.color}`} />
                    </div>

                    <div className="flex items-center gap-4 z-10">
                      <span
                        className={`
                                    inline-flex items-center justify-center
                                    h-12 w-12
                                    rounded-xl
                                    bg-white
                                    shadow-sm
                                    group-hover:shadow
                                    transition-shadow
                                `}
                      >
                        <Icon className={`text-2xl ${fac.color}`} />
                      </span>
                      <span className="text-sm md:text-base font-bold text-slate-800 group-hover:text-slate-900">
                        {fac.label}
                      </span>
                    </div>

                    <div className="z-10 bg-white/50 p-1.5 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <MdArrowBack className={`text-lg ${fac.color}`} />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
