import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MdVisibility,
  MdVisibilityOff,
  MdCheck,
  MdPersonAdd,
  MdEmail,
  MdLock,
  MdPhone,
  MdPerson,
  MdSecurity,
} from "react-icons/md";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Button from "../../shared/components/ui/Button";
import { ROUTES } from "../../shared/constants/routes";
import { useAuth } from "../../contexts/AuthContext";

// استخدام نفس الصورة مؤقتاً أو صورة جديدة إذا توفرت
import registerIllustration from "../../assets/auth/login-illustration.png";

// ================= Schema Validation =================
const phoneRegex = /^(09|\+9639)[0-9]{8}$/; // Regex تقريبي لأرقام الموبايل السورية

const registerSchema = z
  .object({
    firstName: z.string().min(2, { message: "الاسم الأول مطلوب" }),
    lastName: z.string().min(2, { message: "الاسم الأخير مطلوب" }),
    email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
    phone: z.string().regex(phoneRegex, { message: "رقم الهاتف غير صالح (09xxxxxxxx)" }),
    password: z.string().min(6, { message: "كلمة المرور يجب أن تكون 6 محارف على الأقل" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمات المرور غير متطابقة",
    path: ["confirmPassword"],
  });

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    // محاكاة طلب الشبكة
    setTimeout(() => {
      // تسجيل المستخدم باستخدام AuthContext
      registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
      });
      setIsLoading(false);
      toast.success("تم إنشاء الحساب بنجاح!");
      navigate(ROUTES.HOME); // توجيه للرئيسية بعد التسجيل
    }, 1500);
  };

  return (
    <PageWrapper>
      <SEO title="إنشاء حساب" description="انضم إلى بوابة الجامعات وابدأ رحلة استكشاف مستقبلك" />

      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-[#4a0f18] via-[#6B1F2A] to-[#4a0f18] py-8 md:py-12 text-center text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <div className="relative z-10 flex items-center justify-center gap-3">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <MdPersonAdd className="text-4xl md:text-5xl" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold">إنشاء حساب</h1>
        </div>
      </div>

      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden" dir="rtl">
        {/* Animated background decorations */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-start relative z-10">

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex flex-col items-center justify-center sticky top-24 relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={registerIllustration}
                alt="Sign Up Illustration"
                className="max-w-md w-full object-contain drop-shadow-2xl"
              />
            </motion.div>
            {/* Decorative icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 text-emerald-500/20"
            >
              <MdSecurity className="text-6xl" />
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100">
              <div className="text-right space-y-3 mb-6">
                <div className="flex items-center justify-end gap-3">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">إنشاء حساب جديد</h2>
                    <p className="text-gray-500 text-sm mt-1">
                      ادخل بياناتك بشكل صحيح لضمان إنشاء الحساب بشكل صحيح
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg"
                  >
                    <MdPersonAdd className="text-2xl text-white" />
                  </motion.div>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* الاسم الأول والأخير */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <MdPerson className="text-emerald-600" />
                      الاسم الأول
                    </label>
                    <input
                      {...register("firstName")}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all ${errors.firstName ? "border-red-500" : "border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        }`}
                      placeholder="الاسم الأول"
                    />
                    {errors.firstName && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-500"
                      >
                        {errors.firstName.message}
                      </motion.p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <MdPerson className="text-emerald-600" />
                      الاسم الأخير
                    </label>
                    <input
                      {...register("lastName")}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all ${errors.lastName ? "border-red-500" : "border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        }`}
                      placeholder="الاسم الأخير"
                    />
                    {errors.lastName && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-500"
                      >
                        {errors.lastName.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MdEmail className="text-emerald-600" />
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      }`}
                    placeholder="example@domain.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                {/* رقم الهاتف */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MdPhone className="text-emerald-600" />
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all ${errors.phone ? "border-red-500" : "border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      }`}
                    placeholder="09xxxxxxxx"
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500"
                    >
                      {errors.phone.message}
                    </motion.p>
                  )}
                </div>

                {/* كلمة المرور */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MdLock className="text-emerald-600" />
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all ${errors.password ? "border-red-500" : "border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        }`}
                      placeholder="••••••••"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition"
                    >
                      {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                    </motion.button>
                  </div>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500"
                    >
                      {errors.password.message}
                    </motion.p>
                  )}
                </div>

                {/* تأكيد كلمة المرور */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MdLock className="text-emerald-600" />
                    تأكيد كلمة المرور
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword")}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all ${errors.confirmPassword ? "border-red-500" : "border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        }`}
                      placeholder="••••••••"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition"
                    >
                      {showConfirmPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                    </motion.button>
                  </div>
                  {errors.confirmPassword && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500"
                    >
                      {errors.confirmPassword.message}
                    </motion.p>
                  )}
                </div>

                {/* الشروط */}
                <div className="flex items-start gap-2 pt-2">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="peer h-4 w-4 appearance-none rounded border border-gray-300 bg-white checked:bg-emerald-600 checked:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition"
                    />
                    <MdCheck className="pointer-events-none absolute left-0 top-0 hidden h-4 w-4 text-white peer-checked:block" />
                  </div>
                  <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer select-none">
                    أوافق على جميع{" "}
                    <Link to={ROUTES.TERMS} className="text-emerald-600 font-bold hover:underline">
                      الشروط وسياسات الخصوصية
                    </Link>
                  </label>
                </div>

                {/* زر التسجيل */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3.5 rounded-xl text-base font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all mt-2"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        جاري إنشاء الحساب...
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <MdPersonAdd className="text-xl" />
                        إنشاء حساب
                      </span>
                    )}
                  </Button>
                </motion.div>

                <div className="text-center text-sm text-gray-600 mt-4">
                  لديك حساب بالفعل؟{" "}
                  <Link to={ROUTES.LOGIN || "#"} className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline transition">
                    تسجيل الدخول
                  </Link>
                </div>

                {/* Social Login */}
                <div className="relative flex items-center justify-center my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative bg-white px-4 text-xs text-gray-500 font-medium">
                    أو تسجيل حساب باستخدام
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-500 transition-all group"
                  >
                    <FaFacebookF size={20} className="text-gray-600 group-hover:text-blue-600 transition" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-xl hover:bg-red-50 hover:border-red-500 transition-all group"
                  >
                    <FaGoogle size={20} className="text-gray-600 group-hover:text-red-500 transition" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="flex items-center justify-center p-3 border-2 border-gray-200 rounded-xl hover:bg-gray-100 hover:border-black transition-all group"
                  >
                    <FaApple size={22} className="text-gray-600 group-hover:text-black transition" />
                  </motion.button>
                </div>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
