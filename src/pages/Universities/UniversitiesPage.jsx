import SEO from "../../shared/components/layout/SEO";
import UniversitiesContainer from "./components/UniversitiesContainer";

export default function UniversitiesPage() {
  return (
    <>
      <SEO
        title="الجامعات السورية"
        description="تصفح قائمة شاملة بالجامعات الحكومية والخاصة في سوريا، مع تفاصيل عن الكليات والاختصاصات المتاحة."
      />
      <UniversitiesContainer />
    </>
  );
}
