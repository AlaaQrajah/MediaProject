import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import {
  MdNotificationsNone,
  MdDeleteOutline,
  MdCheckCircle,
  MdAccessTime,
  MdInfoOutline
} from "react-icons/md";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import { useNotifications } from "../../features/notifications/hooks/useNotifications";
import NotificationSkeleton from "../../shared/components/skeletons/NotificationSkeleton";
 
const TypeIcon = ({ type }) => {
  switch (type) {
    case "success": return <MdCheckCircle className="text-emerald-500" />;
    case "warning": return <MdInfoOutline className="text-amber-500" />;
    case "info": return <MdInfoOutline className="text-blue-500" />;
    default: return <MdNotificationsNone className="text-gray-400" />;
  }
};

export default function NotificationsPage() {
  const { data: notifications = [], isLoading, deleteNotification } = useNotifications();

  return (
    <PageWrapper>
      <SEO
        title="الإشعارات"
        description="تتبّع أحدث التنبيهات والإشعارات الخاصة بحسابك الجامعي."
      />

       
      <section className="mx-auto max-w-5xl px-4 py-8 md:py-12" dir="rtl">
      
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 border-r-4 border-[#c5a365] pr-4">
            الإشعارات
          </h1>
        </div>

       
        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <NotificationSkeleton key={i} />
            ))}
          </div>
        )}

    
        {!isLoading && notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <MdNotificationsNone className="text-4xl text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-600">لا توجد إشعارات جديدة</h3>
            <p className="text-gray-400 text-sm mt-1">سنقوم بإعلامك فور وجود أي تحديثات هامة.</p>
          </div>
        )}

  
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {!isLoading && notifications.map((note) => (
              <motion.div
                layout
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                whileHover={{ y: -2 }}
                className={clsx(
                  "relative group overflow-hidden rounded-xl border p-5 transition-all duration-300",
                  note.isRead
                    ? "bg-white border-gray-100 shadow-sm"
                    : "bg-white border-[#c5a365]/30 shadow-[0_4px_20px_rgba(197,163,101,0.08)]"
                )}
              >
                 {!note.isRead && (
                  <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#c5a365]" />
                )}

                <div className="flex items-start gap-4">
                   <div className={clsx(
                    "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-inner",
                    note.isRead ? "bg-gray-50 text-gray-400" : "bg-[#fff9ec] text-[#c5a365]"
                  )}>
                     {note.isRead ? <MdNotificationsNone /> : <MdNotificationsActive />}
                  </div>

                   <div className="flex-1 pt-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                      <h3 className={clsx("font-bold text-lg", note.isRead ? "text-gray-700" : "text-slate-900")}>
                        {note.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full w-fit">
                        <MdAccessTime />
                        <span dir="ltr">{note.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                      {note.message}
                    </p>
                  </div>

                   <div className="flex-shrink-0 self-center md:self-start pt-2">
                    <button
                      onClick={() => deleteNotification(note.id)}
                      className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                      title="حذف"
                    >
                      <MdDeleteOutline className="text-xl" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </section>
    </PageWrapper>
  );
}
