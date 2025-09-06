// Stats Section with animated counters

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { COMPANY_STATS } from '../../data/company';

// Custom hook for animated counter
function useCounter(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
}

// Extract numeric value from stat value string
function extractNumber(value: string): number {
  const match = value.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

// Format display value
function formatDisplayValue(originalValue: string, animatedNumber: number): string {
  if (originalValue.includes('+')) {
    return animatedNumber.toLocaleString() + '+';
  }
  if (originalValue.includes('%')) {
    return animatedNumber.toFixed(2) + '%';
  }
  if (originalValue.includes('T')) {
    return animatedNumber.toFixed(1) + 'T+';
  }
  return animatedNumber.toLocaleString();
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-r from-forest-800 to-cyprus">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in our achievements and the trust placed in us by clients worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {COMPANY_STATS.map((stat, index) => {
            const numericValue = extractNumber(stat.value);
            const animatedCount = useCounter(numericValue, 2500, isInView);
            const displayValue = formatDisplayValue(stat.value, animatedCount);

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gold/10 to-olive/10 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 group-hover:scale-105">
                  <motion.div
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-2"
                    animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  >
                    {displayValue}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-forest">✓</span>
            </div>
            <h4 className="text-lg font-semibold text-gold mb-2">Certified Quality</h4>
            <p className="text-gray-300 text-sm">International compliance and quality assurance</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-forest">🌍</span>
            </div>
            <h4 className="text-lg font-semibold text-gold mb-2">Global Reach</h4>
            <p className="text-gray-300 text-sm">Serving clients across all continents</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-olive rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-forest">🏆</span>
            </div>
            <h4 className="text-lg font-semibold text-gold mb-2">Industry Leader</h4>
            <p className="text-gray-300 text-sm">Setting standards for ethical gold mining</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
