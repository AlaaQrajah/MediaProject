import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MdEdit,
  MdSave,
  MdPerson,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdDateRange,
  MdSchool,
  MdCancel
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import PageWrapper from "../../shared/components/layout/PageWrapper";
import SEO from "../../shared/components/layout/SEO";
import Avatar from "../../shared/components/ui/Avatar";
import Button from "../../shared/components/ui/Button";

 
const MOCK_USER = {
  firstName: "عبد الرزاق",
  lastName: "الأحمد",
  email: "abdulrazzak2004@gmail.com",
  phone: "0912345678",
  city: "حلب",
  gender: "ذكر",
  birthDate: "2004-06-01",
  highSchoolType: "علمي",
  highSchoolYear: "2022",
  university: "جامعة حلب",
  college: "الهندسة المعلوماتية",
  role: "طالب جامعي",
  image: "https://i.pravatar.cc/300?img=11",
};

 
const profileSchema = z.object({
  firstName: z.string().min(2, "الاسم الأول مطلوب"),
  lastName: z.string().min(2, "الاسم الأخير مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  phone: z.string().min(10, "رقم الهاتف يجب أن يكون 10 أرقام"),
  city: z.string().min(2, "المدينة مطلوبة"),
  gender: z.string(),
  birthDate: z.string(),
  highSchoolType: z.string(),
  university: z.string(),
  college: z.string(),
});

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(MOCK_USER);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: user,
  });

  const onSubmit = (data) => {
    console.log("Updated Profile:", data);
    setUser({ ...user, ...data });
    setIsEditing(false);
  };

  const handleCancel = () => {
    reset(user);
    setIsEditing(false);
  };

  return (
    <PageWrapper>
      <SEO title="الملف الشخصي" description="إدارة بياناتك الشخصية والدراسية" />

       <div className="bg-[#c5a365] h-32 md:h-48 w-full relative">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-16 md:-mt-24 relative z-10 pb-20" dir="rtl">

         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">

           <div className="flex-shrink-0">
            <Avatar
              src={user.image}
              size="xl"
              editable={isEditing}
              className="shadow-xl"
            />
          </div>

           <div className="flex-1 text-center md:text-right space-y-2 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-800">{user.firstName} {user.lastName}</h1>
                <p className="text-gray-500 font-medium ltr">{user.email}</p>
              </div>

               {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-[#004733] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#003828] transition-all"
                >
                  <MdEdit /> تعديل الملف
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="border-red-500 text-red-500 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-red-50"
                  >
                    <MdCancel /> إلغاء
                  </Button>
                  <Button
                    onClick={handleSubmit(onSubmit)}
                    className="bg-[#c5a365] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#b08e55]"
                  >
                    <MdSave /> حفظ التغييرات
                  </Button>
                </div>
              )}
            </div>

             <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold border border-emerald-100">
                {user.role}
              </span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold border border-blue-100">
                سنة 2024
              </span>
            </div>
          </div>
        </div>

         <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid md:grid-cols-2 gap-8">

           <motion.div
            layout
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6"
          >
            <div className="flex items-center gap-2 border-b pb-4 mb-4">
              <MdPerson className="text-2xl text-[#c5a365]" />
              <h2 className="text-xl font-bold text-gray-800">المعلومات الشخصية</h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <EditableField
                label="الاسم الأول"
                name="firstName"
                register={register}
                isEditing={isEditing}
                error={errors.firstName}
                icon={<MdPerson />}
              />
              <EditableField
                label="الاسم الأخير"
                name="lastName"
                register={register}
                isEditing={isEditing}
                error={errors.lastName}
                icon={<MdPerson />}
              />
              <EditableField
                label="تاريخ الميلاد"
                name="birthDate"
                type="date"
                register={register}
                isEditing={isEditing}
                error={errors.birthDate}
                icon={<MdDateRange />}
              />
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-500">الجنس</label>
                {isEditing ? (
                  <select
                    {...register("gender")}
                    className="w-full p-3 rounded-lg border bg-gray-50 focus:bg-white focus:border-[#c5a365] outline-none"
                  >
                    <option value="ذكر">ذكر</option>
                    <option value="أنثى">أنثى</option>
                  </select>
                ) : (
                  <div className="p-3 bg-gray-50 rounded-lg text-gray-800 font-medium">{user.gender}</div>
                )}
              </div>
              <EditableField
                label="مكان الإقامة"
                name="city"
                register={register}
                isEditing={isEditing}
                error={errors.city}
                icon={<MdLocationOn />}
              />
            </div>
          </motion.div>

     
          <motion.div
            layout
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6"
          >
            <div className="flex items-center gap-2 border-b pb-4 mb-4">
              <MdSchool className="text-2xl text-[#c5a365]" />
              <h2 className="text-xl font-bold text-gray-800">المعلومات الأكاديمية والاتصال</h2>
            </div>

            <div className="space-y-4">
              <EditableField
                label="البريد الإلكتروني"
                name="email"
                type="email"
                register={register}
                isEditing={isEditing}
                error={errors.email}
                icon={<MdEmail />}
                disabled={true}  
              />
              <EditableField
                label="رقم الهاتف"
                name="phone"
                register={register}
                isEditing={isEditing}
                error={errors.phone}
                icon={<MdPhone />}
              />
              <div className="border-t my-4"></div>
              <EditableField
                label="الشهادة الثانوية"
                name="highSchoolType"
                register={register}
                isEditing={isEditing}
                disabled={!isEditing}
                error={errors.highSchoolType}
                icon={<MdSchool />}
              />
              <EditableField
                label="الجامعة"
                name="university"
                register={register}
                isEditing={isEditing}
                disabled={!isEditing}
                error={errors.university}
                icon={<MdSchool />}
              />
              <EditableField
                label="الكلية"
                name="college"
                register={register}
                isEditing={isEditing}
                disabled={!isEditing}
                error={errors.college}
                icon={<MdSchool />}
              />
            </div>
          </motion.div>

        </form>

      </div>
    </PageWrapper>
  );
}
 
function EditableField({ label, name, register, isEditing, error, type = "text", icon, disabled = false }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-semibold text-gray-500 flex items-center gap-1">
        {icon && <span className="text-[#c5a365]">{icon}</span>}
        {label}
      </label>
      {isEditing && !disabled ? (
        <>
          <input
            type={type}
            {...register(name)}
            className={`w-full p-3 rounded-lg border outline-none transition-all ${error
                ? "border-red-500 bg-red-50"
                : "border-gray-200 bg-gray-50 focus:bg-white focus:border-[#c5a365]"
              }`}
          />
          {error && <p className="text-xs text-red-500">{error.message}</p>}
        </>
      ) : (
        <div className="p-3 bg-gray-50 rounded-lg text-gray-800 font-medium border border-transparent">
           
          <input
            disabled
            {...register(name)}
            className="w-full bg-transparent border-none p-0 text-gray-800 font-bold disabled:opacity-100 cursor-text"
          />
        </div>
      )}
    </div>
  );
}
