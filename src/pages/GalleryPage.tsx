
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface GalleryItem {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  category: "certification" | "event" | "workshop";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Sertifikasi Data Analyst Batch 10",
    date: "15 Mei 2023",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "certification"
  },
  {
    id: 2,
    title: "Seminar Transformasi Digital",
    date: "22 April 2023",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "event"
  },
  {
    id: 3,
    title: "Workshop Persiapan Sertifikasi IT Service Manager",
    date: "10 Maret 2023",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "workshop"
  },
  {
    id: 4,
    title: "Uji Kompetensi Machine Learning Engineer",
    date: "5 Februari 2023",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "certification"
  },
  {
    id: 5,
    title: "MoU Signing dengan Industri IT",
    date: "20 Januari 2023",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "event"
  },
  {
    id: 6,
    title: "Workshop Cybersecurity Awareness",
    date: "15 Desember 2022",
    imageUrl: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "workshop"
  },
  {
    id: 7,
    title: "Sertifikasi IoT Operator Batch 5",
    date: "28 November 2022",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "certification"
  },
  {
    id: 8,
    title: "IT Conference 2022",
    date: "10 Oktober 2022",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "event"
  },
  {
    id: 9,
    title: "Workshop Agile Project Management",
    date: "25 September 2022",
    imageUrl: "https://images.unsplash.com/photo-1574631818614-c9fb8d148e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "workshop"
  }
];

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterGallery = (category: string) => {
    if (category === "all") return galleryItems;
    return galleryItems.filter(item => item.category === category);
  };

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-r from-sertifa-purple to-sertifa-darkpurple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Galeri</h1>
          <p className="text-lg">Dokumentasi kegiatan sertifikasi, event, dan workshop LSP Sertifa</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-4">
            <TabsTrigger value="all" className="text-xs md:text-sm">Semua</TabsTrigger>
            <TabsTrigger value="certification" className="text-xs md:text-sm">Sertifikasi</TabsTrigger>
            <TabsTrigger value="event" className="text-xs md:text-sm">Event</TabsTrigger>
            <TabsTrigger value="workshop" className="text-xs md:text-sm">Workshop</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterGallery("all").map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certification">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterGallery("certification").map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="event">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterGallery("event").map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="workshop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterGallery("workshop").map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </>
  );
};

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard = ({ item }: GalleryCardProps) => {
  return (
    <Card className="border-none shadow-md overflow-hidden group">
      <div className="aspect-video overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{item.date}</span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
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
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryPage;
