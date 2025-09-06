// Products Carousel Section

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { Button } from '../ui/Button';

export function ProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bars' | 'nuggets' | 'flakes'>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.category === selectedCategory);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView.desktop >= filteredProducts.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, filteredProducts.length - itemsPerView.desktop) : prev - 1
    );
  };

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'bars', label: 'Gold Bars' },
    { id: 'nuggets', label: 'Gold Nuggets' },
    { id: 'flakes', label: 'Gold Flakes' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-forest-900 to-forest-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            Premium Gold Products
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Discover our extensive range of high-quality gold products, 
            from investment-grade bars to collectible nuggets and commercial flakes.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id as any);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gold text-forest'
                    : 'bg-forest-800 text-gold hover:bg-forest-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-forest-800/80 hover:bg-forest-700/80 text-gold hover:text-white transition-all duration-200 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-forest-800/80 hover:bg-forest-700/80 text-gold hover:text-white transition-all duration-200 disabled:opacity-50"
            disabled={currentIndex + itemsPerView.desktop >= filteredProducts.length}
          >
            <ChevronRight size={24} />
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden mx-12">
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)`
              }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 group hover:scale-105">
                    {/* Product Image */}
                    <div className="aspect-square bg-gradient-to-br from-gold/5 to-olive/5 flex items-center justify-center p-8">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          product.category === 'bars' ? 'bg-gold/20 text-gold' :
                          product.category === 'nuggets' ? 'bg-olive/20 text-olive' :
                          'bg-malachite/20 text-malachite'
                        }`}>
                          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                        </span>
                        <div className="text-right text-sm text-gray-400">
                          <div>{product.weight}</div>
                          <div>{product.purity}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gold mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-olive font-semibold">
                          {product.price}
                        </span>
                        <Button
                          variant="goldOutline"
                          size="sm"
                          className="text-xs"
                        >
                          <ShoppingBag size={14} className="mr-1" />
                          Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerView.desktop) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / itemsPerView.desktop) === index
                    ? 'bg-gold w-8'
                    : 'bg-gold/30 hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            as={Link}
            to="/products"
            variant="primary"
            size="lg"
            className="bg-gold text-forest hover:bg-gold/90 font-semibold"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
