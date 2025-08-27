
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { StickyFloatingButtons } from '@/components/StickyFloatingButtons';
import { ProductHighlights } from '@/components/ProductHighlights';
import { ProductCard } from '@/components/ProductCard';
import { CommercialDimensions } from '@/components/CommercialDimensions';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const products = [
    {
      key: 'zimokhas',
      imageUrl: 'https://stepma-eponges.com/wp-content/uploads/2017/01/zimokhas.png'
    },
    {
      key: 'scaphandre',
      imageUrl: 'https://stepma-eponges.com/wp-content/uploads/2017/01/scaphandre.png'
    },
    {
      key: 'kamakis',
      imageUrl: 'https://stepma-eponges.com/wp-content/uploads/2017/01/kamakis.png'
    },
    {
      key: 'chalutier',
      imageUrl: 'https://stepma-eponges.com/wp-content/uploads/2017/01/chalutier.png'
    },
    {
      key: 'elephant_ear',
      imageUrl: 'https://stepma-eponges.com/wp-content/uploads/2017/01/zimokhas.png'
    },
    {
      key: 'madappa',
      imageUrl: 'https://stepma-eponges.com/wp-content/uploads/2017/01/scaphandre.png'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 pearl-gradient opacity-30" />
          <div className="absolute top-0 right-0 w-96 h-96 luxury-gradient rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 ocean-gradient rounded-full blur-2xl opacity-15" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-8 shadow-medium">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">
                {t('products.page_title').toUpperCase()}
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-shimmer">{t('products.page_title')}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-crimson max-w-3xl mx-auto">
              {t('products.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <ProductHighlights />

      {/* Products Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ocean-gradient opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-shimmer">{t('products.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              {t('products.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={product.key}
                productKey={product.key}
                imageUrl={product.imageUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Dimensions */}
      <CommercialDimensions />

      <StickyFloatingButtons />
    </div>
  );
};

export default Products;
