// Call to Action Section

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { CONTACT_INFO } from '../../data/company';

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-forest-900 via-cyprus to-forest-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-16 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gold">Ready to Start</span>
              <br />
              <span className="text-white">Your Gold Journey?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Partner with Hubris Minerals for premium gold products, exceptional service, 
              and complete transparency. Contact us today for competitive quotes and 
              personalized solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-gold/5 to-olive/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gold mb-4">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-olive/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email us at</div>
                      <div className="font-medium">{CONTACT_INFO.email}</div>
                    </div>
                  </a>
                  
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-olive/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Call us at</div>
                      <div className="font-medium">{CONTACT_INFO.phone}</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm mb-4">
                  We typically respond within 24 hours
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-malachite rounded-full animate-pulse" />
                    <span className="text-malachite text-sm font-medium">Available Now</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center lg:text-left space-y-4"
            >
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="w-full bg-gold text-forest hover:bg-gold/90 font-semibold group"
              >
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button
                as={Link}
                to="/products"
                variant="goldOutline"
                size="lg"
                className="w-full border-gold text-gold hover:bg-gold hover:text-forest"
              >
                Browse Products
              </Button>
              
              <Button
                as={Link}
                to="/about"
                variant="ghost"
                size="lg"
                className="w-full text-gold hover:bg-gold/10"
              >
                Learn More About Us
              </Button>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gold/20"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">500+</div>
              <div className="text-sm text-gray-400">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">99.99%</div>
              <div className="text-sm text-gray-400">Gold Purity</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
