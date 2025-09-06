// Testimonials Section with rotating reviews

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-forest-800 to-forest-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by industry leaders worldwide, our commitment to quality and service excellence 
            has earned us lasting partnerships and outstanding testimonials.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-gradient-to-br from-gold/5 to-olive/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 md:p-12 mb-8">
            <div className="absolute top-6 left-6">
              <Quote className="w-8 h-8 text-gold/30" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Message */}
                <blockquote className="text-lg md:text-xl text-gray-200 text-center mb-8 leading-relaxed italic">
                  "{currentTestimonial.message}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-forest">
                      {currentTestimonial.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gold mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-olive font-medium">
                    {currentTestimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-forest-800/80 hover:bg-forest-700/80 text-gold hover:text-white transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-forest-800/80 hover:bg-forest-700/80 text-gold hover:text-white transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="flex justify-center space-x-3 overflow-x-auto pb-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToTestimonial(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`flex-shrink-0 w-12 h-12 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'ring-2 ring-gold bg-gradient-to-br from-gold to-olive scale-110'
                    : 'bg-forest-700 hover:bg-forest-600'
                }`}
              >
                <span className={`w-full h-full flex items-center justify-center text-sm font-medium rounded-full ${
                  index === currentIndex ? 'text-forest' : 'text-gold'
                }`}>
                  {testimonial.name.charAt(0)}
                </span>
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6 space-x-1">
            {TESTIMONIALS.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-gold/30 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
