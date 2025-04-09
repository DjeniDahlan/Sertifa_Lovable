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
import { Edit, Plus, Search, Trash2, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { certificationSchemes, CertificationScheme } from "@/data/certificationSchemes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getSchemeImage } from "@/utils/schemeImageMapping";

// Define interface for the admin view of schemes
interface AdminSchemeView {
  id: number;
  name: string;
  code: string;
  level: string;
}

// Transformed data from certification schemes
const transformSchemesToAdmin = (): AdminSchemeView[] => {
  return certificationSchemes.map(scheme => ({
    id: scheme.id,
    name: scheme.title,
    code: scheme.code || `SERTIFA-${scheme.id}`,
    level: scheme.level || "KKNI Level II"
  }));
};

const SchemesManagement = () => {
  const [schemes, setSchemes] = useState<AdminSchemeView[]>(transformSchemesToAdmin());
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingScheme, setEditingScheme] = useState<AdminSchemeView | null>(null);
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
      setSchemes(schemes.map(scheme => 
        scheme.id === editingScheme.id ? { ...scheme, ...newScheme } : scheme
      ));
      toast({
        title: "Skema diperbarui",
        description: `Skema "${newScheme.name}" telah berhasil diperbarui.`,
      });
    } else {
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

  const handleEditSchemeClick = (scheme: AdminSchemeView) => {
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

  const findOriginalScheme = (id: number): CertificationScheme | undefined => {
    return certificationSchemes.find(scheme => scheme.id === id);
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
              <TableHead className="w-[120px]">Aksi</TableHead>
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
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="ghost"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="p-0 w-80" side="left">
                                <div className="overflow-hidden rounded-md">
                                  {(() => {
                                    const originalScheme = findOriginalScheme(scheme.id);
                                    return originalScheme ? (
                                      <>
                                        <img 
                                          src={getSchemeImage(scheme.id)} 
                                          alt={scheme.name}
                                          className="w-full h-44 object-cover"
                                          onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "/placeholder.svg";
                                          }}
                                        />
                                        <div className="p-4 bg-white">
                                          <h4 className="font-semibold mb-1">{scheme.name}</h4>
                                          <div className="flex items-center mb-2 gap-2">
                                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">{scheme.code}</span>
                                            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">{scheme.level}</span>
                                          </div>
                                          <p className="text-sm text-gray-600">{originalScheme.description}</p>
                                        </div>
                                      </>
                                    ) : (
                                      <div className="p-4 bg-white">
                                        <p>Detail tidak tersedia</p>
                                      </div>
                                    )
                                  })()}
                                </div>
                              </PopoverContent>
                            </Popover>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Lihat Preview</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
