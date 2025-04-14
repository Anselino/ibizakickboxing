
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-kicklight">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-kickdark">
          {t('aboutTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-kickdark/80 leading-relaxed">
              {t('aboutText')}
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/ce86da72-2e5e-47ec-b2c2-beda83f4baff.png" 
                alt="Kickboxing Group" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-kickdark to-transparent opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
