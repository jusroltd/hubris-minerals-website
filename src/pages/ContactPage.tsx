// Contact Page - Contact form and information

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CONTACT_INFO } from '../data/company';
import { useSEO } from '../hooks/useSEO';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

function ContactPage() {
  // SEO Configuration
  useSEO({
    title: 'Contact Hubris Minerals - DRC Gold Suppliers | Get Your Quote Today',
    description: 'Contact Hubris Minerals for premium gold from DRC. Email: contact@hubrisminerals.info | Phone: +243 973091479. Get instant quotes for gold bars, nuggets & raw gold. Fast response guaranteed.',
    keywords: 'contact Hubris Minerals, DRC gold suppliers contact, Congo gold dealers phone, African gold sellers email, gold quote request, wholesale gold inquiry, DRC mining company contact, gold trading contact details, precious metals supplier contact',
    ogTitle: 'Contact Hubris Minerals - DRC Gold Suppliers',
    ogDescription: 'Get in touch with leading DRC gold suppliers. Fast quotes, expert consultation, and premium gold products.',
    ogImage: 'https://ek2osvoeps68.space.minimax.io/images/hero-gold-grains.png',
    ogUrl: 'https://ek2osvoeps68.space.minimax.io/contact',
    canonical: 'https://ek2osvoeps68.space.minimax.io/contact',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Hubris Minerals",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+243 973091479",
            "contactType": "sales",
            "email": "contact@hubrisminerals.info",
            "availableLanguage": "English"
          }
        ]
      }
    }
  });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = formData.subject || 'Contact Form Submission';
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      window.location.href = mailtoUrl;
      setSubmitStatus('success');
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
      description: 'Send us an email for detailed inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phone}`,
      description: 'Speak directly with our team'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: CONTACT_INFO.whatsapp,
      link: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`,
      description: 'Quick messaging via WhatsApp'
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency only' },
  ];

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
              Contact Hubris Minerals - DRC Gold Suppliers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your gold sourcing journey? Get in touch with our experts 
              for personalized quotes, product information, or any questions you may have.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <section className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gold mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-malachite/20 border border-malachite/40 rounded-lg p-4 mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 text-malachite mr-3" />
                  <span className="text-malachite">Your message has been sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gold font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-forest-800 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold/40 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gold font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-forest-800 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold/40 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-gold font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-forest-800 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold/40 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gold font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-forest-800 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold/40 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gold font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-forest-800 border border-gold/20 rounded-lg text-white focus:outline-none focus:border-gold/40 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gold font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-forest-800 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                    placeholder="Please describe your inquiry, including product specifications, quantities, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-forest hover:bg-gold/90 font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </section>

          {/* Contact Information */}
          <aside className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-gold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <address
                      key={method.title}
                      className="not-italic"
                    >
                      <a
                        href={method.link}
                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gold/5 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-olive/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <IconComponent className="w-6 h-6 text-gold" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="text-gold font-semibold mb-1">{method.title}</h4>
                          <p className="text-white font-medium">{method.value}</p>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                      </a>
                    </address>
                  );
                })}
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-gold mr-3" />
                <h3 className="text-xl font-bold text-gold">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-olive font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gold/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-malachite">Note:</strong> We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-gold mr-3" />
                <h3 className="text-xl font-bold text-gold">Our Location</h3>
              </div>
              <p className="text-gray-300 mb-4">{CONTACT_INFO.address}</p>
              <p className="text-sm text-gray-400">
                Our mining operations and headquarters are strategically located in the DRC's 
                premier gold mining regions, ensuring direct access to the finest quality gold deposits.
              </p>
            </motion.div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
