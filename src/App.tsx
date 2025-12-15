import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TypesOfCancer from "./pages/TypesOfCancer";
import Treatments from "./pages/Treatments";
import Screening from "./pages/Screening";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TranslateBar from "./components/TranslateBar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TranslateBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/types-of-cancer" element={<TypesOfCancer />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/screening" element={<Screening />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
