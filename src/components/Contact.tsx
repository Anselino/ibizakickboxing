
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-kickdark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {t('contactTitle')}
        </h2>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-kickdark/40 rounded-lg p-6 text-center flex flex-col items-center hover:bg-kickdark/60 transition">
            <Mail className="text-kickred mb-4" size={32} />
            <h3 className="font-bold text-xl mb-2">{t('emailLabel')}</h3>
            <a 
              href="mailto:clubkickboxingsantaeulalia@gmail.com" 
              className="text-white/80 hover:text-white hover:underline transition"
            >
              clubkickboxingsantaeulalia@gmail.com
            </a>
          </div>
          
          <div className="bg-kickdark/40 rounded-lg p-6 text-center flex flex-col items-center hover:bg-kickdark/60 transition">
            <Phone className="text-kickred mb-4" size={32} />
            <h3 className="font-bold text-xl mb-2">{t('phoneLabel')}</h3>
            <a 
              href="tel:+34670311200" 
              className="text-white/80 hover:text-white hover:underline transition"
            >
              +34 670 31 12 00
            </a>
            <a 
              href="tel:+34664432332" 
              className="text-white/80 hover:text-white hover:underline transition mt-1"
            >
              +34 664 43 23 32
            </a>
          </div>
          
          <div className="bg-kickdark/40 rounded-lg p-6 text-center flex flex-col items-center hover:bg-kickdark/60 transition">
            <Instagram className="text-kickred mb-4" size={32} />
            <h3 className="font-bold text-xl mb-2">{t('socialLabel')}</h3>
            <p className="text-white/80 mb-2">{t('followUs')}</p>
            <a 
              href="https://www.instagram.com/kbsantaeulalia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:underline transition"
            >
              @kbsantaeulalia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
