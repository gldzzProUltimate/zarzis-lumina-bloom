import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductsPreview = () => {
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

  // Placeholder product categories
  const productCategories = [
    {
      title: 'Premium Bath Sponges',
      description: 'Luxurious natural sponges for daily use',
      image: 'image-1.jpeg',
    },
    {
      title: 'Spa Collection',
      description: 'Professional-grade sponges for wellness centers',
      image: 'image-2.jpeg',
    },
    {
      title: 'Gentle Baby Sponges',
      description: 'Extra soft sponges for sensitive skin',
      image: 'image-3.jpeg',
    },
    {
      title: 'Artisan Collection',
      description: 'Handcrafted premium selections',
      image: 'image-4.jpeg',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary-subtle/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-6 shadow-medium">
            <Package className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">{t('products.title').toUpperCase()}</span>
          </div>
          <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto bg-gradient-to-r from-primary via-secondary to-primary text-transparent bg-clip-text block">
            {t('products.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productCategories.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={isDesktop ? { y: -8 } : {}}
              className="group cursor-pointer"
            >
              <div className="glass rounded-2xl overflow-hidden transition-smooth lg:hover:shadow-ocean">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover transition-smooth lg:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 lg:group-hover:opacity-100 transition-smooth" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-primary fill-current"
                      />
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground lg:group-hover:text-primary transition-smooth">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/products">
            <Button 
              size="lg" 
              variant="outline"
              className="group px-8 py-6 text-lg border-primary text-primary lg:hover:bg-primary lg:hover:text-primary-foreground transition-smooth shadow-soft lg:hover:shadow-glow"
            >
              {t('products.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform lg:group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};