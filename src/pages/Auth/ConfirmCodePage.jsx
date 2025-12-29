import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Button from "../../shared/components/ui/Button";
import { ROUTES } from "../../shared/constants/routes";

import otpIllustration from "../../assets/auth/login-illustration.png";

const confirmSchema = z.object({
  code: z.string().min(6, { message: "الرجاء إدخال الرمز كاملاً" }),
});

export default function ConfirmCodePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(confirmSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Code Confirmed:", data);
      setIsLoading(false);
      navigate(ROUTES.NEW_PASSWORD || "/auth/new-password");
    }, 1500);
  };

  return (
    <PageWrapper>
      <SEO title="تأكيد الرمز" description="أدخل رمز التحقق المرسل إليك" />

  
      <div className="bg-[#4a0f18] py-8 md:py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">تأكيد الرمز</h1>
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
              src={otpIllustration}
              alt="OTP Illustration"
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
              <h2 className="text-3xl font-bold text-slate-900">تأكيد الرمز</h2>
              <p className="text-gray-500 text-sm">
                لقد قمنا بإرسال رمز المصادقة إلى بريدك الإلكتروني
                <br />
                <span className="font-semibold text-slate-900 ltr">{location.state?.email || "example@email.com"}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">أدخل الكود:</label>
                <div className="relative">
                  <input
                    type="text"
                    {...register("code")}
                    className={`w-full rounded-lg border bg-white px-4 py-3 text-center tracking-[10px] text-lg font-bold outline-none transition-all ${errors.code ? "border-red-500" : "border-gray-300 focus:border-[#004733]"
                      }`}
                    placeholder="— — — — — —"
                    maxLength={6}
                  />
                </div>
                {errors.code && <p className="text-xs text-red-500">{errors.code.message}</p>}
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">لم تستلم الرمز؟</span>
                <button type="button" className="text-red-500 font-bold hover:underline">أعد الإرسال</button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#004733] hover:bg-[#003723] text-white py-3 rounded-lg text-base font-semibold shadow-md"
              >
                {isLoading ? "جاري التأكيد..." : "تأكيد"}
              </Button>

            </form>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
