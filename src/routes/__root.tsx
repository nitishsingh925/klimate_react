import { ThemeProvider } from "@/components/context/theme-provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="system">
      <div className="bg-gradient-to-br from-background to-muted">
        <Header />
        <main className="min-h-screen container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
