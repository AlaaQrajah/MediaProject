import { motion } from "framer-motion";
import { MdLocationOn, MdEmail, MdPhone, MdArrowBack, MdSchool } from "react-icons/md";
import { FaLaptopCode, FaNetworkWired, FaBrain, FaRobot } from "react-icons/fa";
import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Button from "../../shared/components/ui/Button";

const COLLEGE_DATA = {
    name: "كلية الهندسة المعلوماتية",
    description: "تسعى كلية الهندسة المعلوماتية في جامعة حلب إلى تأهيل كوادر هندسية متميزة في مجالات المعلوماتية ونظم التشغيل والذكاء الصنعي.",
    image: "https://www.alepuniv.edu.sy/images/sliders/1.jpg",  
    dean: {
        name: "د. أحمد حاج درويش",
        role: "عميد الكلية",
        image: "https://i.pravatar.cc/150?u=dean",
        message: "نسعى دائمًا لتوفير بيئة تعليمية محفزة للطلاب تواكب التطور المتسارع في عالم التكنولوجيا..."
    },
    stats: {
        students: "1.2 الف",
        staff: "30",
        departments: "4"
    },
    departments: [
        { id: 1, name: "هندسة البرمجيات ونظم المعلومات", icon: <FaLaptopCode size={30} /> },
        { id: 2, name: "النظم والشبكات الحاسوبية", icon: <FaNetworkWired size={30} /> },
        { id: 3, name: "الذكاء الصنعي واللغات الطبيعية", icon: <FaBrain size={30} /> },
        { id: 4, name: "العلوم الأساسية", icon: <MdSchool size={30} /> },
    ],
    management: [
        { name: "د. عمر ريحاوي", role: "نائب العميد للشؤون الإدارية", image: "https://i.pravatar.cc/150?u=vice1" },
        { name: "د. لينا بياع", role: "نائب العميد للشؤون العلمية", image: "https://i.pravatar.cc/150?u=vice2" },
        { name: "د. أحمد حاج درويش", role: "عميد الكلية", image: "https://i.pravatar.cc/150?u=dean" }
    ]
};

export default function CollegePage() {
    const college = COLLEGE_DATA;

    return (
        <PageWrapper>
            <SEO title={college.name} description={college.description} />
            <div className="relative h-[300px] md:h-[400px]">
                <div className="absolute inset-0 bg-white opacity-10" style={{ backgroundImage: 'radial-gradient(#004733 1px, transparent 0)', backgroundSize: '10px 10px' }}></div>
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto w-full" dir="rtl">
                        <div className="flex-1 space-y-6 text-center md:text-right z-10">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#004733] leading-tight mb-4">
                                {college.name}
                            </h1>
                            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
                                {college.description}
                            </p>
                            <div className="bg-gray-100/50 p-6 rounded-2xl border-r-4 border-[#004733] mt-6 text-right">
                                <h3 className="font-bold text-[#004733] mb-2 text-sm">رسالة الكلية</h3>
                                <p className="text-sm text-gray-700 italic">" {college.dean.message} "</p>
                                <Button className="mt-4 bg-[#004733] text-white text-sm px-6 py-2 rounded-full hover:bg-[#003828]">
                                    عرض المزيد
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1 hidden md:block relative">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl skew-x-3 hover:skew-x-0 transition-transform duration-500 border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt={college.name}
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#4a0f18] py-8 text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8 text-center relative z-10" dir="rtl">
                    <StatBox value={college.stats.students} label="طالب وطالبة" />
                    <StatBox value={college.stats.staff} label="الهيئة التدريسية" />
                    <StatBox value={college.stats.departments} label="الأقسام" />
                </div>
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-24" dir="rtl">
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-12">إدارة الكلية</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {college.management.map((person, idx) => (
                            <div key={idx} className="bg-[#fcfbf9] p-6 rounded-xl border border-[#e5e0d4] w-64 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#fff]">
                                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-bold text-slate-800">{person.name}</h3>
                                <p className="text-[#c5a365] text-sm mt-1">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">الأقسام</h2>
                        <div className="h-1 w-20 bg-[#004733] mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {college.departments.map((dept) => (
                            <div key={dept.id} className="group bg-[#dcece9] hover:bg-[#cbe3de] p-6 rounded-xl flex items-center justify-between transition-colors border-2 border-transparent hover:border-[#004733]/10 cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center text-[#004733] shadow-sm">
                                        {dept.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-800 text-lg">{dept.name}</h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-[#004733] group-hover:text-white transition-all">
                                    <MdArrowBack className="transform rotate-180 group-hover:rotate-0 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
}

const StatBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-extrabold text-white mb-1">{value}</span>
        <span className="text-white/70 text-sm font-medium">{label}</span>
    </div>
);
