
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-kickdark py-6 text-white/70">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="/logo.png" 
          alt="Club Kick Boxing Santa Eulalia" 
          className="h-12 mx-auto mb-4"
        />
        <p>&copy; {currentYear} Club Kick Boxing Santa Eulalia</p>
      </div>
    </footer>
  );
};

export default Footer;
