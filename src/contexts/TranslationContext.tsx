// Translation context and provider

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Language, TranslationContextType } from '../types';

// Default language (English)
const DEFAULT_LANGUAGE: Language = {
  code: 'en',
  name: 'English',
  nativeName: 'English',
  flag: '🇺🇸'
};

// LibreTranslate API configuration
const LIBRE_TRANSLATE_API = 'https://libretranslate.com';

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [isTranslating, setIsTranslating] = useState(false);
  const [cachedTranslations] = useState(new Map<string, Map<string, string>>());

  const translate = useCallback(async (text: string): Promise<string> => {
    // Return original text if it's English or empty
    if (currentLanguage.code === 'en' || !text.trim()) {
      return text;
    }

    // Check cache first
    const langCache = cachedTranslations.get(currentLanguage.code);
    if (langCache && langCache.has(text)) {
      return langCache.get(text)!;
    }

    try {
      setIsTranslating(true);
      
      const response = await fetch(`${LIBRE_TRANSLATE_API}/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source: 'en',
          target: currentLanguage.code,
          format: 'text',
        }),
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      const translatedText = data.translatedText || text;

      // Cache the translation
      if (!cachedTranslations.has(currentLanguage.code)) {
        cachedTranslations.set(currentLanguage.code, new Map());
      }
      cachedTranslations.get(currentLanguage.code)!.set(text, translatedText);

      return translatedText;
    } catch (error) {
      console.warn('Translation failed, returning original text:', error);
      return text;
    } finally {
      setIsTranslating(false);
    }
  }, [currentLanguage.code, cachedTranslations]);

  const setLanguage = useCallback((language: Language) => {
    setCurrentLanguage(language);
  }, []);

  const value: TranslationContextType = {
    currentLanguage,
    setLanguage,
    translate,
    isTranslating,
    cachedTranslations,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
