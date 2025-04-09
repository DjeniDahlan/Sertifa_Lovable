
import React, { useState, useEffect } from "react";
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
import { Label } from "@/components/ui/label";
import { Edit, Plus, Search, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { certificationSchemes } from "@/data/certificationSchemes";

// Transformed data from certification schemes
const transformSchemesToAdmin = () => {
  return certificationSchemes.map(scheme => ({
    id: scheme.id,
    name: scheme.title,
    code: scheme.code || `SERTIFA-${scheme.id}`,
    level: scheme.level || "KKNI Level II"
  }));
};

const SchemesManagement = () => {
  const [schemes, setSchemes] = useState(transformSchemesToAdmin());
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingScheme, setEditingScheme] = useState<any>(null);
  const [newScheme, setNewScheme] = useState({
    name: "",
    code: "",
    level: ""
  });
  const { toast } = useToast();

  const filteredSchemes = schemes.filter(scheme => 
    scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scheme.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddOrEditScheme = () => {
    if (editingScheme) {
      // Update existing scheme
      setSchemes(schemes.map(scheme => 
        scheme.id === editingScheme.id ? { ...scheme, ...newScheme } : scheme
      ));
      toast({
        title: "Skema diperbarui",
        description: `Skema "${newScheme.name}" telah berhasil diperbarui.`,
      });
    } else {
      // Add new scheme
      const id = Math.max(...schemes.map(scheme => scheme.id), 0) + 1;
      setSchemes([...schemes, { id, ...newScheme }]);
      toast({
        title: "Skema ditambahkan",
        description: `Skema "${newScheme.name}" telah berhasil ditambahkan.`,
      });
    }
    
    handleCloseDialog();
  };

  const handleDeleteScheme = (id: number) => {
    const schemeToDelete = schemes.find(scheme => scheme.id === id);
    if (schemeToDelete) {
      setSchemes(schemes.filter(scheme => scheme.id !== id));
      toast({
        title: "Skema dihapus",
        description: `Skema "${schemeToDelete.name}" telah dihapus.`,
      });
    }
  };

  const handleEditSchemeClick = (scheme: any) => {
    setEditingScheme(scheme);
    setNewScheme({
      name: scheme.name,
      code: scheme.code,
      level: scheme.level
    });
    setIsAddDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsAddDialogOpen(false);
    setEditingScheme(null);
    setNewScheme({ name: "", code: "", level: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Kelola Skema Sertifikasi</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Tambah Skema
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingScheme ? "Edit Skema" : "Tambah Skema Baru"}</DialogTitle>
              <DialogDescription>
                {editingScheme 
                  ? "Edit informasi skema sertifikasi di bawah ini." 
                  : "Masukkan informasi untuk skema sertifikasi baru."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Skema</Label>
                <Input 
                  id="name" 
                  value={newScheme.name} 
                  onChange={(e) => setNewScheme({ ...newScheme, name: e.target.value })}
                  placeholder="Masukkan nama skema" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="code">Kode Skema</Label>
                <Input 
                  id="code" 
                  value={newScheme.code} 
                  onChange={(e) => setNewScheme({ ...newScheme, code: e.target.value })}
                  placeholder="Contoh: J.620100.009.02" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <Input 
                  id="level" 
                  value={newScheme.level} 
                  onChange={(e) => setNewScheme({ ...newScheme, level: e.target.value })}
                  placeholder="Contoh: KKNI Level II" 
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handleCloseDialog}>Batal</Button>
              <Button onClick={handleAddOrEditScheme}>
                {editingScheme ? "Perbarui" : "Tambah"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Cari skema..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Skema</TableHead>
              <TableHead>Kode Skema</TableHead>
              <TableHead>Level</TableHead>
              <TableHead className="w-[100px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSchemes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center h-24">
                  Tidak ada data skema yang ditemukan
                </TableCell>
              </TableRow>
            ) : (
              filteredSchemes.map((scheme) => (
                <TableRow key={scheme.id}>
                  <TableCell className="font-medium">{scheme.name}</TableCell>
                  <TableCell>{scheme.code}</TableCell>
                  <TableCell>{scheme.level}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        onClick={() => handleEditSchemeClick(scheme)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDeleteScheme(scheme.id)}
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
    </div>
  );
};

export default SchemesManagement;
