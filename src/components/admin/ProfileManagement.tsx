
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
} from "@/components/ui/dialog";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Edit, Trash2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(2, { message: "Judul harus diisi" }),
  subtitle: z.string().min(2, { message: "Subjudul harus diisi" }),
  content: z.string().min(10, { message: "Konten minimal 10 karakter" }),
});

type ProfileSection = {
  id: string;
  title: string;
  subtitle: string;
  content: string;
};

const initialData: ProfileSection[] = [
  {
    id: "1",
    title: "Tentang LSP",
    subtitle: "Lembaga Sertifikasi Profesi",
    content: "LSP ini didirikan pada tahun 2015 dengan tujuan menyediakan sertifikasi profesi yang berkualitas di bidang teknologi informasi."
  },
  {
    id: "2",
    title: "Visi & Misi",
    subtitle: "Visi dan Misi Lembaga",
    content: "Visi: Menjadi lembaga sertifikasi profesi terkemuka di Indonesia.\nMisi: Menyelenggarakan sertifikasi profesi yang profesional dan terpercaya."
  },
];

const ProfileManagement = () => {
  const [sections, setSections] = useState<ProfileSection[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<ProfileSection | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      content: "",
    },
  });

  const openAddDialog = () => {
    form.reset({
      title: "",
      subtitle: "",
      content: "",
    });
    setEditingSection(null);
    setIsDialogOpen(true);
  };

  const openEditDialog = (section: ProfileSection) => {
    form.reset({
      title: section.title,
      subtitle: section.subtitle,
      content: section.content,
    });
    setEditingSection(section);
    setIsDialogOpen(true);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (editingSection) {
      setSections(sections.map(section => 
        section.id === editingSection.id 
          ? { ...section, ...values } 
          : section
      ));
      toast({
        title: "Bagian profil berhasil diperbarui",
        description: `${values.title} telah diperbarui`,
      });
    } else {
      const newSection = {
        id: Date.now().toString(),
        ...values,
      };
      setSections([...sections, newSection]);
      toast({
        title: "Bagian profil baru ditambahkan",
        description: `${values.title} telah ditambahkan`,
      });
    }
    setIsDialogOpen(false);
  };

  const deleteSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
    toast({
      title: "Bagian profil dihapus",
      description: "Bagian profil telah dihapus dari sistem",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Manajemen Profil</h2>
          <p className="text-muted-foreground">
            Kelola konten halaman profil lembaga
          </p>
        </div>
        <Button onClick={openAddDialog}>
          <Plus className="mr-2 h-4 w-4" /> Tambah Bagian
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead>Subjudul</TableHead>
              <TableHead className="w-[150px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sections.map((section) => (
              <TableRow key={section.id}>
                <TableCell className="font-medium">{section.title}</TableCell>
                <TableCell>{section.subtitle}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => openEditDialog(section)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteSection(section.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>
              {editingSection ? "Edit Bagian Profil" : "Tambah Bagian Profil Baru"}
            </DialogTitle>
            <DialogDescription>
              {editingSection 
                ? "Ubah informasi bagian profil lembaga" 
                : "Tambahkan bagian profil baru untuk ditampilkan di halaman profil"}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan judul bagian" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subjudul</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan subjudul bagian" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konten</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Masukkan konten bagian" 
                        className="min-h-[200px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit">
                  {editingSection ? "Simpan Perubahan" : "Tambahkan"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileManagement;
