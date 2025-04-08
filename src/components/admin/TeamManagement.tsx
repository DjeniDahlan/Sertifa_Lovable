
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

// Simplified mock data for team members
const mockMembers = [
  { 
    id: 1, 
    name: "Dr. Adi Suryadi", 
    position: "Ketua LSP", 
    type: "management",
    email: "adi.suryadi@lspsertifa.id"
  },
  { 
    id: 2, 
    name: "Yanuar Hadiyanto", 
    position: "Asesor", 
    type: "assessor",
    email: "yanuar.hadiyanto@lspsertifa.id"
  },
  { 
    id: 3, 
    name: "Taufan Ramadhan", 
    position: "Ketua Komite Sertifikasi", 
    type: "komite",
    email: "taufan.ramadhan@lspsertifa.id"
  }
  // ... more members would be here in a real app
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
      email: member.email
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
      email: "" 
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
            <TableHead>Nama</TableHead>
            <TableHead>Jabatan</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="w-[100px]">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center h-24">
                Tidak ada data anggota yang ditemukan
              </TableCell>
            </TableRow>
          ) : (
            members.map((member) => (
              <TableRow key={member.id}>
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
