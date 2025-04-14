
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, Clock, Users, Euro } from 'lucide-react';

const Schedule = () => {
  const { t } = useLanguage();
  
  return (
    <section id="schedule" className="py-20 bg-kickblue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          {t('scheduleTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="/lovable-uploads/4a3be5b5-51a7-452e-ac36-804a879855fa.png" 
              alt="Kickboxing Training" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="mb-6 flex items-center">
              <Calendar className="text-kickred mr-4" size={28} />
              <div>
                <h3 className="font-bold text-xl text-kickdark">{t('scheduleDay')}</h3>
              </div>
            </div>
            
            <div className="mb-6 flex items-center">
              <Clock className="text-kickred mr-4" size={28} />
              <div>
                <h3 className="font-bold text-xl text-kickdark">{t('scheduleTime')}</h3>
              </div>
            </div>
            
            <div className="mb-6 flex items-center">
              <Users className="text-kickred mr-4" size={28} />
              <div>
                <h3 className="font-bold text-xl text-kickdark">{t('scheduleAge')}</h3>
              </div>
            </div>
            
            <div className="mb-6 flex items-center">
              <Euro className="text-kickred mr-4" size={28} />
              <div>
                <h3 className="font-bold text-xl text-kickdark">{t('schedulePrice')}</h3>
                <p className="text-kickdark/70">{t('includingFree')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
