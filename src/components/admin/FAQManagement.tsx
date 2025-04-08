
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

// Match the structure from the frontend FAQ page
const initialData: FAQItem[] = [
  // General Category
  {
    id: "1",
    question: "Apa itu LSP Sertifa?",
    answer: "LSP Sertifa adalah Lembaga Sertifikasi Profesi yang telah mendapatkan lisensi dari Badan Nasional Sertifikasi Profesi (BNSP) untuk menyelenggarakan sertifikasi kompetensi kerja di bidang teknologi informasi.",
    category: "Umum"
  },
  {
    id: "2",
    question: "Apakah sertifikasi dari LSP Sertifa diakui secara nasional?",
    answer: "Ya, sertifikasi yang dikeluarkan oleh LSP Sertifa telah diakui secara nasional karena merupakan lembaga yang telah mendapatkan lisensi resmi dari BNSP (Badan Nasional Sertifikasi Profesi).",
    category: "Umum"
  },
  {
    id: "3",
    question: "Berapa lama masa berlaku sertifikat yang diterbitkan?",
    answer: "Sertifikat kompetensi yang diterbitkan oleh LSP Sertifa berlaku selama 3 tahun. Setelah masa berlaku habis, pemegang sertifikat dapat melakukan re-sertifikasi untuk memperbarui sertifikatnya.",
    category: "Umum"
  },
  {
    id: "4",
    question: "Bagaimana cara memeriksa keaslian sertifikat?",
    answer: "Keaslian sertifikat dapat diperiksa melalui website resmi LSP Sertifa dengan memasukkan nomor registrasi sertifikat pada halaman verifikasi sertifikat. Anda juga dapat menghubungi kantor LSP Sertifa untuk konfirmasi.",
    category: "Umum"
  },
  
  // Registration Category
  {
    id: "5",
    question: "Bagaimana cara mendaftar sertifikasi di LSP Sertifa?",
    answer: "Pendaftaran dapat dilakukan secara online melalui website resmi LSP Sertifa atau langsung datang ke kantor LSP Sertifa. Untuk pendaftaran online, Anda perlu mengisi formulir pendaftaran dan mengunggah dokumen yang diperlukan.",
    category: "Pendaftaran"
  },
  {
    id: "6",
    question: "Dokumen apa saja yang perlu disiapkan untuk pendaftaran?",
    answer: "Dokumen yang perlu disiapkan antara lain: KTP, ijazah pendidikan terakhir, CV, pas foto terbaru, bukti pengalaman kerja (jika diperlukan sesuai skema), dan dokumen pendukung lainnya sesuai persyaratan skema sertifikasi.",
    category: "Pendaftaran"
  },
  {
    id: "7",
    question: "Berapa biaya untuk mengikuti sertifikasi?",
    answer: "Biaya sertifikasi bervariasi tergantung pada skema sertifikasi yang dipilih. Informasi lengkap mengenai biaya dapat dilihat pada halaman detail skema sertifikasi di website resmi LSP Sertifa.",
    category: "Pendaftaran"
  },
  {
    id: "8",
    question: "Apakah ada program beasiswa atau diskon untuk sertifikasi?",
    answer: "LSP Sertifa menyediakan program beasiswa dan diskon khusus untuk mahasiswa, fresh graduate, dan kelompok tertentu. Informasi mengenai program ini diumumkan secara berkala melalui website dan media sosial resmi LSP Sertifa.",
    category: "Pendaftaran"
  },
  
  // Certification Category
  {
    id: "9",
    question: "Apa saja tahapan dalam proses sertifikasi?",
    answer: "Tahapan sertifikasi meliputi: pendaftaran, asesmen mandiri, verifikasi portofolio, uji kompetensi (tes tertulis, praktik, dan wawancara), dan penerbitan sertifikat bagi peserta yang dinyatakan kompeten.",
    category: "Sertifikasi"
  },
  {
    id: "10",
    question: "Berapa lama proses sertifikasi hingga mendapatkan sertifikat?",
    answer: "Proses sertifikasi dari pendaftaran hingga penerbitan sertifikat biasanya memakan waktu 4-6 minggu, tergantung jadwal asesmen dan kelengkapan dokumen peserta. Hasil uji kompetensi akan diumumkan 7-14 hari setelah asesmen.",
    category: "Sertifikasi"
  },
  {
    id: "11",
    question: "Apa yang terjadi jika saya gagal dalam uji kompetensi?",
    answer: "Jika dinyatakan belum kompeten, peserta dapat mengajukan banding atau mengikuti uji kompetensi ulang sesuai dengan prosedur yang berlaku. Biasanya, peserta diberi kesempatan untuk mengulang unit kompetensi yang belum tercapai.",
    category: "Sertifikasi"
  },
  {
    id: "12",
    question: "Apakah ada persiapan khusus sebelum mengikuti uji kompetensi?",
    answer: "LSP Sertifa menyediakan materi persiapan dan workshop bagi peserta sertifikasi. Kami menyarankan peserta untuk mempelajari materi yang diberikan dan mengikuti workshop persiapan jika tersedia.",
    category: "Sertifikasi"
  }
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
      // Ensure all required properties are included when updating
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
      // Ensure all required properties are included when adding
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
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        {...field}
                      >
                        <option value="" disabled>Pilih kategori</option>
                        <option value="Umum">Umum</option>
                        <option value="Pendaftaran">Pendaftaran</option>
                        <option value="Sertifikasi">Sertifikasi</option>
                      </select>
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
