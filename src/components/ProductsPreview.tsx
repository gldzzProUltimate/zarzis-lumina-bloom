import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductsPreview = () => {
  const { t } = useTranslation();

  // Placeholder product categories
  const productCategories = [
    {
      title: 'Premium Bath Sponges',
      description: 'Luxurious natural sponges for daily use',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&auto=format',
    },
    {
      title: 'Spa Collection',
      description: 'Professional-grade sponges for wellness centers',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format',
    },
    {
      title: 'Gentle Baby Sponges',
      description: 'Extra soft sponges for sensitive skin',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&auto=format',
    },
    {
      title: 'Artisan Collection',
      description: 'Handcrafted premium selections',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop&auto=format',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-gradient bg-clip-text text-transparent">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
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
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="glass rounded-2xl overflow-hidden transition-smooth hover:shadow-ocean">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
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
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
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
              className="group px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-glow"
            >
              {t('products.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};