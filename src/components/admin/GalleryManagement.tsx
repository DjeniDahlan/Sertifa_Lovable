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
import { Edit, Trash2, Plus, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

const formSchema = z.object({
  title: z.string().min(2, { message: "Judul harus diisi" }),
  imageUrl: z.string().min(5, { message: "URL gambar harus diisi" }),
  eventDate: z.string().min(2, { message: "Tanggal acara harus diisi" }),
  description: z.string().min(10, { message: "Deskripsi minimal 10 karakter" }),
  category: z.enum(["certification", "event", "workshop"], { 
    message: "Kategori harus dipilih" 
  }),
});

type GalleryItem = {
  id: string;
  title: string;
  imageUrl: string;
  eventDate: string;
  description: string;
  category: "certification" | "event" | "workshop";
};

const initialData: GalleryItem[] = [
  {
    id: "1",
    title: "Sertifikasi Data Analyst Batch 10",
    eventDate: "2023-05-15",
    imageUrl: "/lovable-uploads/8437655c-eaf6-440c-9b87-f8c4d81dee86.png",
    category: "certification",
    description: "Pelaksanaan sertifikasi untuk skema Data Analyst batch ke-10",
  },
  {
    id: "2",
    title: "Seminar Transformasi Digital",
    eventDate: "2023-04-22",
    imageUrl: "/lovable-uploads/5237ea6b-60c9-4c9f-9d97-f89b25bd7bf4.png",
    category: "event",
    description: "Seminar tentang transformasi digital untuk industri di era 4.0",
  },
  {
    id: "3",
    title: "Workshop Persiapan Sertifikasi IT Service Manager",
    eventDate: "2023-03-10",
    imageUrl: "/lovable-uploads/f4760378-7481-4df1-b7eb-aa02eb9f6039.png",
    category: "workshop",
    description: "Workshop persiapan untuk menghadapi sertifikasi IT Service Manager",
  },
  {
    id: "4",
    title: "Uji Kompetensi Machine Learning Engineer",
    eventDate: "2023-02-05",
    imageUrl: "/lovable-uploads/ae245acb-ef35-4248-aa1a-93acd8128f7a.png",
    category: "certification",
    description: "Uji kompetensi untuk skema Machine Learning Engineer",
  },
  {
    id: "5",
    title: "MoU Signing dengan Industri IT",
    eventDate: "2023-01-20",
    imageUrl: "/lovable-uploads/3ddcbda0-2e06-4c6e-a73a-32d36dc26aa2.png",
    category: "event",
    description: "Penandatanganan MoU dengan berbagai industri IT untuk program kerjasama",
  },
  {
    id: "6",
    title: "Workshop Cybersecurity Awareness",
    eventDate: "2022-12-15",
    imageUrl: "/lovable-uploads/412b768d-9b28-448d-a8b7-c416179ae543.png",
    category: "workshop",
    description: "Workshop tentang pentingnya cybersecurity awareness dalam era digital",
  },
  {
    id: "7",
    title: "Sertifikasi IoT Operator Batch 5",
    eventDate: "2022-11-28",
    imageUrl: "/lovable-uploads/9f7375cb-80d4-4599-a6ce-64ad4fa96f48.png",
    category: "certification",
    description: "Sertifikasi untuk skema IoT Operator batch kelima",
  },
  {
    id: "8",
    title: "IT Conference 2022",
    eventDate: "2022-10-10",
    imageUrl: "/lovable-uploads/1ba3c4f7-159e-4f9c-92b5-99f286cdafab.png",
    category: "event",
    description: "Konferensi tahunan membahas perkembangan terbaru di industri IT",
  },
  {
    id: "9",
    title: "Workshop Agile Project Management",
    eventDate: "2022-09-25",
    imageUrl: "/lovable-uploads/14f7ef81-cf89-4e18-bac3-4f7856dba368.png",
    category: "workshop",
    description: "Workshop metodologi Agile untuk manajemen proyek IT",
  }
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
      category: "certification",
    },
  });

  const openAddDialog = () => {
    form.reset({
      title: "",
      imageUrl: "",
      eventDate: new Date().toISOString().split('T')[0],
      description: "",
      category: "certification",
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
      category: item.category,
    });
    setEditingItem(item);
    setIsDialogOpen(true);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (editingItem) {
      const updatedItem: GalleryItem = {
        ...editingItem,
        title: values.title,
        imageUrl: values.imageUrl,
        eventDate: values.eventDate,
        description: values.description,
        category: values.category
      };
      
      setItems(items.map(item => 
        item.id === editingItem.id ? updatedItem : item
      ));
      
      toast({
        title: "Item galeri berhasil diperbarui",
        description: `${values.title} telah diperbarui`,
      });
    } else {
      const newItem: GalleryItem = {
        id: Date.now().toString(),
        title: values.title,
        imageUrl: values.imageUrl,
        eventDate: values.eventDate,
        description: values.description,
        category: values.category
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
              <TableHead>Kategori</TableHead>
              <TableHead>Tanggal Acara</TableHead>
              <TableHead>Gambar</TableHead>
              <TableHead className="w-[150px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    item.category === "certification" 
                      ? "bg-blue-100 text-blue-800" 
                      : item.category === "event"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-green-100 text-green-800"
                  }`}>
                    {item.category === "certification" 
                      ? "Sertifikasi" 
                      : item.category === "event" 
                        ? "Event" 
                        : "Workshop"}
                  </span>
                </TableCell>
                <TableCell>{new Date(item.eventDate).toLocaleDateString('id-ID')}</TableCell>
                <TableCell>
                  <div className="h-10 w-16 bg-gray-100 rounded">
                    <img 
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0" side="bottom">
                              <div className="overflow-hidden rounded-md">
                                <img 
                                  src={item.imageUrl} 
                                  alt={item.title} 
                                  className="w-full max-h-[300px] object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "/placeholder.svg";
                                  }}
                                />
                                <div className="p-3 bg-white">
                                  <h4 className="font-semibold text-sm">{item.title}</h4>
                                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Lihat Preview</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
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
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kategori</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        {...field}
                      >
                        <option value="certification">Sertifikasi</option>
                        <option value="event">Event</option>
                        <option value="workshop">Workshop</option>
                      </select>
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
