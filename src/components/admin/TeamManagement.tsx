
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
import { Label } from "@/components/ui/label";
import { Edit, Plus, Search, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// More comprehensive mock data for team members, matching frontend structure
const mockMembers = [
  { 
    id: 1, 
    name: "Dr. Adi Suryadi", 
    position: "Ketua LSP", 
    type: "management",
    email: "adi.suryadi@lspsertifa.id",
    bio: "Memiliki pengalaman lebih dari 15 tahun di bidang sertifikasi profesi IT.",
    imageUrl: "/lovable-uploads/5a069629-da3a-4bd4-8da2-8806dda8fb89.png"
  },
  { 
    id: 2, 
    name: "Yanuar Hadiyanto", 
    position: "Asesor Senior", 
    type: "assessor",
    email: "yanuar.hadiyanto@lspsertifa.id",
    bio: "Tersertifikasi sebagai asesor kompetensi nasional dengan spesialisasi di bidang pengembangan web dan mobile.",
    imageUrl: "/lovable-uploads/1adebbc2-f264-459d-b8c7-d7c4013e30d9.png"
  },
  { 
    id: 3, 
    name: "Taufan Ramadhan", 
    position: "Ketua Komite Sertifikasi", 
    type: "komite",
    email: "taufan.ramadhan@lspsertifa.id",
    bio: "Mengawasi dan memastikan kualitas proses sertifikasi sesuai dengan standar nasional.",
    imageUrl: "/lovable-uploads/8a49d07f-1ab4-40cb-8497-6fb9d96f421a.png"
  },
  { 
    id: 4, 
    name: "Rini Widyastuti", 
    position: "Koordinator Asesor", 
    type: "assessor",
    email: "rini.widyastuti@lspsertifa.id", 
    bio: "Spesialis di bidang database management dan cloud computing.",
    imageUrl: "/lovable-uploads/3ee1618e-da2a-4db2-9e04-df2760a94ba4.png"
  },
  { 
    id: 5, 
    name: "Budi Santoso", 
    position: "Sekretaris", 
    type: "management",
    email: "budi.santoso@lspsertifa.id",
    bio: "Mengelola administrasi dan dokumentasi sertifikasi.",
    imageUrl: "/lovable-uploads/3db2bf2d-c336-4acb-961b-85fc47a7617d.png"
  },
  { 
    id: 6, 
    name: "Rahma Anindita", 
    position: "Anggota Komite Sertifikasi", 
    type: "komite",
    email: "rahma.anindita@lspsertifa.id",
    bio: "Mengkaji dan mengembangkan standar kompetensi di bidang data science.",
    imageUrl: "/lovable-uploads/8863a0ca-c1e3-4102-a04a-f8bf84ca6787.png"
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
      // Update existing member
      setMembers(members.map(member => 
        member.id === editingMember.id ? { ...member, ...newMember } : member
      ));
      toast({
        title: "Anggota diperbarui",
        description: `Data "${newMember.name}" telah berhasil diperbarui.`,
      });
    } else {
      // Add new member
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
            <TableHead className="w-[100px]">Aksi</TableHead>
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
