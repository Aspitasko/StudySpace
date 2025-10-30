import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import GitHubLogo from "@/components/GitHubLogo";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* GitHub logo top left */}
      <div className="fixed top-4 left-4 z-50">
        <a href="https://github.com/AyaanplayszYT/StudySpace" target="_blank" rel="noopener noreferrer" title="View on GitHub">
          <span style={{ display: 'inline-block', opacity: 0.8 }}>
            <GitHubLogo size={24} />
          </span>
        </a>
      </div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <footer
        className="fixed bottom-0 left-0 w-full bg-card/50 backdrop-blur-sm text-center py-4 text-base text-muted-foreground font-normal z-40"
        style={{opacity: 0.95}}
      >
        Idea of Arfan and Hasan, Made by Aftab & Ayan
      </footer>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
