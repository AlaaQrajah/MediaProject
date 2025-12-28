import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { ROUTES } from "../../constants/routes";
import Button from "../ui/Button";
import Logo from "../../../assets/logos/logo-unigate.svg";
import { useAuth } from "../../../contexts/AuthContext";

import { MdMenu, MdClose, MdPerson, MdLogout, MdNotifications } from "react-icons/md";

 
const NAV_ITEMS = [
  { label: "الرئيسية", to: ROUTES.HOME },
  { label: "الجامعات", to: ROUTES.UNIVERSITIES },
  { label: "الاختصاصات", to: ROUTES.SPECIALTIES },
  { label: "المنح", to: ROUTES.GRANTS },
  { label: "المطورون", to: ROUTES.DEVELOPERS },
];

 
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate(ROUTES.HOME);
  };

  return (
    <header
      dir="rtl"
      className="
        sticky top-0 z-40
        bg-white/95 backdrop-blur
        border-b border-gray-100
        shadow-[0_1px_0_rgba(244,177,63,0.6)]
      "
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">

    
        <Link to={ROUTES.HOME} className="flex items-center gap-3 shrink-0">
          <img src={Logo} alt="UniGate Logo" className="h-10 w-auto" />
          <span className="text-base font-bold text-gray-900">
            بوابة الجامعات
          </span>
        </Link>

       
        <button
          onClick={toggleMenu}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          className="
            md:hidden flex items-center justify-center
            h-10 w-10 rounded-full border border-gray-300 bg-white shadow-sm
            hover:bg-gray-50 transition
          "
        >
          {open ? (
            <MdClose className="text-slate-800 text-2xl transition-transform duration-300 rotate-180" />
          ) : (
            <MdMenu className="text-slate-800 text-2xl transition-transform duration-300" />
          )}
        </button>

         
        <div className="hidden md:flex flex-1 items-center justify-between">

          {/* Links */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `
                        pb-1 transition
                        ${isActive
                        ? "text-[#004733]"
                        : "text-gray-700 hover:text-[#004733]"
                      }
                      `
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
 
          <div className="flex items-center gap-3 shrink-0">
            {isAuthenticated ? (
              <>
                
                <Link
                  to={ROUTES.NOTIFICATIONS}
                  className="relative p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <MdNotifications className="text-2xl text-gray-700" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Link>

               
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {user?.firstName} {user?.lastName}
                    </span>
                  </button>

                  
                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      >
                        <Link
                          to={ROUTES.PROFILE}
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                        >
                          <MdPerson className="text-lg" />
                          الملف الشخصي
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                        >
                          <MdLogout className="text-lg" />
                          تسجيل الخروج
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.REGISTER}>
                  <Button
                    variant="outline"
                    className="text-xs px-5 py-1.5 border-[#004733] text-[#004733] hover:bg-[#004733]/5"
                  >
                    إنشاء حساب
                  </Button>
                </Link>

                <Link to={ROUTES.LOGIN}>
                  <Button className="text-xs px-5 py-1.5 bg-[#004733] hover:bg-[#003723]">
                    تسجيل دخول
                  </Button>
                </Link>
              </>
            )}
          </div>

        </div>
      </div>

     
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 space-y-3 text-sm font-medium text-gray-800">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                    block py-1 transition
                    ${isActive
                    ? "text-[#004733]"
                    : "text-gray-700 hover:text-[#004733]"
                  }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}

            
            {isAuthenticated ? (
              <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>

                <Link to={ROUTES.NOTIFICATIONS} onClick={closeMenu}>
                  <Button
                    variant="outline"
                    className="w-full text-xs py-2 border-gray-300 text-gray-700 flex items-center justify-center gap-2"
                  >
                    <MdNotifications className="text-lg" />
                    الإشعارات
                  </Button>
                </Link>

                <Link to={ROUTES.PROFILE} onClick={closeMenu}>
                  <Button
                    variant="outline"
                    className="w-full text-xs py-2 border-[#004733] text-[#004733] flex items-center justify-center gap-2"
                  >
                    <MdPerson className="text-lg" />
                    الملف الشخصي
                  </Button>
                </Link>

                <Button
                  onClick={() => { handleLogout(); closeMenu(); }}
                  className="w-full text-xs py-2 bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2"
                >
                  <MdLogout className="text-lg" />
                  تسجيل الخروج
                </Button>
              </div>
            ) : (
              <div className="mt-3 flex flex-col gap-2">
                <Link to={ROUTES.REGISTER} onClick={closeMenu}>
                  <Button
                    variant="outline"
                    className="w-full text-xs py-1.5 border-[#004733] text-[#004733]"
                  >
                    إنشاء حساب
                  </Button>
                </Link>

                <Link to={ROUTES.LOGIN} onClick={closeMenu}>
                  <Button className="w-full text-xs py-1.5 bg-[#004733] hover:bg-[#003723]">
                    تسجيل دخول
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}

    </header>
  );
}
