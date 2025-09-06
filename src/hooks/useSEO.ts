// SEO Hook for managing meta tags and structured data

import { useEffect } from 'react';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  structuredData?: any;
}

export function useSEO(seoData: SEOData) {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty?: boolean) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      
      if (tag) {
        tag.content = content;
      } else {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        tag.content = content;
        document.head.appendChild(tag);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', seoData.description);
    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
    updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
    updateMetaTag('og:type', 'website', true);
    if (seoData.ogImage) {
      updateMetaTag('og:image', seoData.ogImage, true);
    }
    if (seoData.ogUrl) {
      updateMetaTag('og:url', seoData.ogUrl, true);
    }
    updateMetaTag('og:site_name', 'Hubris Minerals', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoData.twitterTitle || seoData.title);
    updateMetaTag('twitter:description', seoData.twitterDescription || seoData.description);
    if (seoData.twitterImage) {
      updateMetaTag('twitter:image', seoData.twitterImage);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = seoData.canonical || window.location.href;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = seoData.canonical || window.location.href;
      document.head.appendChild(canonicalLink);
    }

    // Add structured data
    if (seoData.structuredData) {
      let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
      if (structuredDataScript) {
        structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
      } else {
        structuredDataScript = document.createElement('script') as HTMLScriptElement;
        structuredDataScript.type = 'application/ld+json';
        structuredDataScript.id = 'structured-data';
        structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
        document.head.appendChild(structuredDataScript);
      }
    }
  }, [seoData]);
}

// Predefined structured data schemas
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hubris Minerals",
  "description": "Premier gold mining and export company from the Democratic Republic of Congo, specializing in ethical sourcing and premium quality gold products.",
  "url": "https://ek2osvoeps68.space.minimax.io",
  "logo": "https://ek2osvoeps68.space.minimax.io/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+243 973091479",
    "contactType": "sales",
    "email": "contact@hubrisminerals.info"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CD",
    "addressRegion": "Democratic Republic of Congo"
  },
  "sameAs": [
    "https://www.facebook.com/hubrisminerals",
    "https://www.linkedin.com/company/hubrisminerals"
  ]
});

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hubris Minerals",
  "description": "Professional gold mining, refining, and export services in the Democratic Republic of Congo.",
  "url": "https://ek2osvoeps68.space.minimax.io",
  "telephone": "+243 973091479",
  "email": "contact@hubrisminerals.info",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CD",
    "addressRegion": "Democratic Republic of Congo"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-4.0383",
    "longitude": "21.7587"
  },
  "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Check, Invoice"
});

export const createProductSchema = (product: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": `https://ek2osvoeps68.space.minimax.io${product.image}`,
  "brand": {
    "@type": "Brand",
    "name": "Hubris Minerals"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Hubris Minerals"
  },
  "offers": {
    "@type": "Offer",
    "price": "Contact for Quote",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Hubris Minerals"
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Weight",
      "value": product.weight
    },
    {
      "@type": "PropertyValue",
      "name": "Purity",
      "value": product.purity
    },
    {
      "@type": "PropertyValue",
      "name": "Origin",
      "value": "Democratic Republic of Congo"
    }
  ]
});
