// Footer component

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../../data/company';
import { useTranslation } from '../../contexts/TranslationContext';

export function Footer() {
  const { translate } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-olive rounded-lg flex items-center justify-center">
                <span className="text-forest font-bold text-xl">HM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold">Hubris Minerals</h3>
                <p className="text-sm text-gold/70">Premium Gold from DRC</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading gold mining and export company from the Democratic Republic of Congo, 
              specializing in ethical sourcing, premium quality gold products, and sustainable mining practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} className="text-gold" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm hover:text-gold transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} className="text-gold" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm hover:text-gold transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-300">
                <MapPin size={16} className="text-gold mt-0.5" />
                <span className="text-sm">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Hubris Minerals. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
