import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Button from "../../shared/components/ui/Button";
import { ROUTES } from "../../shared/constants/routes";

import forgetIllustration from "../../assets/auth/login-illustration.png";

const forgetSchema = z.object({
  email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
});

export default function ForgetPasswordPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgetSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Forget Password Request:", data);
      setIsLoading(false);
  
      navigate(ROUTES.CONFIRM_CODE || "/auth/confirm-code", { state: { email: data.email } });
    }, 1500);
  };

  return (
    <PageWrapper>
      <SEO title="نسيت كلمة المرور" description="استعادة كلمة المرور الخاصة بحسابك" />
      <div className="bg-[#4a0f18] py-8 md:py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">نسيت كلمة المرور</h1>
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
              src={forgetIllustration}
              alt="Forget Password"
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
              <h2 className="text-3xl font-bold text-slate-900">نسيت كلمة المرور</h2>
              <p className="text-gray-500 text-sm">
                لا تقلق، يعد الأمر بسيطاً جداً! فقط ادخل بريدك الإلكتروني وسيتم إرسال كود الاستعادة إليك.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">البريد الإلكتروني</label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-300 focus:border-[#004733]"
                    }`}
                  placeholder="example@domain.com"
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#004733] hover:bg-[#003723] text-white py-3 rounded-lg text-base font-semibold shadow-md"
              >
                {isLoading ? "جاري الإرسال..." : "إرسال"}
              </Button>
              <div className="relative flex items-center justify-center my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                <div className="relative bg-white px-4 text-xs text-gray-500">تسجيل دخول باستخدام</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button type="button" className="flex items-center justify-center p-2.5 border rounded-lg hover:bg-gray-50"><FaFacebookF className="text-blue-600" /></button>
                <button type="button" className="flex items-center justify-center p-2.5 border rounded-lg hover:bg-gray-50"><FaGoogle className="text-red-500" /></button>
                <button type="button" className="flex items-center justify-center p-2.5 border rounded-lg hover:bg-gray-50"><FaApple className="text-black" /></button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
