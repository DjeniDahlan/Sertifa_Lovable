
import { useLanguage } from "@/contexts/LanguageContext";

const SchemeCertificationProcess = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-8 text-sertifa-purple text-center">{t("Proses Sertifikasi", "Certification Process")}</h2>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm z-10">
            <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Pendaftaran</h3>
            <p className="text-sm text-gray-600">Daftar dan pilih skema sertifikasi</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm z-10">
            <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Asesmen Mandiri</h3>
            <p className="text-sm text-gray-600">Evaluasi diri terhadap unit kompetensi</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm z-10">
            <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Uji Kompetensi</h3>
            <p className="text-sm text-gray-600">Tes tertulis, praktik dan wawancara</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm z-10">
            <div className="w-16 h-16 bg-sertifa-purple rounded-full flex items-center justify-center text-white mb-4">
              <span className="text-xl font-bold">4</span>
            </div>
            <h3 className="font-semibold mb-2">Sertifikasi</h3>
            <p className="text-sm text-gray-600">Penerbitan sertifikat kompetensi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchemeCertificationProcess;
