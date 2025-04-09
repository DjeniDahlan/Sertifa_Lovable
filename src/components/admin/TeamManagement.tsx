import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Edit, Eye, Plus, Search, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockMembers = [
  { 
    id: 1, 
    name: "Lukman Khoiruddin", 
    position: "Direktur", 
    type: "management",
    email: "lukman.khoiruddin@lspsertifa.id",
    bio: "9+ tahun pengalaman di bidang IT",
    education: "S1 Teknik Informatika",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["DevOps", "CI/CD", "Automation"],
    phone: "+62 821-0000-0009",
    linkedin: "linkedin.com/in/lukmankhoiruddin",
    imageUrl: "/lovable-uploads/252bf99e-e07e-4040-b243-41390dab7b75.png"
  },
  { 
    id: 2, 
    name: "Djeni Dahlan", 
    position: "Manajer Sertifikasi", 
    type: "management",
    email: "djeni.dahlan@lspsertifa.id",
    bio: "13+ tahun pengalaman di bidang IT",
    education: "S2 Teknik Komputer",
    experience: "13+ tahun pengalaman di bidang IT",
    expertise: ["IoT", "Embedded Systems", "Hardware Integration"],
    phone: "+62 821-0000-0010",
    linkedin: "linkedin.com/in/djenidahlan",
    imageUrl: "/lovable-uploads/b633abfc-a1a4-4c53-80d9-2b42f5e4a26d.png"
  },
  { 
    id: 3, 
    name: "Ardiyan Rofiq", 
    position: "Manajer Mutu", 
    type: "management",
    email: "ardiyan.rofiq@lspsertifa.id",
    bio: "8+ tahun pengalaman di bidang IT",
    education: "S1 Sistem Informasi",
    experience: "8+ tahun pengalaman di bidang IT",
    expertise: ["Backend Development", "API Design", "Microservices"],
    phone: "+62 821-0000-0012",
    linkedin: "linkedin.com/in/ardiyanrofiq",
    imageUrl: "/lovable-uploads/59056277-c292-41d4-a38c-01208b4ad3b3.png"
  },
  { 
    id: 4, 
    name: "Anda Kurnianto", 
    position: "Manajer Administrasi & Keuangan", 
    type: "management",
    email: "anda.kurnianto@lspsertifa.id",
    bio: "7+ tahun pengalaman di bidang IT",
    education: "S1 Teknik Informatika",
    experience: "7+ tahun pengalaman di bidang IT",
    expertise: ["Frontend Development", "UI/UX Design", "Web Accessibility"],
    phone: "+62 821-0000-0011",
    linkedin: "linkedin.com/in/andakurnianto",
    imageUrl: "/lovable-uploads/f19a6c84-551b-4db6-9cd3-42327068d5a2.png"
  },
  { 
    id: 5, 
    name: "Yanuar Hadiyanto", 
    position: "Asesor IT", 
    type: "assessor",
    email: "yanuar.hadiyanto@lspsertifa.id",
    bio: "10+ tahun pengalaman di bidang IT",
    education: "S2 Teknologi Informasi",
    experience: "10+ tahun pengalaman di bidang IT",
    expertise: ["Cloud Computing", "System Integration", "IT Architecture"],
    phone: "+62 821-0000-0001",
    linkedin: "linkedin.com/in/yanuarhadiyanto",
    imageUrl: "/lovable-uploads/1adebbc2-f264-459d-b8c7-d7c4013e30d9.png"
  },
  { 
    id: 6, 
    name: "Andrian The", 
    position: "Asesor IT", 
    type: "assessor",
    email: "andrian.the@lspsertifa.id",
    bio: "12+ tahun pengalaman di industri IT",
    education: "S2 Ilmu Komputer",
    experience: "12+ tahun pengalaman di industri IT",
    expertise: ["Data Science", "Machine Learning", "Software Development"],
    phone: "+62 821-0000-0002",
    linkedin: "linkedin.com/in/andrianthe",
    imageUrl: "/lovable-uploads/placeholder.png" 
  },
  { 
    id: 7, 
    name: "Arindra Saktiawan", 
    position: "Asesor IT", 
    type: "assessor",
    email: "arindra.saktiawan@lspsertifa.id",
    bio: "8+ tahun pengalaman di bidang IT",
    education: "S1 Teknik Informatika",
    experience: "8+ tahun pengalaman di bidang IT",
    expertise: ["Networking", "Infrastructure", "System Administration"],
    phone: "+62 821-0000-0003",
    linkedin: "linkedin.com/in/arindrasaktiawan",
    imageUrl: "/lovable-uploads/placeholder.png" 
  },
  { 
    id: 8, 
    name: "Nuzul Fauzan Mustova", 
    position: "Asesor IT", 
    type: "assessor",
    email: "nuzul.fauzan@lspsertifa.id",
    bio: "7+ tahun pengalaman di bidang IT",
    education: "S1 Sistem Informasi",
    experience: "7+ tahun pengalaman di bidang IT",
    expertise: ["Web Development", "Mobile Development", "UI/UX Design"],
    phone: "+62 821-0000-0004",
    linkedin: "linkedin.com/in/nuzulfauzan",
    imageUrl: "/lovable-uploads/placeholder.png" 
  },
  { 
    id: 9, 
    name: "Taufan Ramadhan", 
    position: "Asesor IT", 
    type: "assessor",
    email: "taufan.ramadhan@lspsertifa.id",
    bio: "9+ tahun pengalaman di bidang IT",
    education: "S1 Teknik Informatika",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["Software Testing", "Quality Assurance", "Test Automation"],
    phone: "+62 821-0000-0014",
    linkedin: "linkedin.com/in/taufanramadhan",
    imageUrl: "/lovable-uploads/8a49d07f-1ab4-40cb-8497-6fb9d96f421a.png"
  },
  { 
    id: 10, 
    name: "Taufan Ramadhan", 
    position: "Ketua Komite Sertifikasi", 
    type: "komite",
    email: "taufan.ramadhan@lspsertifa.id",
    bio: "9+ tahun pengalaman di bidang IT",
    education: "S1 Teknik Informatika",
    experience: "9+ tahun pengalaman di bidang IT",
    expertise: ["Software Testing", "Quality Assurance", "Test Automation"],
    phone: "+62 821-0000-0014",
    linkedin: "linkedin.com/in/taufanramadhan",
    imageUrl: "/lovable-uploads/8a49d07f-1ab4-40cb-8497-6fb9d96f421a.png"
  },
  { 
    id: 11, 
    name: "Rahma Anindita", 
    position: "Anggota Komite Sertifikasi", 
    type: "komite",
    email: "rahma.anindita@lspsertifa.id",
    bio: "Mengkaji dan mengembangkan standar kompetensi di bidang data science.",
    education: "S2 Teknik Informatika",
    experience: "8+ tahun pengalaman di bidang Standarisasi",
    expertise: ["Data Science Standards", "Curriculum Development", "Assessment Design"],
    phone: "+62 821-0000-0026",
    linkedin: "linkedin.com/in/rahmaanindita",
    imageUrl: "/lovable-uploads/8863a0ca-c1e3-4102-a04a-f8bf84ca6787.png"
  },
  { 
    id: 12, 
    name: "Rondi Hidayat", 
    position: "Anggota Komite Sertifikasi", 
    type: "komite",
    email: "rondi.hidayat@lspsertifa.id",
    bio: "Mengawasi dan memastikan kualitas proses sertifikasi sesuai dengan standar nasional.",
    education: "S2 Teknik Informatika",
    experience: "10+ tahun pengalaman di bidang IT",
    expertise: ["Information Security", "Risk Management", "Compliance"],
    phone: "+62 821-0000-0026",
    linkedin: "linkedin.com/in/rondihidayat",
    imageUrl: "/lovable-uploads/placeholder.png"
  }
];

const TeamManagement = () => {
  const [members, setMembers] = useState(mockMembers);
  const [activeTab, setActiveTab] = useState("management");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<any>(null);
  const [newMember, setNewMember] = useState({
    name: "",
    position: "",
    type: "management",
    email: "",
    bio: "",
    education: "",
    experience: "",
    expertise: [] as string[],
    phone: "",
    linkedin: "",
    imageUrl: "/lovable-uploads/placeholder.png"
  });
  const { toast } = useToast();

  const filteredMembers = members.filter(member => 
    member.type === activeTab && 
    (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.position.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddOrEditMember = () => {
    if (editingMember) {
      setMembers(members.map(member => 
        member.id === editingMember.id ? { ...member, ...newMember } : member
      ));
      toast({
        title: "Anggota diperbarui",
        description: `Data "${newMember.name}" telah berhasil diperbarui.`,
      });
    } else {
      const id = Math.max(...members.map(member => member.id), 0) + 1;
      setMembers([...members, { id, ...newMember }]);
      toast({
        title: "Anggota ditambahkan",
        description: `"${newMember.name}" telah berhasil ditambahkan.`,
      });
    }
    
    handleCloseDialog();
  };

  const handleDeleteMember = (id: number) => {
    const memberToDelete = members.find(member => member.id === id);
    if (memberToDelete) {
      setMembers(members.filter(member => member.id !== id));
      toast({
        title: "Anggota dihapus",
        description: `"${memberToDelete.name}" telah dihapus dari daftar.`,
      });
    }
  };

  const handleEditMemberClick = (member: any) => {
    setEditingMember(member);
    setNewMember({
      name: member.name,
      position: member.position,
      type: member.type,
      email: member.email,
      bio: member.bio || "",
      education: member.education || "",
      experience: member.experience || "",
      expertise: member.expertise || [],
      phone: member.phone || "",
      linkedin: member.linkedin || "",
      imageUrl: member.imageUrl || "/lovable-uploads/placeholder.png"
    });
    setIsAddDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsAddDialogOpen(false);
    setEditingMember(null);
    setNewMember({ 
      name: "", 
      position: "", 
      type: activeTab, 
      email: "",
      bio: "",
      education: "",
      experience: "",
      expertise: [],
      phone: "",
      linkedin: "",
      imageUrl: "/lovable-uploads/placeholder.png" 
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Kelola Tim & Asesor</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Tambah Anggota
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingMember ? "Edit Anggota" : "Tambah Anggota Baru"}</DialogTitle>
              <DialogDescription>
                {editingMember 
                  ? "Edit informasi anggota tim di bawah ini." 
                  : "Masukkan informasi untuk anggota tim baru."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nama</Label>
                <Input 
                  id="name" 
                  value={newMember.name} 
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  placeholder="Masukkan nama lengkap" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Jabatan</Label>
                <Input 
                  id="position" 
                  value={newMember.position} 
                  onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
                  placeholder="Masukkan jabatan" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Kategori</Label>
                <select 
                  id="type" 
                  value={newMember.type}
                  onChange={(e) => setNewMember({ ...newMember, type: e.target.value })}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="management">Manajemen</option>
                  <option value="assessor">Asesor</option>
                  <option value="komite">Komite Sertifikasi</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={newMember.email} 
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                  placeholder="Masukkan email" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Biografi</Label>
                <Input
                  id="bio"
                  value={newMember.bio}
                  onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                  placeholder="Masukkan biografi singkat"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Pendidikan</Label>
                <Input
                  id="education"
                  value={newMember.education}
                  onChange={(e) => setNewMember({ ...newMember, education: e.target.value })}
                  placeholder="Masukkan pendidikan"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Pengalaman</Label>
                <Input
                  id="experience"
                  value={newMember.experience}
                  onChange={(e) => setNewMember({ ...newMember, experience: e.target.value })}
                  placeholder="Masukkan pengalaman"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telepon</Label>
                <Input
                  id="phone"
                  value={newMember.phone}
                  onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                  placeholder="Masukkan nomor telepon"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={newMember.linkedin}
                  onChange={(e) => setNewMember({ ...newMember, linkedin: e.target.value })}
                  placeholder="Masukkan LinkedIn (contoh: linkedin.com/in/username)"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageUrl">URL Foto</Label>
                <Input
                  id="imageUrl"
                  value={newMember.imageUrl}
                  onChange={(e) => setNewMember({ ...newMember, imageUrl: e.target.value })}
                  placeholder="Masukkan URL foto"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handleCloseDialog}>Batal</Button>
              <Button onClick={handleAddOrEditMember}>
                {editingMember ? "Perbarui" : "Tambah"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs onValueChange={setActiveTab} value={activeTab} className="w-full">
        <div className="mb-4">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="management">Manajemen</TabsTrigger>
            <TabsTrigger value="assessor">Asesor</TabsTrigger>
            <TabsTrigger value="komite">Komite</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="flex items-center space-x-2 mb-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Cari anggota..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>

        <TabsContent value="management" className="mt-0">
          <MemberTable 
            members={filteredMembers} 
            onEdit={handleEditMemberClick} 
            onDelete={handleDeleteMember} 
          />
        </TabsContent>
        <TabsContent value="assessor" className="mt-0">
          <MemberTable 
            members={filteredMembers} 
            onEdit={handleEditMemberClick} 
            onDelete={handleDeleteMember} 
          />
        </TabsContent>
        <TabsContent value="komite" className="mt-0">
          <MemberTable 
            members={filteredMembers} 
            onEdit={handleEditMemberClick} 
            onDelete={handleDeleteMember} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface MemberTableProps {
  members: any[];
  onEdit: (member: any) => void;
  onDelete: (id: number) => void;
}

const MemberTable = ({ members, onEdit, onDelete }: MemberTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Foto</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Jabatan</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="w-[150px]">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center h-24">
                Tidak ada data anggota yang ditemukan
              </TableCell>
            </TableRow>
          ) : (
            members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img 
                      src={member.imageUrl || "/placeholder.svg"} 
                      alt={member.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>{member.position}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="space-y-4">
                          <div className="flex justify-center">
                            <Avatar className="h-24 w-24">
                              <AvatarImage 
                                src={member.imageUrl || "/placeholder.svg"} 
                                alt={member.name} 
                                className="object-cover"
                              />
                              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="text-center">
                            <h3 className="text-lg font-bold">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">{member.position}</p>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="grid grid-cols-[100px_1fr] gap-1">
                              <span className="text-sm font-medium">Email:</span>
                              <span className="text-sm">{member.email}</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] gap-1">
                              <span className="text-sm font-medium">Pendidikan:</span>
                              <span className="text-sm">{member.education || "-"}</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] gap-1">
                              <span className="text-sm font-medium">Pengalaman:</span>
                              <span className="text-sm">{member.experience || "-"}</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] gap-1">
                              <span className="text-sm font-medium">Telepon:</span>
                              <span className="text-sm">{member.phone || "-"}</span>
                            </div>
                            <div className="grid grid-cols-[100px_1fr] gap-1">
                              <span className="text-sm font-medium">LinkedIn:</span>
                              <span className="text-sm">{member.linkedin || "-"}</span>
                            </div>
                            <div>
                              <span className="text-sm font-medium">Biografi:</span>
                              <p className="text-sm mt-1">{member.bio || "-"}</p>
                            </div>
                            {member.expertise && member.expertise.length > 0 && (
                              <div>
                                <span className="text-sm font-medium">Keahlian:</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {member.expertise.map((skill: string, index: number) => (
                                    <span 
                                      key={index} 
                                      className="text-xs px-2 py-0.5 bg-gray-100 rounded-full"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      onClick={() => onEdit(member)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="text-destructive hover:text-destructive"
                      onClick={() => onDelete(member.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeamManagement;
