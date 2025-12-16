import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("unigate_user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Error parsing user data:", error);
                localStorage.removeItem("unigate_user");
            }
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        const user = {
            id: Date.now(),
            email: userData.email,
            firstName: userData.firstName || "مستخدم",
            lastName: userData.lastName || "جديد",
            avatar: userData.avatar || null,
            createdAt: new Date().toISOString(),
        };
        setUser(user);
        localStorage.setItem("unigate_user", JSON.stringify(user));
        return user;
    };

    const register = (userData) => {
        const user = {
            id: Date.now(),
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone,
            avatar: null,
            createdAt: new Date().toISOString(),
        };
        setUser(user);
        localStorage.setItem("unigate_user", JSON.stringify(user));
        return user;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("unigate_user");
    };

    const updateUser = (updates) => {
        const updatedUser = { ...user, ...updates };
        setUser(updatedUser);
        localStorage.setItem("unigate_user", JSON.stringify(updatedUser));
    };

    const value = {
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
