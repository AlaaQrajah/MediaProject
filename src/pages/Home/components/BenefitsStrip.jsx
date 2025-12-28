import { motion } from "framer-motion";

import featureTrusted from "../../../assets/home/features/feature-trusted.svg";
import featureUpdated from "../../../assets/home/features/feature-updated.svg";
import featureGuidance from "../../../assets/home/features/feature-guidance.svg";

const FEATURES = [
  {
    id: 1,
    title: "معلومات دقيقة وموثوقة",
    description:
      "بياناتك قادمة من مصادر رسمية تضمن لك الحصول على معلومات صحيحة.",
    icon: featureTrusted,
  },
  {
    id: 2,
    title: "تحديث مستمر للبيانات",
    description:
      "نحرص على تحديث محتوى المنصة باستمرار لضمان حداثة المعلومات.",
    icon: featureUpdated,
  },
  {
    id: 3,
    title: "توجيه أكاديمي محترف",
    description:
      "نساعدك في اختيار المسار التعليمي المناسب لمستقبلك الدراسي.",
    icon: featureGuidance,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function BenefitsStrip() {
  return (
    <section className="bg-transparent" dir="ltr">
      <div className="mx-auto max-w-6xl px-4 -mt-6 md:-mt-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            rounded-3xl bg-[#711127]
            px-5 py-6 md:px-10 md:py-8
            shadow-xl text-white
          "
        >
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="flex items-start gap-4"
              >
                <div
                  className="
                    flex h-14 w-14 shrink-0 items-center justify-center
                    rounded-2xl bg-white/10 backdrop-blur
                  "
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-base md:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-100/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
