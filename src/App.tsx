
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import ProfilePage from "./pages/ProfilePage";
import SchemaPage from "./pages/SchemaPage";
import SchemaDetailPage from "./pages/SchemaDetailPage";
import InformationPage from "./pages/InformationPage";
import TeamPage from "./pages/TeamPage";
import GalleryPage from "./pages/GalleryPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFound from "./pages/NotFound";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

// Admin components
import AdminHome from "./components/admin/AdminHome";
import SchemesManagement from "./components/admin/SchemesManagement";
import TeamManagement from "./components/admin/TeamManagement";
import ProfileManagement from "./components/admin/ProfileManagement";
import InformationManagement from "./components/admin/InformationManagement";
import GalleryManagement from "./components/admin/GalleryManagement";
import FAQManagement from "./components/admin/FAQManagement";
import ContactManagement from "./components/admin/ContactManagement";
import RegistrationManagement from "./components/admin/RegistrationManagement";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/skema" element={<SchemaPage />} />
              <Route path="/skema/:id" element={<SchemaDetailPage />} />
              <Route path="/informasi" element={<InformationPage />} />
              <Route path="/tim" element={<TeamPage />} />
              <Route path="/galery" element={<GalleryPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/kontak" element={<ContactPage />} />
              <Route path="/pendaftaran" element={<RegistrationPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboardPage />}>
                <Route index element={<AdminHome />} />
                <Route path="schemes" element={<SchemesManagement />} />
                <Route path="team" element={<TeamManagement />} />
                <Route path="profile" element={<ProfileManagement />} />
                <Route path="information" element={<InformationManagement />} />
                <Route path="gallery" element={<GalleryManagement />} />
                <Route path="faq" element={<FAQManagement />} />
                <Route path="contacts" element={<ContactManagement />} />
                <Route path="registrations" element={<RegistrationManagement />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
