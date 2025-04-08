
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  imageUrl: z.string().min(5, { message: "URL gambar harus diisi" }),
  eventDate: z.string().min(2, { message: "Tanggal acara harus diisi" }),
  description: z.string().min(10, { message: "Deskripsi minimal 10 karakter" }),
});

type GalleryItem = {
  id: string;
  title: string;
  imageUrl: string;
  eventDate: string;
  description: string;
};

const initialData: GalleryItem[] = [
  {
    id: "1",
    title: "Pelantikan Asesor Baru",
    imageUrl: "/lovable-uploads/8437655c-eaf6-440c-9b87-f8c4d81dee86.png",
    eventDate: "2023-08-15",
    description: "Pelantikan asesor baru untuk skema sertifikasi Junior Web Developer",
  },
  {
    id: "2",
    title: "Seminar Kompetensi Nasional",
    imageUrl: "/lovable-uploads/5237ea6b-60c9-4c9f-9d97-f89b25bd7bf4.png",
    eventDate: "2023-07-20",
    description: "Seminar nasional tentang pentingnya sertifikasi kompetensi di era digital",
  },
];

const GalleryManagement = () => {
  const [items, setItems] = useState<GalleryItem[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      imageUrl: "",
      eventDate: "",
      description: "",
    },
  });

  const openAddDialog = () => {
    form.reset({
      title: "",
      imageUrl: "",
      eventDate: new Date().toISOString().split('T')[0],
      description: "",
    });
    setEditingItem(null);
    setIsDialogOpen(true);
  };

  const openEditDialog = (item: GalleryItem) => {
    form.reset({
      title: item.title,
      imageUrl: item.imageUrl,
      eventDate: item.eventDate,
      description: item.description,
    });
    setEditingItem(item);
    setIsDialogOpen(true);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (editingItem) {
      // Fix: ensure all required properties are included when updating
      const updatedItem: GalleryItem = {
        ...editingItem,
        title: values.title,
        imageUrl: values.imageUrl,
        eventDate: values.eventDate,
        description: values.description
      };
      
      setItems(items.map(item => 
        item.id === editingItem.id ? updatedItem : item
      ));
      
      toast({
        title: "Item galeri berhasil diperbarui",
        description: `${values.title} telah diperbarui`,
      });
    } else {
      // Fix: ensure all required properties are included when adding
      const newItem: GalleryItem = {
        id: Date.now().toString(),
        title: values.title,
        imageUrl: values.imageUrl,
        eventDate: values.eventDate,
        description: values.description
      };
      
      setItems([...items, newItem]);
      
      toast({
        title: "Item galeri baru ditambahkan",
        description: `${values.title} telah ditambahkan`,
      });
    }
    setIsDialogOpen(false);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    toast({
      title: "Item galeri dihapus",
      description: "Item galeri telah dihapus dari sistem",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Manajemen Galeri</h2>
          <p className="text-muted-foreground">
            Kelola konten galeri foto kegiatan
          </p>
        </div>
        <Button onClick={openAddDialog}>
          <Plus className="mr-2 h-4 w-4" /> Tambah Foto
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead>Tanggal Acara</TableHead>
              <TableHead>Gambar</TableHead>
              <TableHead className="w-[150px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.eventDate}</TableCell>
                <TableCell>
                  <div className="h-10 w-16 bg-gray-100 rounded">
                    <img 
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover rounded"
                    />
                  </div>
                </TableCell>
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
              {editingItem ? "Edit Item Galeri" : "Tambah Item Galeri Baru"}
            </DialogTitle>
            <DialogDescription>
              {editingItem 
                ? "Ubah detail item galeri" 
                : "Tambahkan item galeri baru"}
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
                      <Input placeholder="Masukkan judul foto" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Gambar</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan URL gambar" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tanggal Acara</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan deskripsi singkat" {...field} />
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

export default GalleryManagement;
