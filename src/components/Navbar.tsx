
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-kickdark/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/65b7883c-20ee-445e-8dec-ed4c14f19cb6.png" 
            alt="Club Kick Boxing Santa Eulalia" 
            className="h-16"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-kickred transition"
          >
            {t('about')}
          </button>
          <button 
            onClick={() => scrollToSection('schedule')} 
            className="text-white hover:text-kickred transition"
          >
            {t('schedule')}
          </button>
          <button 
            onClick={() => scrollToSection('location')} 
            className="text-white hover:text-kickred transition"
          >
            {t('location')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-kickred transition"
          >
            {t('contact')}
          </button>
          <button
            onClick={() => scrollToSection('cta')}
            className="bg-kickred text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            {t('joinNow')}
          </button>
          <button 
            onClick={toggleLanguage}
            className="text-white text-sm font-bold border border-white rounded-full p-2 w-8 h-8 flex items-center justify-center hover:border-kickred hover:text-kickred transition"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="text-white text-sm font-bold border border-white rounded-full p-2 w-8 h-8 flex items-center justify-center hover:border-kickred hover:text-kickred transition"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-kickdark/95 px-4 py-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-kickred transition py-2"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => scrollToSection('schedule')} 
              className="text-white hover:text-kickred transition py-2"
            >
              {t('schedule')}
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="text-white hover:text-kickred transition py-2"
            >
              {t('location')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-kickred transition py-2"
            >
              {t('contact')}
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="bg-kickred text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              {t('joinNow')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
