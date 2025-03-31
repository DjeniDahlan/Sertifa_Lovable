
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface SchemaPaginationProps {
  visible: boolean;
}

const SchemaPagination = ({ visible }: SchemaPaginationProps) => {
  const { t } = useLanguage();
  
  if (!visible) return null;
  
  return (
    <div className="mt-10 flex justify-center">
      <nav aria-label="Pagination" className="inline-flex">
        <Button variant="outline" className="mr-2" disabled>
          {t("Sebelumnya", "Previous")}
        </Button>
        <Button className="mr-2 bg-sertifa-purple">1</Button>
        <Button variant="outline" className="mr-2">2</Button>
        <Button variant="outline" className="mr-2">3</Button>
        <Button variant="outline">{t("Selanjutnya", "Next")}</Button>
      </nav>
    </div>
  );
};

export default SchemaPagination;
