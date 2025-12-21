import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
    MdEmail,
    MdArrowBack,
    MdLockReset,
    MdSecurity,
    MdMarkEmailRead,
} from "react-icons/md";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Button from "../../shared/components/ui/Button";
import { ROUTES } from "../../shared/constants/routes";


import forgotPasswordIllustration from "../../assets/auth/login-illustration.png";

const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, { message: "البريد الإلكتروني مطلوب" })
        .email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
});

export default function ForgotPasswordPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

     
    const onSubmit = async (data) => {
        setIsLoading(true);
        
        setTimeout(() => {
            console.log("Password Reset Email Sent to:", data.email);
            setIsLoading(false);
            setEmailSent(true);
            toast.success("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني");
        }, 1500);
    };

    return (
        <PageWrapper>
            <SEO
                title="نسيت كلمة المرور"
                description="استعد كلمة المرور الخاصة بك في بوابة الجامعات"
            />

            <div className="relative bg-gradient-to-r from-[#4a0f18] via-[#6B1F2A] to-[#4a0f18] py-8 md:py-12 text-center text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

                <div className="relative z-10 flex items-center justify-center gap-3">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                        <MdLockReset className="text-4xl md:text-5xl" />
                    </motion.div>
                    <h1 className="text-3xl md:text-4xl font-bold">نسيت كلمة المرور</h1>
                </div>
            </div>

            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden" dir="rtl">
                <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex justify-center relative"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img
                                src={forgotPasswordIllustration}
                                alt="Forgot Password Illustration"
                                className="max-w-md w-full object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-10 right-10 text-emerald-500/20"
                        >
                            <MdSecurity className="text-6xl" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full max-w-md mx-auto"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100">
                            {!emailSent ? (
                                <>
                                    <div className="text-right space-y-3 mb-8">
                                        <div className="flex items-center justify-end gap-3">
                                            <div>
                                                <h2 className="text-3xl font-bold text-slate-900">
                                                    استعادة كلمة المرور
                                                </h2>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    أدخل بريدك الإلكتروني لإرسال رابط إعادة التعيين
                                                </p>
                                            </div>
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg"
                                            >
                                                <MdLockReset className="text-2xl text-white" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 block flex items-center gap-2">
                                                <MdEmail className="text-emerald-600" />
                                                البريد الإلكتروني:
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    {...register("email")}
                                                    className={`
                            w-full rounded-xl border bg-white px-4 py-3.5 text-sm outline-none transition-all
                            ${errors.email
                                                            ? "border-red-500 focus:border-red-500"
                                                            : "border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                                                        }
                        `}
                                                    placeholder="example@domain.com"
                                                />
                                                {errors.email && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-xs text-red-500 mt-1 flex items-center gap-1"
                                                    >
                                                        {errors.email.message}
                                                    </motion.p>
                                                )}
                                            </div>
                                        </div>

                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3.5 rounded-xl text-base font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all"
                                            >
                                                {isLoading ? (
                                                    <span className="flex items-center justify-center gap-2">
                                                        جاري الإرسال...
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ repeat: Infinity, duration: 1 }}
                                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                        />
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center justify-center gap-2">
                                                        <MdEmail className="text-xl" />
                                                        إرسال رابط الاستعادة
                                                    </span>
                                                )}
                                            </Button>
                                        </motion.div>

                                        <div className="text-center text-sm text-gray-600">
                                            <Link
                                                to={ROUTES.LOGIN}
                                                className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline transition flex items-center justify-center gap-2"
                                            >
                                                <MdArrowBack className="text-lg" />
                                                العودة إلى تسجيل الدخول
                                            </Link>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center space-y-6"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                        className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg"
                                    >
                                        <MdMarkEmailRead className="text-4xl text-white" />
                                    </motion.div>

                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold text-slate-900">
                                            تم إرسال البريد الإلكتروني!
                                        </h2>
                                        <p className="text-gray-600 text-sm">
                                            تم إرسال رابط إعادة تعيين كلمة المرور إلى:
                                        </p>
                                        <p className="text-emerald-600 font-semibold">
                                            {getValues("email")}
                                        </p>
                                    </div>

                                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-right">
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            يرجى التحقق من صندوق الوارد الخاص بك (وصندوق الرسائل غير المرغوب فيها) واتباع التعليمات لإعادة تعيين كلمة المرور.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                onClick={() => navigate(ROUTES.LOGIN)}
                                                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3.5 rounded-xl text-base font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all"
                                            >
                                                <span className="flex items-center justify-center gap-2">
                                                    <MdArrowBack className="text-xl" />
                                                    العودة إلى تسجيل الدخول
                                                </span>
                                            </Button>
                                        </motion.div>

                                        <button
                                            onClick={() => setEmailSent(false)}
                                            className="w-full text-sm text-gray-600 hover:text-emerald-600 transition"
                                        >
                                            لم تستلم البريد الإلكتروني؟ إعادة الإرسال
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
}
