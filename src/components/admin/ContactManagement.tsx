
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
  name: z.string().min(2, { message: "Nama harus diisi" }),
  email: z.string().email({ message: "Format email tidak valid" }),
  subject: z.string().min(2, { message: "Subjek harus diisi" }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter" }),
  status: z.string().min(2, { message: "Status harus diisi" }),
});

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  date: string;
};

const initialData: ContactMessage[] = [
  {
    id: "1",
    name: "Budi Santoso",
    email: "budi@example.com",
    subject: "Informasi Pendaftaran",
    message: "Saya ingin mengetahui prosedur pendaftaran untuk sertifikasi Junior Web Developer.",
    status: "Belum Dibalas",
    date: "2023-10-10",
  },
  {
    id: "2",
    name: "Siti Rahayu",
    email: "siti@example.com",
    subject: "Jadwal Ujian",
    message: "Mohon informasi jadwal ujian sertifikasi untuk bulan depan.",
    status: "Sudah Dibalas",
    date: "2023-10-05",
  },
];

const ContactManagement = () => {
  const [messages, setMessages] = useState<ContactMessage[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewingMessage, setViewingMessage] = useState<ContactMessage | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      status: "",
    },
  });

  const openViewDialog = (message: ContactMessage) => {
    form.reset({
      name: message.name,
      email: message.email,
      subject: message.subject,
      message: message.message,
      status: message.status,
    });
    setViewingMessage(message);
    setIsDialogOpen(true);
  };

  const updateStatus = (values: z.infer<typeof formSchema>) => {
    if (viewingMessage) {
      setMessages(messages.map(msg => 
        msg.id === viewingMessage.id 
          ? { ...msg, status: values.status } 
          : msg
      ));
      toast({
        title: "Status pesan diperbarui",
        description: `Status pesan dari ${values.name} telah diperbarui ke "${values.status}"`,
      });
    }
    setIsDialogOpen(false);
  };

  const deleteMessage = (id: string) => {
    setMessages(messages.filter(msg => msg.id !== id));
    toast({
      title: "Pesan dihapus",
      description: "Pesan kontak telah dihapus dari sistem",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Manajemen Kontak</h2>
        <p className="text-muted-foreground">
          Kelola pesan dari pengunjung website
        </p>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subjek</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[150px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell className="font-medium">{message.name}</TableCell>
                <TableCell>{message.email}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>{message.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs ${
                    message.status === "Sudah Dibalas" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {message.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => openViewDialog(message)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteMessage(message.id)}>
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
            <DialogTitle>Detail Pesan</DialogTitle>
            <DialogDescription>
              Lihat pesan dan perbarui status
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(updateStatus)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input readOnly {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input readOnly {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subjek</FormLabel>
                    <FormControl>
                      <Input readOnly {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pesan</FormLabel>
                    <FormControl>
                      <Textarea readOnly className="min-h-[150px]" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        {...field}
                      >
                        <option value="Belum Dibalas">Belum Dibalas</option>
                        <option value="Sudah Dibalas">Sudah Dibalas</option>
                        <option value="Dalam Proses">Dalam Proses</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit">
                  Perbarui Status
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactManagement;
