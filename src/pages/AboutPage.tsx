// About Page - Company information and team

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Heart, Award, Globe, Handshake, Leaf } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { COMPANY_STATS } from '../data/company';
import { useSEO, createOrganizationSchema } from '../hooks/useSEO';

const companyValues = [
  {
    icon: Heart,
    title: 'Ethical Sourcing',
    description: 'We are committed to conflict-free gold sourcing and supporting local communities in the DRC.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Maintaining the highest standards of quality through rigorous testing and certification processes.',
  },
  {
    icon: Handshake,
    title: 'Trust & Transparency',
    description: 'Building lasting relationships through honest communication and complete transparency.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Implementing environmentally responsible mining practices that protect our natural resources.',
  },
];

const milestones = [
  { year: '2008', title: 'Company Founded', description: 'Established operations in the Democratic Republic of Congo' },
  { year: '2012', title: 'International Expansion', description: 'Began exporting to European and Asian markets' },
  { year: '2016', title: 'Certification Achieved', description: 'Obtained ISO 9001 and conflict-free certifications' },
  { year: '2020', title: 'Refinery Upgrade', description: 'Invested in state-of-the-art refining technology' },
  { year: '2023', title: '500+ Clients', description: 'Reached milestone of serving over 500 global clients' },
];

const leadership = [
  {
    name: 'Marcel Kabongo',
    position: 'Chief Executive Officer',
    experience: '20+ years in mining industry',
    background: 'Former mining engineer with extensive experience in African gold operations.',
  },
  {
    name: 'Sarah Mwamba',
    position: 'Chief Operations Officer', 
    experience: '15+ years in operations',
    background: 'Expert in mining operations and supply chain management across Central Africa.',
  },
  {
    name: 'Dr. Jean-Pierre Lumbu',
    position: 'Chief Geologist',
    experience: '25+ years in geology',
    background: 'Ph.D. in Geology with specialization in gold deposit analysis and exploration.',
  },
  {
    name: 'Christine Mukendi',
    position: 'International Sales Director',
    experience: '12+ years in global sales',
    background: 'Fluent in 6 languages with extensive network of international precious metals buyers.',
  },
];

function AboutPage() {
  // SEO Configuration
  useSEO({
    title: 'About Hubris Minerals - Leading Gold Mining Company from DRC | Our Story',
    description: 'Learn about Hubris Minerals: DRC\'s premier gold mining company since 2008. Our mission, values, leadership team, and commitment to ethical sourcing and quality excellence.',
    keywords: 'about Hubris Minerals, DRC gold mining company, Congo mining history, ethical gold mining DRC, mining company leadership, sustainable mining practices, conflict-free certification, gold mining expertise, African mining industry, mining company values',
    ogTitle: 'About Hubris Minerals - Leading Gold Mining Company from DRC',
    ogDescription: 'DRC\'s premier gold mining company since 2008. Learn about our mission, values, leadership team, and commitment to ethical sourcing.',
    ogImage: 'https://ek2osvoeps68.space.minimax.io/images/company-team.jpg',
    ogUrl: 'https://ek2osvoeps68.space.minimax.io/about',
    twitterTitle: 'About Hubris Minerals - Ethical Gold Mining in DRC',
    twitterDescription: 'Premier gold mining company from Democratic Republic of Congo. Ethical sourcing, quality excellence, and sustainable practices.',
    twitterImage: 'https://ek2osvoeps68.space.minimax.io/images/company-team.jpg',
    canonical: 'https://ek2osvoeps68.space.minimax.io/about',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        ...createOrganizationSchema(),
        "foundingDate": "2008",
        "foundingLocation": {
          "@type": "Place",
          "name": "Democratic Republic of Congo"
        },
        "numberOfEmployees": "500+",
        "award": [
          "ISO 9001 Certification",
          "Conflict-Free Gold Certification",
          "Environmental Responsibility Award"
        ],
        "knowsAbout": [
          "Gold Mining",
          "Geological Exploration",
          "Gold Refining",
          "Precious Metals Export",
          "Sustainable Mining Practices"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "ISO 9001 Quality Management"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "Conflict-Free Gold Certification"
          }
        ]
      },
      "about": {
        "@type": "Thing",
        "name": "Gold Mining in Democratic Republic of Congo",
        "description": "Ethical and sustainable gold mining practices in Central Africa"
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
              About Hubris Minerals
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the gold mining industry in the Democratic Republic of Congo with 
              ethical practices, exceptional quality, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="py-16" aria-label="Company mission and vision">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-gold mr-4" />
                <h2 className="text-2xl font-bold text-gold">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the premier source of ethically-mined, high-quality gold from the Democratic Republic of Congo, 
                while supporting local communities and maintaining the highest standards of environmental responsibility 
                and business integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-gold mr-4" />
                <h2 className="text-2xl font-bold text-gold">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To transform the African gold mining industry by setting new standards for ethical sourcing, 
                quality excellence, and sustainable practices, while becoming the most trusted gold supplier globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gradient-to-r from-cyprus to-forest-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gold text-center mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-forest" />
                  </div>
                  <h3 className="text-lg font-semibold text-gold mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gold text-center mb-12"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 transform md:-translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 md:w-1/2">
                  <div className={`bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="text-gold font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-white font-semibold text-lg mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full transform md:-translate-x-1/2 -translate-y-2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gradient-to-r from-forest-800 to-cyprus">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gold text-center mb-12"
          >
            Leadership Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gold/5 to-olive/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-forest" />
                </div>
                <h3 className="text-lg font-semibold text-gold mb-1">{leader.name}</h3>
                <p className="text-olive font-medium mb-2">{leader.position}</p>
                <p className="text-malachite text-sm mb-3">{leader.experience}</p>
                <p className="text-gray-300 text-sm">{leader.background}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Partner With Us
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Hubris Minerals for their gold sourcing needs. 
              Experience the difference of working with industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="bg-gold text-forest hover:bg-gold/90 font-semibold"
              >
                Contact Us
              </Button>
              <Button
                as={Link}
                to="/services"
                variant="goldOutline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-forest"
              >
                Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
