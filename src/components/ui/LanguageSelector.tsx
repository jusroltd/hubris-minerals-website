// Language selector component

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';
import { SUPPORTED_LANGUAGES } from '../../data/languages';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useTranslation();

  const handleLanguageChange = (language: typeof SUPPORTED_LANGUAGES[0]) => {
    setLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-forest-800/50 hover:bg-forest-700/50 transition-colors duration-200 text-white hover:text-gold"
        aria-label="Select language"
      >
        <Globe size={18} />
        <span className="text-sm hidden md:inline">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-64 bg-forest-800 rounded-lg shadow-xl border border-gold/20 z-50 max-h-80 overflow-y-auto"
          >
            <div className="p-2">
              {SUPPORTED_LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left hover:bg-gold/10 transition-colors duration-150 ${
                    currentLanguage.code === language.code ? 'bg-gold/20 text-gold' : 'text-white'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{language.name}</div>
                    <div className="text-xs text-gray-400 truncate">{language.nativeName}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
