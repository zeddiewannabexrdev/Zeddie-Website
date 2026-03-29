import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Helper function to get nested object property via dot notation string
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (let k of keys) {
      if (value[k] === undefined) {
        // Fallback to English if translation is missing
        let fallback = translations['en'];
        for (let fk of keys) {
           if (fallback && fallback[fk] !== undefined) {
             fallback = fallback[fk];
           } else {
             return key;
           }
        }
        return fallback;
      }
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
