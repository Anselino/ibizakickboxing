
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "joinNow": "Join Now",
    "about": "About",
    "schedule": "Schedule",
    "location": "Location",
    "contact": "Contact",
    
    // Hero
    "heroTitle": "Train with the Best in Ibiza",
    "heroSubtitle": "Discover our martial arts school, where passion for kickboxing translates into a path of constant improvement",
    "freeClasses": "Try 2 Free Classes",
    
    // About
    "aboutTitle": "About Our Club",
    "aboutText": "Discover our martial arts school, where passion for kickboxing translates into a path of constant improvement. Here, we instill fundamental values such as respect, discipline, and personal control, preparing our students to compete with confidence in various championships. Since 2010, we have been training committed athletes who, in addition to reaching their maximum athletic performance, grow as individuals in a family-oriented and motivating environment.",
    
    // Schedule
    "scheduleTitle": "Class Schedule",
    "scheduleDay": "Monday, Wednesday, and Friday",
    "scheduleTime": "4:30 PM - 6:00 PM",
    "scheduleAge": "Ages 6 and up",
    "schedulePrice": "€45/month",
    "includingFree": "including 2 free trial classes with no commitment",
    
    // Location
    "locationTitle": "Find Us",
    "locationPlace": "Poliesportiu Sa Blanca Dona",
    "locationAddress": "Carrer Cas Raspallar, S 15, 5, 07800, 07800 Blanca Dona, Illes Balears",
    "viewMap": "View on Map",
    
    // Contact
    "contactTitle": "Contact Us",
    "emailLabel": "Email",
    "phoneLabel": "Phone",
    "socialLabel": "Social",
    "followUs": "Follow us",
    
    // CTA
    "ctaTitle": "Ready to Start?",
    "ctaText": "Join us and transform your life through kickboxing",
    "ctaButton": "Join Now",
  },
  es: {
    // Header
    "joinNow": "Únete Ahora",
    "about": "Nosotros",
    "schedule": "Horario",
    "location": "Ubicación",
    "contact": "Contacto",
    
    // Hero
    "heroTitle": "Entrena con los Mejores en Ibiza",
    "heroSubtitle": "Descubre nuestra escuela de artes marciales, donde la pasión por el kickboxing se traduce en un camino de superación constante",
    "freeClasses": "Prueba 2 Clases Gratis",
    
    // About
    "aboutTitle": "Sobre Nuestro Club",
    "aboutText": "Descubre nuestra escuela de artes marciales, donde la pasión por el kickboxing se traduce en un camino de superación constante. Aquí, inculcamos valores fundamentales como el respeto, la disciplina y el control personal, preparando a nuestros alumnos para competir con seguridad en varios campeonatos. Desde 2010 formamos deportistas comprometidos que, además de alcanzar su máximo rendimiento deportivo, crecen como personas en un ambiente familiar y motivador.",
    
    // Schedule
    "scheduleTitle": "Horario de Clases",
    "scheduleDay": "Lunes, Miércoles y Viernes",
    "scheduleTime": "16:30h - 18:00h",
    "scheduleAge": "A partir de 6 años",
    "schedulePrice": "45€/mes",
    "includingFree": "incluye 2 clases gratis para probar sin compromiso",
    
    // Location
    "locationTitle": "Encuéntranos",
    "locationPlace": "Poliesportiu Sa Blanca Dona",
    "locationAddress": "Carrer Cas Raspallar, S 15, 5, 07800, 07800 Blanca Dona, Illes Balears",
    "viewMap": "Ver en Mapa",
    
    // Contact
    "contactTitle": "Contáctanos",
    "emailLabel": "Email",
    "phoneLabel": "Teléfono",
    "socialLabel": "Social",
    "followUs": "Síguenos",
    
    // CTA
    "ctaTitle": "¿Listo para Empezar?",
    "ctaText": "Únete a nosotros y transforma tu vida a través del kickboxing",
    "ctaButton": "Únete Ahora",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
