import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import RecursiveTree from "../../shared/components/ui/RecursiveTree";
import { DEPARTMENTS_TREE_DATA } from "../../features/departments/data/treeData";
import { motion } from "framer-motion";

export default function DepartmentsPage() {
  return (
    <PageWrapper>
      <SEO
        title="الهيكلية الإدارية"
        description="الهيكل التنظيمي للأقسام والكليات في الجامعات السورية."
      />
      <div className="bg-[#004733] py-16 text-center text-white relative overflow-hidden" dir="rtl">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 space-y-4 px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold">الهيكل التنظيمي للأقسام</h1>
          <p className="text-emerald-100 max-w-xl mx-auto">
            تصفح الهيكلية الهرمية للجامعات وكلياتها وأقسامها باستخدام العرض الشجري التفاعلي.
          </p>
        </motion.div>
      </div>
      <section className="mx-auto max-w-6xl px-4 py-12" dir="rtl">
        <RecursiveTree data={DEPARTMENTS_TREE_DATA} />
      </section>
    </PageWrapper>
  );
}
