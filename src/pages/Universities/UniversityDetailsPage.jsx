import { useParams } from "react-router-dom";
import { UNIVERSITIES_DATA } from "../../features/universities/data/universities";
import NotFoundPage from "../NotFoundPage";
import { motion } from "framer-motion";
import {
    MdLocationOn,
    MdEmail,
    MdPhone,
    MdPeople,
    MdSchool,
    MdStar
} from "react-icons/md";
import { FaGraduationCap, FaChalkboardTeacher, FaBuilding } from "react-icons/fa";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Button from "../../shared/components/ui/Button";



// ... (imports remain)

// Base Mock for extended details that might not be in the list
const MOCK_EXTENDED_DETAILS = {
    cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80", // Generic University Cover
    website: "https://www.example.edu.sy",
    description: "تعد هذه الجامعة من المؤسسات التعليمية الرائدة في سوريا، وتتميز بكوادرها الأكاديمية وبرامجها المتنوعة...",
    stats: {
        students: "+10,000",
        staff: "+500",
        faculties: "+10",
        ranking: "---"
    },
    staff: [
        { name: "أ.د. رئيس الجامعة", role: "رئيس الجامعة", image: "https://i.pravatar.cc/150?u=1" },
        { name: "د. نائب أكاديمي", role: "نائب الرئيس للشؤون العلمية", image: "https://i.pravatar.cc/150?u=2" },
        { name: "د. نائب إداري", role: "نائب الرئيس للشؤون الإدارية", image: "https://i.pravatar.cc/150?u=3" },
    ],
    branches: [
        { name: "الهندسة المعلوماتية", icon: <FaBuilding /> },
        { name: "الهندسة المعمارية", icon: <FaBuilding /> },
        { name: "الطب البشري", icon: <FaBuilding /> },
        { name: "الاقتصاد", icon: <FaBuilding /> },
        { name: "الحقوق", icon: <FaBuilding /> }
    ]
};

export default function UniversityDetailsPage() {
    const { id } = useParams();

    // Find the basic data from our list
    const basicInfo = UNIVERSITIES_DATA.find(u => u.id === parseInt(id));

    if (!basicInfo) {
        return <NotFoundPage />;
    }

    // Merge basic info with extended mock data
    // In a real app, you would fetch all this from an API
    const uni = {
        ...MOCK_EXTENDED_DETAILS,
        ...basicInfo, // Overwrite with actual name, city, etc.
        logo: basicInfo.image || basicInfo.logo, // handle naming diff
        stats: {
            ...MOCK_EXTENDED_DETAILS.stats,
            students: basicInfo.students,
            faculties: basicInfo.colleges
        }
    };

    const handleReadMore = () => {
        document.getElementById('details-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <PageWrapper>
            <SEO title={uni.name} description={uni.description} />

            {/* Hero Section */}
            <div className="relative h-[400px]">
                <img src={uni.cover} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a0f18] via-transparent to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white flex flex-col items-center md:items-end max-w-6xl mx-auto" dir="rtl">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-center md:text-right space-y-2">
                            <h1 className="text-4xl md:text-5xl font-bold">{uni.name}</h1>
                            <p className="max-w-2xl text-gray-200 leading-relaxed text-sm md:text-base opacity-90">
                                {uni.description}
                            </p>
                            <div className="flex gap-3 mt-4 justify-center md:justify-start">
                                <a href={uni.website} target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-[#004733] border-none px-6 py-2 rounded-full hover:bg-[#003828] transition-colors">
                                        الموقع الرسمي
                                    </Button>
                                </a>
                                <Button
                                    onClick={handleReadMore}
                                    variant="outline"
                                    className="text-white border-white hover:bg-white/10 px-6 py-2 rounded-full"
                                >
                                    اقرأ المزيد
                                </Button>
                            </div>
                        </div>
                        {/* Logo float */}
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full p-2 shadow-2xl shrink-0 flex items-center justify-center overflow-hidden">
                            <img
                                src={uni.logo}
                                className="w-full h-full object-contain"
                                alt="logo"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/150x150/png?text=Logo";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar (Dark Red) */}
            <div className="bg-[#4a0f18] text-white py-8">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" dir="rtl">
                    <StatItem icon={<FaGraduationCap size={28} className="text-[#c5a365]" />} value={uni.stats.students} label="طالب وطالبة" />
                    <StatItem icon={<MdStar size={28} className="text-[#c5a365]" />} value={uni.stats.ranking} label="التصنيف العالمي" />
                    <StatItem icon={<FaChalkboardTeacher size={28} className="text-[#c5a365]" />} value={uni.stats.staff} label="عضو هيئة تدريسية" />
                    <StatItem icon={<MdSchool size={28} className="text-[#c5a365]" />} value={uni.stats.faculties} label="القسم" />
                </div>
            </div>

            <div id="details-section" className="max-w-7xl mx-auto px-4 py-16 space-y-20" dir="rtl">

                {/* Administration Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-12 relative inline-block">
                        إدارة الجامعة
                        <span className="absolute -bottom-3 left-0 right-0 h-1 bg-[#c5a365] rounded-full w-1/2 mx-auto"></span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 justify-center">
                        {uni.staff.map((member, idx) => (
                            <div key={idx} className="bg-[#fdfbf7] p-6 rounded-2xl border border-[#c5a365]/20 hover:shadow-lg transition-all text-center">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#c5a365]">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                                <p className="text-[#c5a365] text-sm font-semibold mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Faculties Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-12 relative inline-block">
                        الكليات الهندسية
                        <span className="absolute -bottom-3 left-0 right-0 h-1 bg-[#c5a365] rounded-full w-1/2 mx-auto"></span>
                    </h2>
                    {/* Just a demo grid for faculties */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {uni.branches.map((branch, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-emerald-50 hover:border-emerald-100 transition-colors cursor-pointer group">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#004733] shadow-sm group-hover:scale-110 transition-transform">
                                    {branch.icon}
                                </div>
                                <span className="font-bold text-slate-700">{branch.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

        </PageWrapper>
    );
}

const StatItem = ({ icon, value, label }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="bg-white/10 p-3 rounded-full mb-1">{icon}</div>
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-white/60 text-sm">{label}</span>
    </div>
);
