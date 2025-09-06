// Homepage - Main landing page for Hubris Minerals

import React from 'react';
import { useSEO, createOrganizationSchema, createLocalBusinessSchema } from '../hooks/useSEO';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsSection } from '../components/sections/StatsSection';
import { ProductsCarousel } from '../components/sections/ProductsCarousel';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { GoldPriceWidget } from '../components/sections/GoldPriceWidget';
import { TrustBadges } from '../components/sections/TrustBadges';
import { CTASection } from '../components/sections/CTASection';

function HomePage() {
  // SEO Configuration
  useSEO({
    title: 'Premium Gold Mining & Export from DRC - Hubris Minerals',
    description: 'Leading gold mining company in Democratic Republic of Congo. Ethical sourcing, 99.99% purity gold bars, nuggets & raw gold. Certified conflict-free. Contact for wholesale quotes.',
    keywords: 'DRC gold suppliers, Congo gold dealers, African gold sellers, wholesale gold Congo, 24k gold DRC, raw gold Africa, gold miners Congo, gold bars DRC, artisanal gold Congo, gold exporters Africa, precious metals DRC, legitimate gold dealers, certified gold sellers, conflict-free gold, sustainable gold mining, gold certification services, international gold trade, gold market Africa',
    ogTitle: 'Premium Gold Mining & Export from DRC - Hubris Minerals',
    ogDescription: 'Leading gold mining company in Democratic Republic of Congo. Ethical sourcing, 99.99% purity gold bars, nuggets & raw gold. Certified conflict-free.',
    ogImage: 'https://ek2osvoeps68.space.minimax.io/images/hero-gold-grains.png',
    ogUrl: 'https://ek2osvoeps68.space.minimax.io/',
    twitterTitle: 'Premium Gold Mining & Export from DRC - Hubris Minerals',
    twitterDescription: 'Leading gold mining company in Democratic Republic of Congo. Ethical sourcing, 99.99% purity gold bars, nuggets & raw gold.',
    twitterImage: 'https://ek2osvoeps68.space.minimax.io/images/hero-gold-grains.png',
    canonical: 'https://ek2osvoeps68.space.minimax.io/',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createOrganizationSchema(),
        createLocalBusinessSchema(),
        {
          "@type": "WebSite",
          "@id": "https://ek2osvoeps68.space.minimax.io/#website",
          "url": "https://ek2osvoeps68.space.minimax.io/",
          "name": "Hubris Minerals",
          "description": "Premium Gold Mining & Export from Democratic Republic of Congo",
          "publisher": {
            "@id": "https://ek2osvoeps68.space.minimax.io/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://ek2osvoeps68.space.minimax.io/products?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ]
        }
      ]
    }
  });

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Carousel */}
      <section aria-label="Hero section with company introduction">
        <HeroSection />
      </section>
      
      {/* Company Statistics */}
      <section aria-label="Company achievements and statistics">
        <StatsSection />
      </section>
      
      {/* Gold Price Widget */}
      <section aria-label="Live gold market prices">
        <GoldPriceWidget />
      </section>
      
      {/* Featured Products Carousel */}
      <section aria-label="Featured gold products">
        <ProductsCarousel />
      </section>
      
      {/* Services Overview */}
      <section aria-label="Gold mining services overview">
        <ServicesOverview />
      </section>
      
      {/* Trust Badges and Certifications */}
      <section aria-label="Certifications and trust indicators">
        <TrustBadges />
      </section>
      
      {/* Customer Testimonials */}
      <section aria-label="Customer testimonials and reviews">
        <TestimonialsSection />
      </section>
      
      {/* Call to Action Section */}
      <section aria-label="Contact and partnership opportunities">
        <CTASection />
      </section>
    </main>
  );
}

export default HomePage;
