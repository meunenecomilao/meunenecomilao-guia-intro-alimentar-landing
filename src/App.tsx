import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { initializeGoogleAnalytics } from "@/lib/google-analytics"

import Guia from "./pages/Guia";
import Receitas from "./pages/Receitas";
import NotFound from "./pages/NotFound";

import data from '@/data.json';

const queryClient = new QueryClient();

const App = () => {

  useEffect(() => {
    initializeGoogleAnalytics(data.google_analytics.id);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Guia />} />
            <Route path="/receitas" element={<Receitas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
};

export default App;
