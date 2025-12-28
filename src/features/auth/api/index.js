import { api } from "../../../shared/lib/api";

export const authApi = {
  login: (data) => api.post("/auth/login", data),
  register: (data) => api.post("/auth/register", data),
  me: (token) => api.get("/auth/me", { headers: { Authorization: `Bearer ${token}` } }),
};
