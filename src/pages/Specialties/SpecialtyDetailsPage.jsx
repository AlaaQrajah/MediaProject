import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    MdSchool,
    MdOutlineDescription,
    MdOutlineSubject,
    MdAccessTime,
    MdArrowBack,
    MdCheckCircle
} from "react-icons/md";
import { FaChalkboardTeacher, FaUniversity, FaGraduationCap } from "react-icons/fa";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Button from "../../shared/components/ui/Button";
import { ROUTES } from "../../shared/constants/routes";

 const SPECIALTY_DETAILS = {
    1: {
        id: 1,
        title: "هندسة البرمجيات",
        level: "ماجستير",
        university: "جامعة حلب",
        college: "كلية الهندسة المعلوماتية",
        description: "برنامج ماجستير هندسة البرمجيات يركز على المنهجيات المتقدمة في تطوير الأنظمة البرمجية الضخمة، وهندسة المتطلبات، وضمان الجودة، وإدارة المشاريع البرمجية. يهدف البرنامج لإعداد قادة في مجال صناعة البرمجيات.",
        duration: "2 سنوات",
        credits: "48 ساعة معتمدة",
        language: "العربية / الإنجليزية",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80",
        outcomes: [
            "تصميم وبناء أنظمة برمجية معقدة وقابلة للتوسع.",
            "تطبيق منهجيات Agile و DevOps في إدارة المشاريع.",
            "إتقان أحدث تقنيات الفحص والاختبار وضمان الجودة.",
            "القدرة على إجراء بحث علمي أكاديمي في مجال هندسة البرمجيات."
        ],
        curriculum: [
            { year: "السنة الأولى", subjects: ["هندسة المتطلبات المتقدمة", "معماريات البرمجيات", "تصميم واجهات الاستخدام", "إدارة جودة البرمجيات"] },
            { year: "السنة الثانية", subjects: ["أمن البرمجيات", "الحوسبة السحابية", "مشروع البحث (الرسالة)"] }
        ],
        professors: [
            { name: "أ.د. محمد سعيد", role: "أستاذ هندسة البرمجيات", image: "https://i.pravatar.cc/150?u=prof1" },
            { name: "د. ريم العلي", role: "مشرف مشاريع", image: "https://i.pravatar.cc/150?u=prof2" }
        ]
    },
     default: {
        id: 99,
        title: "اختصاص عام",
        level: "ماجستير",
        university: "جامعة دمشق",
        college: "كلية العلوم",
        description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        duration: "2 سنوات",
        credits: "36 ساعة معتمدة",
        language: "العربية",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        outcomes: [
            "اكتساب مهارات بحثية متقدمة.",
            "التعمق في النظريات العلمية الحديثة.",
            "تطوير القدرات التحليلية والنقدية."
        ],
        curriculum: [
            { year: "السنة الأولى", subjects: ["مقرر تخصصي 1", "مقرر تخصصي 2", "منهجية البحث العلمي"] },
            { year: "السنة الثانية", subjects: ["رسالة الماجستير"] }
        ],
        professors: [
            { name: "د. سامر الحلبي", role: "رئيس القسم", image: "https://i.pravatar.cc/150?u=prof3" }
        ]
    }
};

export default function SpecialtyDetailsPage() {
    const { id } = useParams();
    const specialty = SPECIALTY_DETAILS[id] || SPECIALTY_DETAILS.default;

    return (
        <PageWrapper>
            <SEO title={specialty.title} description={specialty.description} />

             <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
                <img src={specialty.image} alt={specialty.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a0f18] via-[#4a0f18]/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white" dir="rtl">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block bg-[#c5a365] text-black font-bold px-4 py-1 rounded-full mb-4 text-sm">
                                {specialty.level}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
                                {specialty.title}
                            </h1>

                            <div className="flex flex-wrap gap-6 text-white/90 text-lg">
                                <div className="flex items-center gap-2">
                                    <FaUniversity className="text-[#c5a365]" />
                                    <span>{specialty.university}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdSchool className="text-[#c5a365]" />
                                    <span>{specialty.college}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12" dir="rtl">
                 <div className="lg:col-span-2 space-y-12">

                     <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#004733] mb-6 flex items-center gap-2">
                            <MdOutlineDescription size={28} />
                            عن الاختصاص
                        </h2>
                        <p className="text-gray-600 leading-loose text-lg text-justify">
                            {specialty.description}
                        </p>
                    </section>

                     <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <FaGraduationCap className="text-[#c5a365]" size={24} />
                            مخرجات التعلم
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {specialty.outcomes.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                    <MdCheckCircle className="text-emerald-600 mt-1 shrink-0" size={20} />
                                    <p className="text-slate-700 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                     <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <MdOutlineSubject className="text-[#c5a365]" size={28} />
                            المقررات الدراسية
                        </h2>
                        <div className="space-y-6">
                            {specialty.curriculum.map((year, idx) => (
                                <div key={idx} className="bg-white border rounded-xl overflow-hidden">
                                    <div className="bg-gray-50 p-4 font-bold text-lg border-b flex justify-between">
                                        <span>{year.year}</span>
                                        <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded border">مستوى متقدم</span>
                                    </div>
                                    <div className="p-4 flex flex-wrap gap-2">
                                        {year.subjects.map((subj, sIdx) => (
                                            <span key={sIdx} className="bg-[#4a0f18]/5 text-[#4a0f18] px-3 py-1.5 rounded-lg text-sm font-medium">
                                                {subj}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                 <div className="space-y-8">

                     <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#c5a365]">
                        <h3 className="font-bold text-lg mb-6 border-b pb-2">معلومات سريعة</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span className="text-gray-500 flex items-center gap-2"><MdAccessTime /> المدة</span>
                                <span className="font-bold text-[#004733]">{specialty.duration}</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-gray-500 flex items-center gap-2"><MdSchool /> الساعات</span>
                                <span className="font-bold text-[#004733]">{specialty.credits}</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-gray-500 flex items-center gap-2"><FaChalkboardTeacher /> اللغة</span>
                                <span className="font-bold text-[#004733]">{specialty.language}</span>
                            </li>
                        </ul>
                        <Link to={ROUTES.REGISTER}>
                            <Button className="w-full mt-8 bg-[#004733] text-white py-3 rounded-xl hover:bg-[#003828] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                تقدم الآن للبرنامج
                            </Button>
                        </Link>
                    </div>

                     <div>
                        <h3 className="font-bold text-lg mb-4 text-slate-800">الهيئة التدريسية المشرفة</h3>
                        <div className="space-y-4">
                            {specialty.professors.map((prof, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-all">
                                    <img src={prof.image} alt={prof.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-bold text-sm">{prof.name}</h4>
                                        <p className="text-xs text-[#c5a365] mt-1">{prof.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </PageWrapper>
    );
}
