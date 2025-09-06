// Gold Price Widget with TradingView integration

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock } from 'lucide-react';

declare global {
  interface Window {
    TradingView: any;
  }
}

export function GoldPriceWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": "TVC:GOLD",
      "width": "100%",
      "height": "220",
      "locale": "en",
      "dateRange": "12M",
      "colorTheme": "dark",
      "trendLineColor": "rgba(255, 215, 0, 1)",
      "underLineColor": "rgba(255, 215, 0, 0.3)",
      "underLineBottomColor": "rgba(255, 215, 0, 0)",
      "isTransparent": true,
      "autosize": true,
      "largeChartUrl": ""
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Get current time for live indicator
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-forest-900 to-cyprus">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gold mb-3">
            Live Gold Prices
          </h2>
          <p className="text-gray-300">
            Stay updated with real-time gold market prices and trends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Market Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-gold/5 to-olive/5 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gold font-medium">Market Status</span>
                <div className="flex items-center text-malachite text-sm">
                  <div className="w-2 h-2 bg-malachite rounded-full mr-1 animate-pulse" />
                  Live
                </div>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                {currentTime.toLocaleTimeString()}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold/5 to-olive/5 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gold font-medium">Today's Trend</span>
                <TrendingUp className="w-5 h-5 text-malachite" />
              </div>
              <p className="text-gray-300 text-sm">
                Gold prices showing positive momentum with strong investor interest
              </p>
            </div>
          </motion.div>

          {/* TradingView Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl overflow-hidden"
          >
            <div className="tradingview-widget-container" ref={containerRef}>
              <div className="tradingview-widget-container__widget"></div>
              <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/symbols/TVC-GOLD/" rel="noopener" target="_blank">
                  <span className="blue-text">Gold Prices</span>
                </a> by TradingView
              </div>
            </div>
          </motion.div>

          {/* Market Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-gold/5 to-olive/5 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
              <h4 className="text-gold font-medium mb-2">Why Gold?</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2" />
                  Hedge against inflation
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2" />
                  Store of value
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2" />
                  Portfolio diversification
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2" />
                  Global acceptance
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gold/5 to-olive/5 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
              <h4 className="text-gold font-medium mb-2">Our Advantage</h4>
              <p className="text-gray-300 text-sm">
                Direct sourcing from DRC mines ensures competitive pricing 
                and authentic quality certification.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
