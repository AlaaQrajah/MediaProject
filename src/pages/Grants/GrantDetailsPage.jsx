import { useParams, Link } from "react-router-dom";
import { GRANTS_DATA } from "../../features/grants/data/grants";
import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import SectionWrapper from "../../shared/components/ui/SectionWrapper";
import Button from "../../shared/components/ui/Button";
import Badge from "../../shared/components/ui/Badge";
import NotFoundPage from "../NotFoundPage";
import { ROUTES } from "../../shared/constants/routes";
import { MdDateRange, MdSchool, MdCheckCircle, MdArrowBack } from "react-icons/md";
import { motion } from "framer-motion";

export default function GrantDetailsPage() {
    const { id } = useParams();
    const grant = GRANTS_DATA.find(g => g.id === parseInt(id));

    if (!grant) {
        return <NotFoundPage />;
    }

    const handleShare = async (platform) => {
        const shareData = {
            title: grant.title,
            text: `شاهد هذه المنحة المميزة: ${grant.title}`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                alert("تم نسخ رابط المنحة إلى الحافظة!");
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    return (
        <PageWrapper>
            <SEO title={grant.title} description={grant.description} />
            <div className="relative bg-gradient-to-b from-emerald-50 to-white pt-24 pb-12 overflow-hidden">
                <SectionWrapper className="relative z-10">
                    <Link to={ROUTES.GRANTS} className="inline-flex items-center text-slate-500 hover:text-[#004733] mb-8 transition-colors">
                        <MdArrowBack className="ml-2" />
                        العودة للمنح
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-wrap gap-3 mb-4">
                            <Badge variant="success" className="text-sm px-3 py-1">نشطة</Badge>
                            <Badge variant="outline" className="border-[#004733]/30 text-[#004733] text-sm px-3 py-1">منحة مميزة</Badge>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#004733] mb-6 leading-tight max-w-4xl">
                            {grant.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-slate-700">
                            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                                <MdSchool className="text-[#c5a365] text-xl" />
                                <span className="font-medium">{grant.provider}</span>
                            </span>
                            <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                                <MdDateRange className="text-[#c5a365] text-xl" />
                                <span>ينتهي في: <span className="font-mono font-bold">{grant.deadline}</span></span>
                            </span>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </div>
            <SectionWrapper className="py-12 -mt-10 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <div className="relative mb-6 pb-4 border-b border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-800">
                                    تفاصيل المنحة
                                </h3>
                                <div className="absolute -bottom-[17px] right-0 h-1 w-16 bg-[#c5a365] rounded-full"></div>
                            </div>
                            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
                                {grant.fullDescription}
                            </div>
                        </div>

                        {grant.requirements && (
                            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <div className="relative mb-6 pb-4 border-b border-slate-100">
                                    <h3 className="text-2xl font-bold text-slate-800">
                                        الأوراق والشروط المطلوبة
                                    </h3>
                                    <div className="absolute -bottom-[17px] right-0 h-1 w-16 bg-[#c5a365] rounded-full"></div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {grant.requirements.map((req, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                                            <MdCheckCircle className="text-emerald-600 text-xl shrink-0 mt-0.5" />
                                            <span className="text-slate-700 font-medium text-sm">{req}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-1 sticky top-24"
                    >
                        <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                            <h3 className="text-lg font-bold text-slate-800 mb-2">مهتم بهذه المنحة؟</h3>
                            <p className="text-slate-500 text-sm mb-6">لا تضيع الفرصة، قدم أوراقك الآن قبل انتهاء الموعد.</p>

                            <a href={grant.applyUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full bg-[#004733] hover:bg-[#003723] text-white py-3 shadow-lg shadow-emerald-900/20 mb-4 animate-pulse">
                                    قدّم طلبك الآن
                                </Button>
                            </a>

                            <p className="text-xs text-slate-400">
                                يتم التقديم عبر الموقع الرسمي للجهة المانحة
                            </p>
                        </div>

                        <div className="mt-6 bg-[#f8fafc] rounded-2xl p-6 border border-slate-200 text-center">
                            <p className="text-slate-600 text-sm font-medium">
                                شارك هذه الفرصة مع أصدقائك
                            </p>
                    
                            <div className="flex justify-center gap-3 mt-4">
                                {['نسخ الرابط', 'فيسبوك', 'واتساب'].map(platform => (
                                    <button
                                        key={platform}
                                        onClick={() => handleShare(platform)}
                                        className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-slate-600"
                                    >
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </PageWrapper>
    );
}
