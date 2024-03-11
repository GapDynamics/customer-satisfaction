// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import { translation } from './locales'; // Import your translation strings

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translations, setTranslations] = useState(translation);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
