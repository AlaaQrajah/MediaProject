import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ROUTES } from "../../shared/constants/routes";
import RootLayout from "../../shared/components/layout/RootLayout";
import LoadingPage from "../../shared/components/ui/LoadingPage";
import ScrollToTop from "../../shared/components/ui/ScrollToTop";
import ProtectedRoute from "../../shared/components/layout/ProtectedRoute";


const HomePage = lazy(() => import("../../pages/Home/HomePage"));
const UniversitiesPage = lazy(() => import("../../pages/Universities/UniversitiesPage"));
const UniversityDetailsPage = lazy(() => import("../../pages/Universities/UniversityDetailsPage"));
const CollegePage = lazy(() => import("../../pages/College/CollegePage"));
const DepartmentsPage = lazy(() => import("../../pages/Departments/DepartmentsPage"));
const SpecialtiesPage = lazy(() => import("../../pages/Specialties/SpecialtiesPage"));
const SpecialtyDetailsPage = lazy(() => import("../../pages/Specialties/SpecialtyDetailsPage"));
const NotificationsPage = lazy(() => import("../../pages/Notifications/NotificationsPage"));
const ProfilePage = lazy(() => import("../../pages/Profile/ProfilePage"));
const GrantsPage = lazy(() => import("../../pages/Grants/GrantsPage"));
const GrantDetailsPage = lazy(() => import("../../pages/Grants/GrantDetailsPage"));
const DevelopersPage = lazy(() => import("../../pages/Developers/DevelopersPage"));


const LoginPage = lazy(() => import("../../pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("../../pages/Auth/RegisterPage"));
const ConfirmCodePage = lazy(() => import("../../pages/Auth/ConfirmCodePage"));
const ForgotPasswordPage = lazy(() => import("../../pages/Auth/ForgotPasswordPage"));
const NewPasswordPage = lazy(() => import("../../pages/Auth/NewPasswordPage"));

const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: ROUTES.UNIVERSITIES,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <UniversitiesPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: `${ROUTES.UNIVERSITIES}/:id`,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <UniversityDetailsPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: ROUTES.COLLEGE,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <CollegePage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: ROUTES.DEPARTMENTS,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <DepartmentsPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: ROUTES.SPECIALTIES,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <SpecialtiesPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: `${ROUTES.SPECIALTIES}/:id`,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <SpecialtyDetailsPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: ROUTES.NOTIFICATIONS,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <NotificationsPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: ROUTES.PROFILE,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: ROUTES.GRANTS,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <GrantsPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: ROUTES.GRANT_DETAILS,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <GrantDetailsPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: ROUTES.DEVELOPERS,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProtectedRoute>
              <DevelopersPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },

      
      {
        path: ROUTES.LOGIN,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.REGISTER,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.CONFIRM_CODE,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ConfirmCodePage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ForgotPasswordPage />
          </Suspense>
        ),
      },
      {
        path: ROUTES.NEW_PASSWORD,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <NewPasswordPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
