
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Star, Sparkles } from 'lucide-react';

const Locations = () => {
  const { t } = useLanguage();
  
  const locations = [
    {
      id: 'santaEulalia',
      name: t('locationSantaEulalia'),
      venue: t('santaEulaliaVenue'),
      address: t('santaEulaliaAddress'),
      mapLink: 'https://www.google.com/maps/place/Polideportivo+Municipal+Santa+Eulalia',
      badge: t('originalLocation'),
      status: t('classesFull'),
      isOriginal: true,
      isNew: false,
    },
    {
      id: 'ibiza',
      name: t('locationIbiza'),
      venue: t('ibizaVenue'),
      address: t('ibizaAddress'),
      mapLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x129946c3c43ed3a1:0xba759a1c2bae5d3?sa=X&ved=1t:8290&ictx=111',
      badge: t('newLocation'),
      status: t('classesAvailable'),
      isOriginal: false,
      isNew: true,
    },
  ];

  return (
    <section id="location" className="py-20 bg-kicklight">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-kickdark">
          {t('locationsTitle')}
        </h2>
        <p className="text-center text-kickdark/70 mb-12 max-w-2xl mx-auto">
          {t('locationsSubtitle')}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location) => (
            <div 
              key={location.id}
              className={`relative bg-white rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02] ${
                location.isNew ? 'ring-2 ring-kickred ring-offset-2' : ''
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                location.isOriginal 
                  ? 'bg-kickblue/10 text-kickblue' 
                  : 'bg-kickred text-white animate-pulse'
              }`}>
                {location.isOriginal ? <Star size={14} /> : <Sparkles size={14} />}
                {location.badge}
              </div>

              <div className="p-8">
                {/* Location Name */}
                <h3 className="text-2xl font-bold text-kickdark mb-2">
                  {location.name}
                </h3>
                
                {/* Venue */}
                <p className="text-lg font-medium text-kickdark/80 mb-4">
                  {location.venue}
                </p>
                
                {/* Address */}
                <div className="flex items-start mb-6">
                  <MapPin className="text-kickred mr-2 mt-1 flex-shrink-0" size={20} />
                  <p className="text-kickdark/70">{location.address}</p>
                </div>
                
                {/* Status */}
                <div className={`inline-flex items-center px-4 py-2 rounded-lg mb-6 ${
                  location.isNew 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-2 ${
                    location.isNew ? 'bg-green-500 animate-pulse' : 'bg-amber-500'
                  }`}></span>
                  {location.status}
                </div>
                
                {/* Map Button */}
                <div>
                  <a 
                    href={location.mapLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center font-semibold py-3 px-6 rounded-lg transition ${
                      location.isNew 
                        ? 'bg-kickred hover:bg-red-700 text-white' 
                        : 'bg-kickblue hover:bg-blue-700 text-white'
                    }`}
                  >
                    <MapPin size={18} className="mr-2" />
                    {t('viewMap')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
