import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdAdd,
  MdClose,
  MdQuestionAnswer,
  MdLightbulb,
  MdHelpOutline,
  MdCheckCircle
} from "react-icons/md";
import SectionWrapper from "../../../shared/components/ui/SectionWrapper";
import SectionHeader from "../../../shared/components/ui/SectionHeader";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "كيف يمكنني تعيين كلمة مرور جديدة؟",
    answer:
      "يمكنك تعيين كلمة مرور جديدة من خلال الضغط على خيار نسيت كلمة المرور، ثم إدخال بريدك الإلكتروني لتصلك رسالة تحتوي على رابط إعادة التعيين.",
    icon: MdQuestionAnswer,
  },
  {
    id: 2,
    question: "هل أستطيع تعديل بياناتي الشخصية بعد التسجيل؟",
    answer:
      "نعم، يمكنك تعديل بياناتك الشخصية والأكاديمية من صفحة حسابي في أي وقت، وسيتم تحديث توصيات التخصصات والجامعات بناءً على التعديلات.",
    icon: MdCheckCircle,
  },
  {
    id: 3,
    question: "هل التخصصات والجامعات المعروضة محدثة باستمرار؟",
    answer:
      "نعمل بشكل مستمر على تحديث قاعدة البيانات الخاصة بالتخصصات والجامعات، وإضافة أي برامج جديدة أو تعديلات على الخطط الدراسية.",
    icon: MdLightbulb,
  },
  {
    id: 4,
    question: "كيف يحافظ الموقع على سرية بياناتي؟",
    answer:
      "نلتزم بمعايير عالية لحماية الخصوصية، حيث تُحفظ بياناتك في بيئة آمنة ولا تُشارك مع أي جهة خارجية، وتُستخدم فقط لتحسين تجربة التوجيه الأكاديمي.",
    icon: MdHelpOutline,
  },
  {
    id: 5,
    question: "هل استخدام المنصة مجاني بالكامل؟",
    answer:
      "نعم، تصفّح المعلومات الأساسية عن التخصصات والجامعات مجاني، وقد نضيف لاحقاً مزايا مدفوعة اختيارية لخدمات أكثر تقدّمًا.",
    icon: MdQuestionAnswer,
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState(FAQ_ITEMS[0].id);

  const activeItem = FAQ_ITEMS.find((q) => q.id === activeId);
  const ActiveIcon = activeItem.icon;

  return (
    <SectionWrapper bgColor="bg-[#f4f7fb]" className="py-16 md:py-20 relative overflow-hidden">
       <div className="absolute top-10 right-10 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 right-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="space-y-10 relative z-10">
         <SectionHeader
          title="الأسئلة الشائعة"
          subtitle="إجابات سريعة على أكثر الأسئلة تكرارًا حول استخدام المنصة وميزات الحساب."
        />

         <div className="grid gap-8 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-start">
           <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="
                  relative overflow-hidden
                  rounded-[28px]
                  bg-gradient-to-br from-[#5b0f24] to-[#7a1530]
                  text-white
                  shadow-[0_24px_60px_rgba(91,15,36,0.4)]
                  hover:shadow-[0_30px_70px_rgba(91,15,36,0.5)]
                  px-7 py-9 md:px-10 md:py-11
                  min-h-[240px]
                  flex flex-col justify-between
                  transition-all duration-300
                "
              >
                 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),transparent_60%)] opacity-80" />

                 <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute top-4 left-4"
                >
                  <ActiveIcon className="text-[120px] text-white" />
                </motion.div>

                <div className="relative space-y-4">
                  <div className="flex items-start gap-3">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <ActiveIcon className="text-xl text-white" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold leading-relaxed">
                      {activeItem.question}
                    </h3>
                  </div>
                  <p className="text-sm md:text-[15px] leading-relaxed text-rose-50/95 font-medium">
                    {activeItem.answer}
                  </p>
                </div>

                 <div className="relative mt-6 flex items-center justify-between">
                   <motion.span
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xs tracking-widest text-rose-200/80"
                  >
                    <MdClose className="inline-block text-lg align-middle" />{" "}
                  </motion.span>

                   <div className="flex items-center gap-2">
                    <span className="text-xs text-rose-100/80">
                      السؤال رقم
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#5b0f24] font-bold shadow-lg shadow-rose-900/40"
                    >
                      {String(activeItem.id).padStart(2, "0")}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

           <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isActive = item.id === activeId;
              const ItemIcon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    group
                    w-full text-right
                    rounded-2xl
                    px-5 md:px-6 py-4
                    flex items-center justify-between gap-4
                    border
                    transition-all duration-300
                    ${isActive
                      ? "bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] border-transparent"
                      : "bg-[#f8fafc] border-slate-200 hover:bg-white hover:shadow-md"
                    }
                  `}
                >
                   <motion.div
                    animate={isActive ? { rotate: 45 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      flex h-9 w-9 items-center justify-center rounded-full
                      border text-sm
                      transition-all duration-300
                      ${isActive
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                        : "bg-white border-slate-200 text-slate-500 group-hover:border-emerald-200 group-hover:text-emerald-600"
                      }
                    `}
                  >
                    {isActive ? (
                      <MdClose className="text-base" />
                    ) : (
                      <MdAdd className="text-base" />
                    )}
                  </motion.div>

                   <div className="flex-1 flex items-center gap-3">
                    <ItemIcon className={`text-xl flex-shrink-0 transition-colors ${isActive ? "text-emerald-600" : "text-slate-400 group-hover:text-emerald-500"
                      }`} />
                    <p
                      className={`
                        text-sm md:text-[15px] font-medium
                        ${isActive ? "text-slate-900" : "text-slate-700"
                        }
                      `}
                    >
                      {item.question}
                    </p>
                  </div>

                   <div
                    className={`
                      flex h-10 w-10 items-center justify-center rounded-full
                      text-xs font-semibold
                      transition-all duration-300
                      ${isActive
                        ? "bg-emerald-600 text-white shadow-[0_10px_25px_rgba(16,185,129,0.6)]"
                        : "bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-700"
                      }
                    `}
                  >
                    {String(item.id).padStart(2, "0")}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
