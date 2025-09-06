// Hero Section with animated carousel

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

// Hero images data
const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero-gold-grains.png',
    title: 'Premium Gold Grains',
    subtitle: 'Directly sourced from DRC mines',
    description: 'Experience the finest quality gold with exceptional purity and authenticity.',
  },
  {
    id: 2,
    image: '/images/hero-gold-bars.png',
    title: 'Certified Gold Bars',
    subtitle: 'International standard compliance',
    description: 'Premium gold bars meeting the highest international quality standards.',
  },
  {
    id: 3,
    image: '/images/hero-certificate.png',
    title: 'Certificate of Origin',
    subtitle: 'Fully documented and verified',
    description: 'Complete traceability and certification for every gold product.',
  },
  {
    id: 4,
    image: '/images/hero-refinery.png',
    title: 'Advanced Refinery',
    subtitle: 'State-of-the-art processing',
    description: 'Modern refining facilities ensuring maximum purity and quality.',
  },
  {
    id: 5,
    image: '/images/hero-gold-lot.png',
    title: 'Bulk Gold Sales',
    subtitle: 'Wholesale quantities available',
    description: 'Large quantity orders for commercial and investment purposes.',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-[100vh] bg-gradient-to-br from-forest-900 via-forest-800 to-cyprus overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content Side */}
          <motion.div 
            className="text-center lg:text-left z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gold">Premium Gold</span>
              <br />
              <span className="text-white">Mining & Export</span>
              <br />
              <span className="text-olive text-2xl md:text-3xl lg:text-4xl">from DRC</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ethical sourcing, exceptional quality, and international compliance. 
              Your trusted partner for premium gold from the Democratic Republic of Congo.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                className="bg-gold text-forest hover:bg-gold/90 font-semibold"
              >
                Get Quote Now
              </Button>
              <Button
                as={Link}
                to="/products"
                variant="goldOutline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-forest"
              >
                View Products
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Carousel Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Carousel */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gold/10 to-olive/10 backdrop-blur-sm border border-gold/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6">
                    <img
                      src={HERO_SLIDES[currentSlide].image}
                      alt={`${HERO_SLIDES[currentSlide].title} - Premium gold products from DRC mines by Hubris Minerals`}
                      className="max-h-48 md:max-h-64 w-auto mx-auto object-contain drop-shadow-2xl"
                      loading="eager"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gold mb-2">
                    {HERO_SLIDES[currentSlide].title}
                  </h2>
                  <h3 className="text-olive font-medium mb-3">
                    {HERO_SLIDES[currentSlide].subtitle}
                  </h3>
                  <p className="text-gray-300 text-sm max-w-xs">
                    {HERO_SLIDES[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-forest-800/80 hover:bg-forest-700/80 text-gold hover:text-white transition-all duration-200"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-forest-800/80 hover:bg-forest-700/80 text-gold hover:text-white transition-all duration-200"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-gold scale-125'
                      : 'bg-gold/30 hover:bg-gold/50'
                  }`}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isAutoPlaying ? 'bg-gold text-forest' : 'bg-forest-800 text-gold'
                }`}
                title={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                <Play size={16} className={isAutoPlaying ? 'opacity-100' : 'opacity-50'} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gold rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
