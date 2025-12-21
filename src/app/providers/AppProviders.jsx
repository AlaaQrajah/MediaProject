import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../../contexts/AuthContext";

const queryClient = new QueryClient();

export function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
                  <ReactQueryDevtools initialIsOpen={false} />
                  <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>
    </QueryClientProvider>
  );
}
