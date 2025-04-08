
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
  category: z.string().min(2, { message: "Kategori harus diisi" }),
  content: z.string().min(10, { message: "Konten minimal 10 karakter" }),
  publishDate: z.string().min(2, { message: "Tanggal publikasi harus diisi" }),
});

type InformationItem = {
  id: string;
  title: string;
  category: string;
  content: string;
  publishDate: string;
};

const initialData: InformationItem[] = [
  {
    id: "1",
    title: "Jadwal Ujian Kompetensi Bulan Ini",
    category: "Pengumuman",
    content: "Jadwal ujian kompetensi untuk bulan ini telah dirilis. Silakan cek di website resmi untuk informasi lebih lanjut.",
    publishDate: "2023-10-05",
  },
  {
    id: "2",
    title: "Kerjasama LSP dengan Industri",
    category: "Berita",
    content: "LSP telah menandatangani MoU dengan 10 perusahaan teknologi terkemuka untuk memperluas kesempatan kerja bagi pemegang sertifikasi.",
    publishDate: "2023-09-15",
  },
];

const InformationManagement = () => {
  const [items, setItems] = useState<InformationItem[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InformationItem | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      content: "",
      publishDate: "",
    },
  });

  const openAddDialog = () => {
    form.reset({
      title: "",
      category: "",
      content: "",
      publishDate: new Date().toISOString().split('T')[0],
    });
    setEditingItem(null);
    setIsDialogOpen(true);
  };

  const openEditDialog = (item: InformationItem) => {
    form.reset({
      title: item.title,
      category: item.category,
      content: item.content,
      publishDate: item.publishDate,
    });
    setEditingItem(item);
    setIsDialogOpen(true);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (editingItem) {
      setItems(items.map(item => 
        item.id === editingItem.id 
          ? { ...item, ...values } 
          : item
      ));
      toast({
        title: "Informasi berhasil diperbarui",
        description: `${values.title} telah diperbarui`,
      });
    } else {
      const newItem = {
        id: Date.now().toString(),
        ...values,
      };
      setItems([...items, newItem]);
      toast({
        title: "Informasi baru ditambahkan",
        description: `${values.title} telah ditambahkan`,
      });
    }
    setIsDialogOpen(false);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    toast({
      title: "Informasi dihapus",
      description: "Informasi telah dihapus dari sistem",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Manajemen Informasi</h2>
          <p className="text-muted-foreground">
            Kelola konten halaman informasi
          </p>
        </div>
        <Button onClick={openAddDialog}>
          <Plus className="mr-2 h-4 w-4" /> Tambah Informasi
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Tanggal Publikasi</TableHead>
              <TableHead className="w-[150px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.publishDate}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => openEditDialog(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteItem(item.id)}>
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
              {editingItem ? "Edit Informasi" : "Tambah Informasi Baru"}
            </DialogTitle>
            <DialogDescription>
              {editingItem 
                ? "Ubah detail informasi" 
                : "Tambahkan informasi baru untuk dipublikasikan"}
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
                      <Input placeholder="Masukkan judul informasi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kategori</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan kategori informasi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="publishDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tanggal Publikasi</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
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
                        placeholder="Masukkan konten informasi" 
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
                  {editingItem ? "Simpan Perubahan" : "Tambahkan"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InformationManagement;
