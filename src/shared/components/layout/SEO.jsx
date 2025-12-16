import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description }) {
    const location = useLocation();

    useEffect(() => {
        // تحديث العنوان
        document.title = title ? `${title} | منصة الجامعات السورية` : "منصة الجامعات السورية";

        // تحديث وصف الصفحة (Meta Description)
        const metaDesc = document.querySelector('meta[name="description"]');
        const descContent = description || "بوابتك الشاملة للجامعات والتخصصات السورية، دليل الطالب الأول لاختيار المستقبل الأكاديمي.";

        if (metaDesc) {
            metaDesc.setAttribute("content", descContent);
        } else {
            // إنشاء التاج إذا لم يكن موجوداً
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = descContent;
            document.head.appendChild(meta);
        }

        // Scroll to top on route change is often handled by a wrapper, 
        // but ensures title is set on mount.
    }, [title, description, location]);

    return null;
}
