
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  const adminMenuItems = [
    { title: "Profil", description: "Kelola konten halaman profil", path: "profile" },
    { title: "Skema Sertifikasi", description: "Kelola data skema sertifikasi", path: "schemes" },
    { title: "Tim & Asesor", description: "Kelola data manajemen, asesor, dan komite", path: "team" },
    { title: "Informasi", description: "Kelola berita dan pengumuman", path: "information" },
    { title: "Galeri", description: "Kelola galeri foto kegiatan", path: "gallery" },
    { title: "FAQ", description: "Kelola pertanyaan yang sering diajukan", path: "faq" },
    { title: "Kontak", description: "Kelola pesan dari pengunjung", path: "contacts" },
    { title: "Pendaftaran", description: "Kelola data pendaftar sertifikasi", path: "registrations" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Selamat datang di Panel Admin</h2>
        <p className="text-muted-foreground">
          Kelola semua konten website dari dashboard ini
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Skema Sertifikasi</CardTitle>
            <CardDescription>Jumlah skema yang tersedia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tim Asesor</CardTitle>
            <CardDescription>Jumlah asesor terdaftar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pendaftar</CardTitle>
            <CardDescription>Jumlah pendaftar bulan ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-semibold mb-4">Menu Admin</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {adminMenuItems.map((item) => (
          <Card 
            key={item.path} 
            className="hover:bg-muted/50 cursor-pointer transition-colors"
            onClick={() => navigate(`/admin/dashboard/${item.path}`)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Petunjuk Penggunaan</h3>
        <div className="prose max-w-none">
          <ul className="list-disc pl-6 space-y-2">
            <li>Gunakan menu di sebelah kiri untuk navigasi antar halaman admin</li>
            <li>Menu <strong>Skema Sertifikasi</strong> untuk mengelola data skema</li>
            <li>Menu <strong>Tim & Asesor</strong> untuk mengelola data manajemen, asesor, dan komite sertifikasi</li>
            <li>Menu <strong>Profil</strong> untuk mengelola konten halaman profil</li>
            <li>Menu <strong>Informasi</strong> untuk mengelola berita dan pengumuman</li>
            <li>Menu <strong>Galeri</strong> untuk mengelola foto kegiatan</li>
            <li>Menu <strong>FAQ</strong> untuk mengelola pertanyaan yang sering diajukan</li>
            <li>Menu <strong>Kontak</strong> untuk mengelola pesan dari pengunjung</li>
            <li>Menu <strong>Pendaftaran</strong> untuk mengelola data pendaftar sertifikasi</li>
            <li>Gunakan tombol <strong>Logout</strong> untuk keluar dari panel admin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
