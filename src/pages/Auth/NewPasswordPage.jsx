import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Button from "../../shared/components/ui/Button";
import { ROUTES } from "../../shared/constants/routes";

import newPassIllustration from "../../assets/auth/login-illustration.png";

const resetSchema = 
  z.object({
    password: z.string().min(6, { message: "كلمة المرور يجب أن تكون 6 محارف على الأقل" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمات المرور غير متطابقة",
    path: ["confirmPassword"],
  });

export default function NewPasswordPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Password Reset:", data);
      setIsLoading(false);
      navigate(ROUTES.LOGIN);  
    }, 1500);
  };

  return (
    <PageWrapper>
      <SEO title="تعيين كلمة مرور" description="قم بتعيين كلمة مرور جديدة لحسابك" />


      <div className="bg-[#4a0f18] py-8 md:py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">تعيين كلمة مرور جديدة</h1>
      </div>

      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 bg-white" dir="rtl">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">

    
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex justify-center"
          >
            <img
              src={newPassIllustration}
              alt="Reset Password"
              className="max-w-md w-full object-contain drop-shadow-xl"
            />
          </motion.div>

  
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto space-y-8"
          >
            <div className="text-right space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">تعيين كلمة مرور</h2>
              <p className="text-gray-500 text-sm">
                تم إعادة تعيين كلمة مرورك القديمة، يرجى تعيين كلمة مرور جديدة لحسابك.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">إنشاء كلمة مرور</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-all ${errors.password ? "border-red-500" : "border-gray-300 focus:border-[#004733]"
                      }`}
                    placeholder="Create Password"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPassword ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">أعد إدخال كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-all ${errors.confirmPassword ? "border-red-500" : "border-gray-300 focus:border-[#004733]"
                      }`}
                    placeholder="Confirm Password"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showConfirmPassword ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#004733] hover:bg-[#003723] text-white py-3 rounded-lg text-base font-semibold shadow-md"
              >
                {isLoading ? "جاري الحفظ..." : "تعيين كلمة المرور"}
              </Button>

            </form>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
