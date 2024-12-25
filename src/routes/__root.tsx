import { ThemeProvider } from "@/components/context/theme-provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a QueryClient instance with proper options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system">
        <div className="bg-gradient-to-br from-background to-muted">
          <Header />
          <main className="min-h-screen container mx-auto px-4 py-8">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ReactQueryDevtools />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  ),
});
