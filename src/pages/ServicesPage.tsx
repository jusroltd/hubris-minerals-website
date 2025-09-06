// Services Page - Detailed services overview

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Flame, FlaskConical, Plane, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/company';
import { Button } from '../components/ui/Button';
import { useSEO, createOrganizationSchema } from '../hooks/useSEO';

const iconMap = {
  Search,
  MapPin,
  Flame,
  FlaskConical,
  Plane,
};

function ServicesPage() {
  // SEO Configuration
  useSEO({
    title: 'Gold Mining Services DRC - Exploration, Processing & Export | Hubris Minerals',
    description: 'Professional gold mining services in Democratic Republic of Congo: geological exploration, extraction, refining, processing, and export. ISO certified, conflict-free, sustainable practices.',
    keywords: 'gold mining services DRC, Congo gold exploration, gold extraction services, gold refining Congo, gold processing DRC, mining consultation Africa, geological surveys Congo, gold export services, artisanal gold support, mining equipment DRC, gold testing services, precious metals consulting',
    ogTitle: 'Gold Mining Services DRC - Exploration, Processing & Export',
    ogDescription: 'Professional gold mining services: exploration, extraction, refining, processing, and export from Democratic Republic of Congo. ISO certified and conflict-free.',
    ogImage: 'https://ek2osvoeps68.space.minimax.io/images/services-mining-equipment.jpg',
    ogUrl: 'https://ek2osvoeps68.space.minimax.io/services',
    twitterTitle: 'Gold Mining Services DRC - Professional & Sustainable',
    twitterDescription: 'Comprehensive gold mining services from exploration to export. ISO certified operations in Democratic Republic of Congo.',
    twitterImage: 'https://ek2osvoeps68.space.minimax.io/images/services-mining-equipment.jpg',
    canonical: 'https://ek2osvoeps68.space.minimax.io/services',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Gold Mining Services",
      "description": "Professional gold mining services including exploration, extraction, refining, processing, and export from Democratic Republic of Congo.",
      "provider": createOrganizationSchema(),
      "serviceType": "Mining Services",
      "areaServed": {
        "@type": "Country",
        "name": "Democratic Republic of Congo"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Gold Mining Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Geological Exploration",
              "description": "Professional geological surveys and gold deposit identification"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gold Extraction",
              "description": "Safe and efficient gold mining and extraction operations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gold Refining",
              "description": "Advanced refining processes to achieve 99.99% purity gold"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Export Services",
              "description": "International export and logistics for gold products worldwide"
            }
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
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From exploration to export, we provide comprehensive gold mining and processing services 
              that meet international standards and exceed client expectations.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Services Details */}
      <section className="py-16" aria-label="Detailed mining services">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col lg:grid-cols-2'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-olive rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-forest" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gold">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-8">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-malachite flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      as={Link}
                      to="/contact"
                      variant="goldOutline"
                      size="lg"
                      className="border-gold text-gold hover:bg-gold hover:text-forest group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                    </div>
                  
                    {/* Image/Visual */}
                    <div className={isEven ? '' : 'lg:order-1'}>
                      <figure className="bg-gradient-to-br from-gold/10 to-olive/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 h-64 flex items-center justify-center">
                        <IconComponent className="w-24 h-24 text-gold" aria-hidden="true" />
                      </figure>
                    </div>
                  </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyprus to-forest-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your gold mining and processing needs. 
              Our team of experts is ready to provide customized solutions.
            </p>
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="lg"
              className="bg-gold text-forest hover:bg-gold/90 font-semibold"
            >
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
