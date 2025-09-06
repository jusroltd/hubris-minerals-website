// Minerals Page - Focus on gold minerals and technical specifications

import React from 'react';
import { motion } from 'framer-motion';
import { Atom, FlaskConical, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useSEO, createOrganizationSchema } from '../hooks/useSEO';

const mineralSpecs = [
  {
    name: 'Alluvial Gold',
    purity: '85-95%',
    characteristics: ['Natural nugget formation', 'Water-worn surfaces', 'High density', 'Irregular shapes'],
    source: 'River deposits and alluvial plains',
  },
  {
    name: 'Vein Gold',
    purity: '90-98%',
    characteristics: ['Crystalline structure', 'Quartz associations', 'High purity', 'Angular formations'],
    source: 'Hard rock mining operations',
  },
  {
    name: 'Refined Gold',
    purity: '99.99%',
    characteristics: ['Investment grade', 'Certified purity', 'Standardized forms', 'International compliance'],
    source: 'Advanced refining processes',
  },
];

const geologicalData = [
  { property: 'Density', value: '19.3 g/cm³', description: 'Specific gravity of pure gold' },
  { property: 'Melting Point', value: '1,064°C', description: 'Temperature for gold smelting' },
  { property: 'Chemical Symbol', value: 'Au', description: 'From Latin "aurum"' },
  { property: 'Atomic Number', value: '79', description: 'Position in periodic table' },
  { property: 'Crystal System', value: 'Cubic', description: 'Face-centered cubic structure' },
  { property: 'Hardness', value: '2.5-3 Mohs', description: 'Relatively soft precious metal' },
];

const assayMethods = [
  {
    method: 'Fire Assay',
    accuracy: '99.5%',
    description: 'Traditional method using high-temperature furnace to separate gold from other materials',
    applications: ['Ore samples', 'Concentrate testing', 'Final purity verification'],
  },
  {
    method: 'X-Ray Fluorescence (XRF)',
    accuracy: '98.8%',
    description: 'Non-destructive analysis using X-ray technology to determine elemental composition',
    applications: ['Quick testing', 'Field analysis', 'Quality control'],
  },
  {
    method: 'Atomic Absorption',
    accuracy: '99.2%',
    description: 'Spectroscopic method measuring light absorption by gold atoms in solution',
    applications: ['Solution analysis', 'Trace element detection', 'Research applications'],
  },
];

function MineralsPage() {
  // SEO Configuration
  useSEO({
    title: 'Gold Minerals Analysis & Properties DRC - Technical Specifications | Hubris Minerals',
    description: 'Comprehensive gold mineralogy from DRC: alluvial gold, vein gold, refined gold specifications. Advanced analysis methods: fire assay, XRF testing. Geological properties and purity standards.',
    keywords: 'DRC gold mineralogy, Congo gold properties, gold analysis methods, alluvial gold DRC, vein gold Congo, fire assay gold testing, XRF gold analysis, gold purity standards, geological gold properties, atomic gold analysis, gold density specifications, gold melting point',
    ogTitle: 'Gold Minerals Analysis & Properties from DRC',
    ogDescription: 'Complete gold mineralogy analysis: alluvial, vein & refined gold specifications. Advanced testing methods and geological properties from Democratic Republic of Congo.',
    ogImage: 'https://ek2osvoeps68.space.minimax.io/images/gold-analysis-lab.jpg',
    ogUrl: 'https://ek2osvoeps68.space.minimax.io/minerals',
    twitterTitle: 'Gold Minerals & Analysis - Technical Specifications DRC',
    twitterDescription: 'Advanced gold mineralogy analysis and testing methods from Democratic Republic of Congo. Scientific approach to gold quality.',
    twitterImage: 'https://ek2osvoeps68.space.minimax.io/images/gold-analysis-lab.jpg',
    canonical: 'https://ek2osvoeps68.space.minimax.io/minerals',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Gold Minerals Analysis & Properties",
      "description": "Comprehensive analysis of gold minerals and properties from Democratic Republic of Congo",
      "provider": createOrganizationSchema(),
      "mainEntity": {
        "@type": "Dataset",
        "name": "Gold Mineralogy Data DRC",
        "description": "Technical specifications and analysis methods for gold minerals from DRC",
        "creator": createOrganizationSchema(),
        "about": [
          {
            "@type": "Thing",
            "name": "Gold Mineralogy",
            "description": "Scientific study of gold mineral properties and characteristics"
          },
          {
            "@type": "Thing",
            "name": "Gold Analysis Methods",
            "description": "Advanced testing and assay methods for gold purity determination"
          },
          {
            "@type": "Thing",
            "name": "Geological Properties",
            "description": "Physical and chemical properties of gold minerals"
          }
        ],
        "variableMeasured": [
          {
            "@type": "PropertyValue",
            "name": "Gold Purity",
            "description": "Percentage purity of gold samples",
            "minValue": "85",
            "maxValue": "99.99",
            "unitText": "percent"
          },
          {
            "@type": "PropertyValue",
            "name": "Gold Density",
            "value": "19.3",
            "unitText": "g/cm³"
          },
          {
            "@type": "PropertyValue",
            "name": "Melting Point",
            "value": "1064",
            "unitText": "degrees Celsius"
          }
        ]
      }
    }
  });
  return (
    <main className="min-h-screen bg-gradient-to-br from-forest-900 to-cyprus">
      {/* Hero Section */}
      <header className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6">
              Gold Minerals & Analysis
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive understanding of gold mineralogy, geological properties, 
              and advanced analysis methods ensuring the highest quality standards.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Mineral Types */}
      <section className="py-16" aria-label="Types of gold minerals">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gold text-center mb-12"
          >
            Types of Gold Minerals
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mineralSpecs.map((mineral, index) => (
              <motion.div
                key={mineral.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mx-auto mb-4">
                    <Atom className="w-8 h-8 text-forest" />
                  </div>
                  <h3 className="text-xl font-semibold text-gold mb-2">{mineral.name}</h3>
                  <div className="text-olive font-bold text-lg">Purity: {mineral.purity}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {mineral.characteristics.map((char, charIndex) => (
                    <div key={charIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-malachite flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{char}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gold/20 pt-4">
                  <h4 className="text-gold font-medium mb-2">Source:</h4>
                  <p className="text-gray-300 text-sm">{mineral.source}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geological Properties */}
      <section className="py-16 bg-gradient-to-r from-cyprus to-forest-800" aria-label="Gold properties and characteristics">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gold text-center mb-12"
          >
            Gold Properties & Characteristics
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geologicalData.map((data, index) => (
              <motion.div
                key={data.property}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gold/5 to-olive/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-gold mb-2">{data.property}</h3>
                <div className="text-2xl font-bold text-white mb-2">{data.value}</div>
                <p className="text-gray-400 text-sm">{data.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assay Methods */}
      <section className="py-16" aria-label="Gold analysis and testing methods">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gold text-center mb-12"
          >
            Analysis & Testing Methods
          </motion.h2>

          <div className="space-y-8">
            {assayMethods.map((method, index) => (
              <motion.div
                key={method.method}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <FlaskConical className="w-8 h-8 text-gold mr-3" />
                      <h3 className="text-xl font-semibold text-gold">{method.method}</h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <Award className="w-5 h-5 text-malachite mr-2" />
                      <span className="text-olive font-semibold">Accuracy: {method.accuracy}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-300 mb-4">{method.description}</p>
                  </div>

                  <div>
                    <h4 className="text-gold font-medium mb-3">Applications:</h4>
                    <ul className="space-y-2">
                      {method.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-malachite mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-forest-900 to-cyprus">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Expert Mineral Analysis
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our advanced testing facilities and expert geologists provide comprehensive 
              mineral analysis and certification services for all gold products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/services"
                variant="primary"
                size="lg"
                className="bg-gold text-forest hover:bg-gold/90 font-semibold"
              >
                Our Services
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="goldOutline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-forest"
              >
                Request Analysis
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default MineralsPage;
