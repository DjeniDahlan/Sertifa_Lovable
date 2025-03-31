
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

interface SchemaPaginationProps {
  visible: boolean;
  totalPages?: number;
}

const SchemaPagination = ({ visible, totalPages = 3 }: SchemaPaginationProps) => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  
  if (!visible) return null;
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <div className="mt-10 flex justify-center">
      <nav aria-label="Pagination" className="inline-flex">
        <Button 
          variant="outline" 
          className="mr-2" 
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          {t("Sebelumnya", "Previous")}
        </Button>
        
        {pageNumbers.map(number => (
          <Button 
            key={number}
            className={`mr-2 ${currentPage === number ? 'bg-sertifa-purple' : ''}`} 
            variant={currentPage === number ? 'default' : 'outline'}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </Button>
        ))}
        
        <Button 
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          {t("Selanjutnya", "Next")}
        </Button>
      </nav>
    </div>
  );
};

export default SchemaPagination;
