
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-kickdark via-kickdark/70 to-kickdark z-10" />
        <img 
          src="/lovable-uploads/19e12a1d-fc4a-4910-8656-7295e9eb70dd.png"
          alt="Kickboxing Training" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 pt-20 md:pt-0">
        <div className="flex flex-col items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
            {t('heroSubtitle')}
          </p>
          <a 
            href="#cta" 
            className="bg-kickred hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg animate-pulse-strong transition-all duration-300"
          >
            {t('freeClasses')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
