
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2, Search } from "lucide-react";

// Make sure this matches the schemes from the frontend
import { certificationSchemes } from "@/data/certificationSchemes";

type Registration = {
  id: string;
  name: string;
  email: string;
  phone: string;
  scheme: string;
  status: string;
  registrationDate: string;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  education?: string;
  institution?: string;
  graduationYear?: string;
  major?: string;
  experience?: string;
  motivation?: string;
  preferredDate?: string;
};

const initialData: Registration[] = [
  {
    id: "1",
    name: "Ahmad Rizki",
    email: "ahmad@example.com",
    phone: "081234567890",
    scheme: "Junior Web Developer",
    status: "Menunggu Verifikasi",
    registrationDate: "2023-10-15",
    address: "Jl. Merdeka No. 123",
    city: "Jakarta",
    province: "DKI Jakarta",
    postalCode: "12345",
    education: "s1",
    institution: "Universitas Indonesia",
    graduationYear: "2022",
    major: "Teknik Informatika",
    experience: "2 tahun pengalaman sebagai web developer freelance",
    motivation: "Ingin meningkatkan kredibilitas dan peluang karir",
    preferredDate: "2023-11-01"
  },
  {
    id: "2",
    name: "Dewi Susanti",
    email: "dewi@example.com",
    phone: "081298765432",
    scheme: "Network Administrator",
    status: "Terjadwal",
    registrationDate: "2023-10-10",
    address: "Jl. Sudirman No. 45",
    city: "Bandung",
    province: "Jawa Barat",
    postalCode: "40123",
    education: "d3",
    institution: "Politeknik Bandung",
    graduationYear: "2021",
    major: "Teknik Komputer Jaringan",
    experience: "1 tahun sebagai Network Support",
    motivation: "Ingin mendapatkan pengakuan resmi atas kompetensi",
    preferredDate: "2023-10-25"
  },
  {
    id: "3",
    name: "Faisal Rahman",
    email: "faisal@example.com",
    phone: "081245678901",
    scheme: "Digital Marketing",
    status: "Terverifikasi",
    registrationDate: "2023-10-05",
    address: "Jl. Gatot Subroto No. 78",
    city: "Surabaya",
    province: "Jawa Timur",
    postalCode: "60123",
    education: "s2",
    institution: "Universitas Airlangga",
    graduationYear: "2020",
    major: "Manajemen Pemasaran",
    experience: "3 tahun sebagai Social Media Specialist",
    motivation: "Ingin memperkuat portofolio dan meningkatkan karir",
    preferredDate: "2023-10-18"
  },
];

const statusColors = {
  "Menunggu Verifikasi": "bg-yellow-100 text-yellow-800",
  "Terverifikasi": "bg-blue-100 text-blue-800",
  "Terjadwal": "bg-green-100 text-green-800",
  "Selesai": "bg-purple-100 text-purple-800",
  "Ditolak": "bg-red-100 text-red-800",
};

const RegistrationManagement = () => {
  const [registrations, setRegistrations] = useState<Registration[]>(initialData);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null);
  const [newStatus, setNewStatus] = useState("");
  const { toast } = useToast();

  const openViewDialog = (registration: Registration) => {
    setSelectedRegistration(registration);
    setIsViewDialogOpen(true);
  };

  const openStatusDialog = (registration: Registration) => {
    setSelectedRegistration(registration);
    setNewStatus(registration.status);
    setIsStatusDialogOpen(true);
  };

  const updateStatus = () => {
    if (selectedRegistration && newStatus) {
      setRegistrations(registrations.map(reg => 
        reg.id === selectedRegistration.id 
          ? { ...reg, status: newStatus } 
          : reg
      ));
      toast({
        title: "Status pendaftaran diperbarui",
        description: `Status pendaftaran ${selectedRegistration.name} diubah menjadi "${newStatus}"`,
      });
      setIsStatusDialogOpen(false);
    }
  };

  const deleteRegistration = (id: string) => {
    setRegistrations(registrations.filter(reg => reg.id !== id));
    toast({
      title: "Pendaftaran dihapus",
      description: "Data pendaftaran telah dihapus dari sistem",
    });
  };

  const getSchemeTitle = (schemeId: string) => {
    const scheme = certificationSchemes.find(s => s.id.toString() === schemeId || s.title === schemeId);
    return scheme ? scheme.title : schemeId;
  };

  const getEducationLevel = (code: string) => {
    const educationMap: {[key: string]: string} = {
      'sma': 'SMA/SMK/Sederajat',
      'd3': 'D3',
      's1': 'S1',
      's2': 'S2', 
      's3': 'S3'
    };
    
    return educationMap[code] || code;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Manajemen Pendaftaran</h2>
        <p className="text-muted-foreground">
          Kelola dan pantau status pendaftaran sertifikasi
        </p>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Skema</TableHead>
              <TableHead>Tanggal Daftar</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[150px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registrations.map((registration) => (
              <TableRow key={registration.id}>
                <TableCell className="font-medium">{registration.name}</TableCell>
                <TableCell>{registration.scheme}</TableCell>
                <TableCell>{registration.registrationDate}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs ${statusColors[registration.status as keyof typeof statusColors] || "bg-gray-100"}`}>
                    {registration.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => openViewDialog(registration)}>
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => openStatusDialog(registration)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteRegistration(registration.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* View Registration Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Detail Pendaftaran</DialogTitle>
            <DialogDescription>
              Informasi lengkap tentang pendaftaran
            </DialogDescription>
          </DialogHeader>

          {selectedRegistration && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Informasi Pribadi</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Nama</p>
                    <p>{selectedRegistration.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p>{selectedRegistration.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Telepon</p>
                    <p>{selectedRegistration.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Alamat</p>
                    <p>{selectedRegistration.address}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Kota</p>
                    <p>{selectedRegistration.city}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Provinsi</p>
                    <p>{selectedRegistration.province}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Kode Pos</p>
                    <p>{selectedRegistration.postalCode}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Informasi Pendidikan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Institusi/Perguruan Tinggi</p>
                    <p>{selectedRegistration.institution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pendidikan Terakhir</p>
                    <p>{getEducationLevel(selectedRegistration.education || "")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Tahun Kelulusan</p>
                    <p>{selectedRegistration.graduationYear}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Jurusan</p>
                    <p>{selectedRegistration.major}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Informasi Sertifikasi</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Skema</p>
                    <p>{selectedRegistration.scheme}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pengalaman</p>
                    <p>{selectedRegistration.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Motivasi</p>
                    <p>{selectedRegistration.motivation}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Tanggal Diinginkan</p>
                    <p>{selectedRegistration.preferredDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Tanggal Daftar</p>
                    <p>{selectedRegistration.registrationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <span className={`px-2 py-1 rounded text-xs ${statusColors[selectedRegistration.status as keyof typeof statusColors] || "bg-gray-100"}`}>
                      {selectedRegistration.status}
                    </span>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Tutup</Button>
                </DialogClose>
                <Button onClick={() => {
                  setIsViewDialogOpen(false);
                  openStatusDialog(selectedRegistration);
                }}>
                  Update Status
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Update Status Dialog */}
      <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Status Pendaftaran</DialogTitle>
            <DialogDescription>
              Ubah status pendaftaran untuk {selectedRegistration?.name}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">Status Baru</label>
              <select
                id="status"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                <option value="Terverifikasi">Terverifikasi</option>
                <option value="Terjadwal">Terjadwal</option>
                <option value="Selesai">Selesai</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setIsStatusDialogOpen(false)}>
                Batal
              </Button>
              <Button onClick={updateStatus}>
                Simpan Perubahan
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegistrationManagement;
