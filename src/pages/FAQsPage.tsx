// FAQs Page - Frequently Asked Questions

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircle, Mail } from 'lucide-react';
import { FAQ_DATA } from '../data/company';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useSEO, createOrganizationSchema } from '../hooks/useSEO';

function FAQsPage() {
  // SEO Configuration
  useSEO({
    title: 'FAQs - Gold Mining Questions Answered | Hubris Minerals DRC',
    description: 'Get answers to frequently asked questions about DRC gold mining, product specifications, ordering process, shipping, certification, and pricing. Expert answers from Hubris Minerals.',
    keywords: 'DRC gold FAQs, Congo gold questions, gold mining FAQ, gold product questions, gold certification questions, gold shipping questions, wholesale gold FAQ, African gold mining questions, gold purity questions, conflict-free gold FAQ',
    ogTitle: 'Gold Mining FAQs - Expert Answers from DRC | Hubris Minerals',
    ogDescription: 'Find answers to common questions about DRC gold mining, products, certification, and processes from leading gold experts.',
    ogImage: 'https://ek2osvoeps68.space.minimax.io/images/expert-consultation.jpg',
    ogUrl: 'https://ek2osvoeps68.space.minimax.io/faqs',
    twitterTitle: 'Gold Mining FAQs - Expert Answers from DRC',
    twitterDescription: 'Common questions answered about gold mining, certification, and products from Democratic Republic of Congo.',
    twitterImage: 'https://ek2osvoeps68.space.minimax.io/images/expert-consultation.jpg',
    canonical: 'https://ek2osvoeps68.space.minimax.io/faqs',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_DATA.flatMap(section => 
        section.questions.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      ),
      "about": {
        "@type": "Organization",
        "name": "Hubris Minerals",
        "description": "Gold mining company specializing in ethical sourcing from Democratic Republic of Congo"
      },
      "provider": createOrganizationSchema()
    }
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (questionId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(questionId)) {
      newOpenItems.delete(questionId);
    } else {
      newOpenItems.add(questionId);
    }
    setOpenItems(newOpenItems);
  };

  const categories = ['all', ...FAQ_DATA.map(section => section.category.toLowerCase())];

  const filteredFAQs = FAQ_DATA.filter(section => {
    if (selectedCategory !== 'all' && section.category.toLowerCase() !== selectedCategory) {
      return false;
    }
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return section.questions.some(q => 
        q.question.toLowerCase().includes(searchLower) ||
        q.answer.toLowerCase().includes(searchLower)
      );
    }
    return true;
  }).map(section => ({
    ...section,
    questions: section.questions.filter(q => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return q.question.toLowerCase().includes(searchLower) ||
             q.answer.toLowerCase().includes(searchLower);
    })
  })).filter(section => section.questions.length > 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-forest-900 to-cyprus">
      {/* Hero Section */}
      <header className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our gold products, services, and processes. 
              If you can't find what you're looking for, don't hesitate to contact us.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-forest-800 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold/40"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                      selectedCategory === category
                        ? 'bg-gold text-forest'
                        : 'bg-forest-800 text-gold hover:bg-forest-700'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* FAQ Content */}
      <section className="pb-16" aria-label="Frequently asked questions">
        <div className="container mx-auto px-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg mb-4">No FAQs found matching your search criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="goldOutline"
                size="sm"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQs.map((section, sectionIndex) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-gold/10 to-olive/10 px-6 py-4 border-b border-gold/20">
                    <h2 className="text-xl font-bold text-gold">{section.category}</h2>
                  </div>

                  <div className="divide-y divide-gold/10">
                    {section.questions.map((faq, faqIndex) => {
                      const questionId = `${section.category}-${faqIndex}`;
                      const isOpen = openItems.has(questionId);

                      return (
                        <div key={faqIndex}>
                          <button
                            onClick={() => toggleItem(questionId)}
                            className="w-full px-6 py-4 text-left hover:bg-gold/5 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors pr-4">
                                {faq.question}
                              </h3>
                              <ChevronDown
                                className={`w-5 h-5 text-gold transition-transform duration-200 flex-shrink-0 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-4">
                                  <p className="text-gray-300 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-cyprus to-forest-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experts is here to help. Contact us directly for personalized assistance 
              with your gold sourcing needs or any specific questions about our products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="bg-gold text-forest hover:bg-gold/90 font-semibold"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
              <Button
                as="a"
                href="mailto:info@hubrisminerals.com?subject=Question from FAQ Page"
                variant="goldOutline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-forest"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Ask a Question
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default FAQsPage;
