// Header component with navigation and language selector

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';
import { SUPPORTED_LANGUAGES } from '../../data/languages';
import { NAV_ITEMS } from '../../data/company';
import { LanguageSelector } from '../ui/LanguageSelector';
import { Button } from '../ui/Button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { translate } = useTranslation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-forest-900/95 backdrop-blur-lg border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold to-olive rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-forest font-bold text-lg md:text-xl">HM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-gold">Hubris Minerals</h1>
              <p className="text-xs text-gold/70">Premium Gold from DRC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  isActiveRoute(item.href) ? 'text-gold' : 'text-white'
                }`}
              >
                {item.label}
                {isActiveRoute(item.href) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA and Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="sm"
              className="bg-gold text-forest hover:bg-gold/90 font-semibold"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageSelector />
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-forest-800/95 backdrop-blur-lg border-t border-gold/20"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors duration-200 hover:text-gold ${
                      isActiveRoute(item.href) ? 'text-gold' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gold/20">
                  <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    size="md"
                    className="w-full bg-gold text-forest hover:bg-gold/90 font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
