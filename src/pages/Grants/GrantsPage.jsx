import { Link } from "react-router-dom";
import SEO from "../../shared/components/layout/SEO";
import SectionWrapper from "../../shared/components/ui/SectionWrapper";
import SectionHeader from "../../shared/components/ui/SectionHeader";
import Card from "../../shared/components/ui/Card";
import Button from "../../shared/components/ui/Button";
import { GRANTS_DATA } from "../../features/grants/data/grants";
import { ROUTES } from "../../shared/constants/routes";

export default function GrantsPage() {
    return (
        <>
            <SEO title="المنح الدراسية" description="تصفح أحدث المنح الدراسية المتاحة للطلاب في سوريا." />
            <SectionWrapper>
                <SectionHeader
                    title="المنح الدراسية"
                    subtitle="فرص تعليمية مميزة لمساعدتك في مسيرتك الدراسية"
                    center
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {GRANTS_DATA.map(grant => (
                        <Card key={grant.id} className="p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{grant.title}</h3>
                                    <p className="text-sm text-[#004733] font-medium mt-1">{grant.provider}</p>
                                </div>
                                <span className="bg-emerald-50 text-[#004733] text-xs px-2 py-1 rounded-full">نشطة</span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{grant.description}</p>
                            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-xs text-gray-500">ينتهي في: {grant.deadline}</span>
                                <Link to={ROUTES.GRANTS + "/" + grant.id}>
                                    <Button size="sm" variant="outline" className="text-xs">التفاصيل</Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
