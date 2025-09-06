// Trust Badges and Certifications

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, FileCheck, Globe, CheckCircle2 } from 'lucide-react';

const trustBadges = [
  {
    icon: Shield,
    title: 'Conflict-Free Certified',
    description: 'All gold sources verified conflict-free',
    color: 'from-malachite/20 to-malachite/5 border-malachite/30',
  },
  {
    icon: Award,
    title: 'ISO 9001 Certified',
    description: 'International quality management standards',
    color: 'from-gold/20 to-gold/5 border-gold/30',
  },
  {
    icon: FileCheck,
    title: 'Fully Licensed',
    description: 'DRC mining and export licenses',
    color: 'from-olive/20 to-olive/5 border-olive/30',
  },
  {
    icon: Globe,
    title: 'International Compliance',
    description: 'Meets global regulatory standards',
    color: 'from-starship/20 to-starship/5 border-starship/30',
  },
];

const certifications = [
  'DRC Mining License',
  'Export Authorization',
  'Environmental Compliance',
  'Quality Assurance Certificate',
  'Chain of Custody Documentation',
  'Kimberley Process Compliant',
];

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-cyprus to-forest-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gold mb-4">
            Trust & Certification
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our certifications and compliance standards ensure you receive authentic, 
            ethically-sourced gold products with complete documentation.
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustBadges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${badge.color} backdrop-blur-sm border rounded-xl p-6 hover:scale-105 transition-all duration-300 text-center h-full`}>
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gold mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-8"
        >
          <h3 className="text-xl font-semibold text-gold mb-6 text-center">
            Our Certifications & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-3 text-gray-300"
              >
                <CheckCircle2 className="w-5 h-5 text-malachite flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
