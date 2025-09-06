// Services Overview Section

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Flame, FlaskConical, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/company';
import { Button } from '../ui/Button';

const iconMap = {
  Search,
  MapPin,
  Flame,
  FlaskConical,
  Plane,
};

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cyprus to-forest-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Comprehensive Gold Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From exploration to export, we provide end-to-end gold mining and processing services 
            that meet international standards and exceed client expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-forest-800/60 to-cyprus/60 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 group-hover:scale-105 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-olive rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-forest" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gold mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Key Features */}
                  <ul className="space-y-1 text-xs text-gray-400">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-gold rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            as={Link}
            to="/services"
            variant="goldOutline"
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-forest"
          >
            Explore All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
