import { Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { ROUTES } from "../../constants/routes";
import LoadingPage from "../ui/LoadingPage";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <LoadingPage />;
    }

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return children;
}
