import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEO({ title, description }) {
    const location = useLocation();
    useEffect(() => {
        document.title = title ? `${title} | منصة الجامعات السورية` : "منصة الجامعات السورية";
        const metaDesc = document.querySelector('meta[name="description"]');
        const descContent = description || "بوابتك الشاملة للجامعات والتخصصات السورية، دليل الطالب الأول لاختيار المستقبل الأكاديمي.";

        if (metaDesc) {
            metaDesc.setAttribute("content", descContent);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = descContent;
            document.head.appendChild(meta);
        }

    }, [title, description, location]);

    return null;
}
