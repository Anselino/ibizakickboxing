
import { useLanguage } from '@/context/LanguageContext';
import { MapPin } from 'lucide-react';

const Location = () => {
  const { t } = useLanguage();
  
  return (
    <section id="location" className="py-20 bg-kicklight">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-kickdark">
          {t('locationTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="mb-6">
              <h3 className="font-bold text-2xl text-kickdark mb-2">{t('locationPlace')}</h3>
              <div className="flex items-start">
                <MapPin className="text-kickred mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-kickdark/80">{t('locationAddress')}</p>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x129946c3c43ed3a1:0xba759a1c2bae5d3?sa=X&ved=1t:8290&ictx=111" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-kickblue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              {t('viewMap')}
            </a>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/99150f5b-ca3b-4632-84f0-39f2e117138e.png" 
              alt="Training Facility" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
