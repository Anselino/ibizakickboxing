
import { useLanguage } from '@/context/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section id="cta" className="py-20 bg-kickred text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          {t('ctaTitle')}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {t('ctaText')}
        </p>
        <a 
          href="tel:+34664432332" 
          className="inline-flex items-center bg-white text-kickred hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300"
        >
          {t('ctaButton')}
        </a>
      </div>
    </section>
  );
};

export default CTA;
