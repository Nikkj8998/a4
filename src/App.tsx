import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import StrengtheningLivelihoods from "./pages/StrengtheningLivelihoods";
import EnhancingEcosystems from "./pages/EnhancingEcosystems";
import CivicAmenities from "./pages/CivicAmenities";
import EducationHealth from "./pages/EducationHealth";
import AgriEquipmentBank from "./pages/AgriEquipmentBank";
import OrganicFarming from "./pages/OrganicFarming";
import Swadhar from "./pages/Swadhar";
import SolarPower from "./pages/SolarPower";
import ERiksha from "./pages/ERiksha";
import BambooPlantationStudy from "./pages/BambooPlantationStudy";
import CSRActivities from "./pages/CSRActivities";
import Partners from "./pages/Partners";
import Testimonials from "./pages/Testimonials";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/strengthening-livelihoods" element={<StrengtheningLivelihoods />} />
          <Route path="/enhancing-ecosystems" element={<EnhancingEcosystems />} />
          <Route path="/civic-services" element={<CivicAmenities />} />
          <Route path="/education-health" element={<EducationHealth />} />
          <Route path="/agri-equipment-bank" element={<AgriEquipmentBank />} />
          <Route path="/organic-farming" element={<OrganicFarming />} />
          <Route path="/swadhar" element={<Swadhar />} />
          <Route path="/solar-power" element={<SolarPower />} />
          <Route path="/e-riksha" element={<ERiksha />} />
          <Route path="/bamboo-plantation-study" element={<BambooPlantationStudy />} />
          <Route path="/csr-activities" element={<CSRActivities />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
