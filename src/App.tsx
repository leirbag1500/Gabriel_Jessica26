import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import Gifts from "./pages/Gifts";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import OurStory from "./pages/OurStory";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/confirmar-presenca" element={<RSVP />} />
            <Route path="/presentes" element={<Gifts />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/local" element={<Location />} />
            <Route path="/nossa-historia" element={<OurStory />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
