
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  question: z.string().min(5, { message: "Pertanyaan minimal 5 karakter" }),
  answer: z.string().min(5, { message: "Jawaban minimal 5 karakter" }),
  category: z.string().min(2, { message: "Kategori harus diisi" }),
});

type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

const initialData: FAQItem[] = [
  {
    id: "1",
    question: "Apa itu sertifikasi kompetensi?",
    answer: "Sertifikasi kompetensi adalah proses pemberian sertifikat kompetensi yang dilakukan secara sistematis dan objektif melalui uji kompetensi yang mengacu pada standar kompetensi kerja.",
    category: "Umum",
  },
  {
    id: "2",
    question: "Berapa lama masa berlaku sertifikat kompetensi?",
    answer: "Sertifikat kompetensi yang dikeluarkan oleh LSP berlaku selama 3 tahun dan dapat diperpanjang melalui proses resertifikasi.",
    category: "Sertifikasi",
  },
];

const FAQManagement = () => {
  const [items, setItems] = useState<FAQItem[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<FAQItem | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      answer: "",
      category: "",
    },
  });

  const openAddDialog = () => {
    form.reset({
      question: "",
      answer: "",
      category: "",
    });
    setEditingItem(null);
    setIsDialogOpen(true);
  };

  const openEditDialog = (item: FAQItem) => {
    form.reset({
      question: item.question,
      answer: item.answer,
      category: item.category,
    });
    setEditingItem(item);
    setIsDialogOpen(true);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (editingItem) {
      // Fix: ensure all required properties are included when updating
      const updatedItem: FAQItem = {
        ...editingItem,
        question: values.question,
        answer: values.answer,
        category: values.category
      };
      
      setItems(items.map(item => 
        item.id === editingItem.id ? updatedItem : item
      ));
      
      toast({
        title: "FAQ berhasil diperbarui",
        description: "Pertanyaan dan jawaban telah diperbarui",
      });
    } else {
      // Fix: ensure all required properties are included when adding
      const newItem: FAQItem = {
        id: Date.now().toString(),
        question: values.question,
        answer: values.answer,
        category: values.category
      };
      
      setItems([...items, newItem]);
      
      toast({
        title: "FAQ baru ditambahkan",
        description: "Pertanyaan dan jawaban baru telah ditambahkan",
      });
    }
    setIsDialogOpen(false);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    toast({
      title: "FAQ dihapus",
      description: "FAQ telah dihapus dari sistem",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Manajemen FAQ</h2>
          <p className="text-muted-foreground">
            Kelola daftar pertanyaan yang sering diajukan
          </p>
        </div>
        <Button onClick={openAddDialog}>
          <Plus className="mr-2 h-4 w-4" /> Tambah FAQ
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pertanyaan</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead className="w-[150px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.question}</TableCell>
                <TableCell>{item.category}</TableCell>
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
              {editingItem ? "Edit FAQ" : "Tambah FAQ Baru"}
            </DialogTitle>
            <DialogDescription>
              {editingItem 
                ? "Ubah pertanyaan dan jawaban" 
                : "Tambahkan pertanyaan yang sering diajukan dan jawabannya"}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pertanyaan</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan pertanyaan" {...field} />
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
                      <Input placeholder="Masukkan kategori FAQ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jawaban</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Masukkan jawaban" 
                        className="min-h-[150px]"
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

export default FAQManagement;
