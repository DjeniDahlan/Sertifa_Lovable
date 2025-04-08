
import React from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Button } from "@/components/ui/button";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarProvider, 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useNavigate, Outlet } from "react-router-dom";
import { LogOut, Settings, User, Edit, Plus, Search, Image, MessageSquare, FileText, HelpCircle, Contact, FileBadge } from "lucide-react";

const AdminDashboardPage = () => {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-gray-50">
        <Sidebar>
          <SidebarHeader className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                <Settings size={18} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Admin CMS</h3>
                <p className="text-xs text-muted-foreground">Panel Pengelolaan</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/dashboard")}
                  isActive={location.pathname === "/admin/dashboard"}
                >
                  <Settings /> 
                  <span>Dasbor</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/dashboard/profile")}
                  isActive={location.pathname.includes("/admin/dashboard/profile")}
                >
                  <User /> 
                  <span>Profil</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/dashboard/schemes")}
                  isActive={location.pathname.includes("/admin/dashboard/schemes")}
                >
                  <Edit /> 
                  <span>Skema Sertifikasi</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/dashboard/team")}
                  isActive={location.pathname.includes("/admin/dashboard/team")}
                >
                  <User /> 
                  <span>Tim & Asesor</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/dashboard/information")}
                  isActive={location.pathname.includes("/admin/dashboard/information")}
                >
                  <FileText /> 
                  <span>Informasi</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/dashboard/gallery")}
                  isActive={location.pathname.includes("/admin/dashboard/gallery")}
                >
                  <Image /> 
                  <span>Galeri</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/dashboard/faq")}
                  isActive={location.pathname.includes("/admin/dashboard/faq")}
                >
                  <HelpCircle /> 
                  <span>FAQ</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/dashboard/contacts")}
                  isActive={location.pathname.includes("/admin/dashboard/contacts")}
                >
                  <MessageSquare /> 
                  <span>Kontak</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/admin/dashboard/registrations")}
                  isActive={location.pathname.includes("/admin/dashboard/registrations")}
                >
                  <FileBadge /> 
                  <span>Pendaftaran</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto p-4 border-t">
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={logout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </Sidebar>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b h-14 flex items-center justify-between px-4 sm:px-6">
            <div className="flex items-center">
              <SidebarTrigger className="md:hidden mr-2" />
              <h1 className="text-lg font-semibold">Admin Panel</h1>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto p-4 sm:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboardPage;
