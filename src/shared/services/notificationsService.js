import { MdNotificationsActive, MdCheckCircle, MdInfo, MdWarning } from "react-icons/md";

// Mock Data matching the screenshot tone (System notifications)
let NOTIFICATIONS = [
    {
        id: 1,
        title: "تم تغيير كلمة المرور بنجاح",
        message: "تم تحديث كلمة المرور الخاصة بحسابك مؤخراً.",
        date: "منذ 2 دقيقة",
        isRead: false,
        type: "success"
    },
    {
        id: 2,
        title: "تذكير هام: موعد التسجيل",
        message: "باقي 3 أيام على انتهاء فترة التسجيل في المفاضلة الأولى.",
        date: "منذ 1 ساعة",
        isRead: false,
        type: "warning"
    },
    {
        id: 3,
        title: "تم تسجيل الدخول",
        message: "تم تسجيل الدخول إلى حسابك من جهاز جديد (Windows).",
        date: "أمس",
        isRead: true,
        type: "info"
    },
    {
        id: 4,
        title: "إشعار عام",
        message: "يرجى مراجعة البريد الإلكتروني لتأكيد البيانات.",
        date: "منذ يومين",
        isRead: true,
        type: "default"
    },
];

const DELAY_MS = 600;

export const notificationsService = {
    getAll: async () => {
        return new Promise((resolve) => setTimeout(() => resolve([...NOTIFICATIONS]), DELAY_MS));
    },

    markAsRead: async (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                NOTIFICATIONS = NOTIFICATIONS.map(n => n.id === id ? { ...n, isRead: true } : n);
                resolve(id);
            }, DELAY_MS);
        });
    },

    delete: async (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                NOTIFICATIONS = NOTIFICATIONS.filter(n => n.id !== id);
                resolve(id);
            }, DELAY_MS);
        });
    }
};
