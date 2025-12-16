import { Link } from "react-router-dom";
import { ROUTES } from "../shared/constants/routes";
import Button from "../shared/components/ui/Button";
import PageWrapper from "../shared/components/layout/PageWrapper";
import SEO from "../shared/components/layout/SEO";

export default function NotFoundPage() {
    return (
        <PageWrapper>
            <SEO title="الصفحة غير موجودة" description="عذراً، الصفحة التي تبحث عنها غير موجودة" />
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4" dir="rtl">
                <h1 className="text-9xl font-bold text-gray-200">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-[#004733] mt-4">
                    عذراً، الصفحة غير موجودة
                </h2>
                <p className="text-gray-600 mt-4 max-w-md">
                    يبدو أنك حاولت الوصول إلى صفحة غير موجودة أو تم نقلها. يرجى التحقق من الرابط أو العودة للصفحة الرئيسية.
                </p>
                <Link to={ROUTES.HOME} className="mt-8">
                    <Button className="bg-[#004733] text-white px-8 py-3 rounded-full hover:bg-[#003723] transition-colors">
                        العودة للرئيسية
                    </Button>
                </Link>
            </div>
        </PageWrapper>
    );
}
