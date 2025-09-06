// Products Page - Complete product catalog

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, List, Filter, ShoppingBag, Search } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Button } from '../components/ui/Button';
import { CONTACT_INFO } from '../data/company';
import { useSEO, createOrganizationSchema, createProductSchema } from '../hooks/useSEO';

function ProductsPage() {
  // SEO Configuration
  useSEO({
    title: 'Premium Gold Products DRC - 99.99% Pure Gold Bars, Nuggets & Flakes | Hubris Minerals',
    description: 'Buy certified DRC gold products: investment-grade gold bars, natural nuggets, commercial flakes. 99.99% purity, conflict-free, direct from Congo mines. Wholesale quotes available.',
    keywords: 'DRC gold bars for sale, Congo gold nuggets, African gold flakes, 24k gold bars DRC, pure gold Congo, gold bullion Africa, investment gold DRC, certified gold products, conflict-free gold bars, wholesale gold Congo, raw gold nuggets, artisanal gold DRC, precious metals Africa, gold dealers Congo',
    ogTitle: 'Premium Gold Products DRC - 99.99% Pure Gold Bars & Nuggets',
    ogDescription: 'Certified DRC gold products: investment-grade bars, natural nuggets, commercial flakes. 99.99% purity, conflict-free, direct from Congo mines.',
    ogImage: 'https://ek2osvoeps68.space.minimax.io/images/gold-bars-collection.jpg',
    ogUrl: 'https://ek2osvoeps68.space.minimax.io/products',
    twitterTitle: 'Premium Gold Products from DRC - Certified & Conflict-Free',
    twitterDescription: 'Investment-grade gold bars, natural nuggets & commercial flakes. 99.99% purity from Democratic Republic of Congo.',
    twitterImage: 'https://ek2osvoeps68.space.minimax.io/images/gold-bars-collection.jpg',
    canonical: 'https://ek2osvoeps68.space.minimax.io/products',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Hubris Minerals Gold Products",
      "description": "Premium gold products from Democratic Republic of Congo including bars, nuggets, and flakes",
      "numberOfItems": PRODUCTS.length,
      "itemListElement": PRODUCTS.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "brand": {
          "@type": "Brand",
          "name": "Hubris Minerals"
        },
        "manufacturer": createOrganizationSchema(),
        "category": product.category,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": createOrganizationSchema(),
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": product.price
          }
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Purity",
            "value": product.purity
          },
          {
            "@type": "PropertyValue",
            "name": "Weight",
            "value": product.weight
          },
          {
            "@type": "PropertyValue",
            "name": "Origin",
            "value": "Democratic Republic of Congo"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "Conflict-Free Certified"
          }
        ]
      })),
      "provider": createOrganizationSchema()
    }
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bars' | 'nuggets' | 'flakes'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Products', count: PRODUCTS.length },
    { id: 'bars', label: 'Gold Bars', count: PRODUCTS.filter(p => p.category === 'bars').length },
    { id: 'nuggets', label: 'Gold Nuggets', count: PRODUCTS.filter(p => p.category === 'nuggets').length },
    { id: 'flakes', label: 'Gold Flakes', count: PRODUCTS.filter(p => p.category === 'flakes').length },
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gold mb-6">
              Premium Gold Products
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality gold products, from investment-grade bars 
              to collectible nuggets and commercial flakes, all sourced directly from DRC mines.
            </p>
          </motion.div>

          {/* Filters and Search */}
          <div className="bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-forest-800 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold/40"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as any)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gold text-forest'
                        : 'bg-forest-800 text-gold hover:bg-forest-700'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>

              {/* View Mode */}
              <div className="flex border border-gold/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${
                    viewMode === 'grid' ? 'bg-gold text-forest' : 'text-gold hover:bg-gold/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${
                    viewMode === 'list' ? 'bg-gold text-forest' : 'text-gold hover:bg-gold/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Products Grid/List */}
      <section className="pb-16" aria-label="Gold products catalog">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-6'
            }>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={viewMode === 'list' ? 'flex gap-6 items-center' : ''}
                >
                  <div className={`bg-gradient-to-br from-forest-800/50 to-cyprus/50 backdrop-blur-sm border border-gold/20 rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 group hover:scale-105 ${
                    viewMode === 'list' ? 'flex-1 flex items-center gap-6 p-6' : ''
                  }`}>
                    {/* Product Image */}
                    <div className={`bg-gradient-to-br from-gold/5 to-olive/5 flex items-center justify-center ${
                      viewMode === 'list' ? 'w-32 h-32 rounded-lg flex-shrink-0' : 'aspect-square p-8'
                    }`}>
                      <img
                        src={product.image}
                        alt={`${product.name} - ${product.weight} ${product.purity} purity gold from DRC mines by Hubris Minerals`}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Product Info */}
                    <div className={viewMode === 'list' ? 'flex-1' : 'p-6'}>
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
                      
                      <h2 className="text-lg font-semibold text-gold mb-2">
                        {product.name}
                      </h2>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {product.description}
                      </p>
                      
                      <div className={`flex items-center justify-between ${
                        viewMode === 'list' ? 'mt-4' : ''
                      }`}>
                        <span className="text-olive font-semibold">
                          {product.price}
                        </span>
                        <Button
                          as="a"
                          href={`mailto:${CONTACT_INFO.email}?subject=Quote Request for ${product.name}&body=I would like to request a quote for the following product:%0D%0A%0D%0AProduct: ${product.name}%0D%0AWeight: ${product.weight}%0D%0APurity: ${product.purity}%0D%0A%0D%0APlease provide pricing and availability information.`}
                          variant="goldOutline"
                          size="sm"
                          className="text-xs"
                        >
                          <ShoppingBag size={14} className="mr-1" />
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
