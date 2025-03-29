
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "Facebook",
    url: "https://facebook.com/lspsertifa",
    icon: "fab fa-facebook-f"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/lspsertifa",
    icon: "fab fa-twitter"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/lspsertifa",
    icon: "fab fa-instagram"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/lspsertifa",
    icon: "fab fa-linkedin-in"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/c/lspsertifa",
    icon: "fab fa-youtube"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/628123456789",
    icon: "fab fa-whatsapp"
  }
];

const SocialMediaLinks = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-12 h-12 bg-sertifa-purple/10 rounded-full flex items-center justify-center text-sertifa-purple cursor-pointer hover:bg-sertifa-purple/20 transition-colors">
          <MessageSquare size={24} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4">
        <h3 className="text-lg font-semibold mb-3">Media Sosial</h3>
        <div className="grid grid-cols-2 gap-3">
          {socialMediaLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-sertifa-purple transition-colors"
            >
              <span className="inline-block w-6 text-center mr-2">
                <i className={link.icon}></i>
              </span>
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="w-full text-sertifa-purple border-sertifa-purple hover:bg-sertifa-purple hover:text-white"
          >
            <a 
              href="https://wa.me/628123456789" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Chat dengan Kami
            </a>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SocialMediaLinks;
