
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Package, Beaker, CreditCard, FileCheck } from 'lucide-react';

export const ProductHighlights: React.FC = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      key: 'minimum_order',
      icon: Package,
      gradient: 'luxury-gradient'
    },
    {
      key: 'samples',
      icon: Beaker,
      gradient: 'pearl-gradient'
    },
    {
      key: 'payment',
      icon: CreditCard,
      gradient: 'ocean-gradient'
    },
    {
      key: 'export_code',
      icon: FileCheck,
      gradient: 'luxury-gradient'
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 pearl-gradient opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-luxury rounded-2xl p-6 text-center lg:hover:shadow-luxury transition-luxury group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 ${highlight.gradient} rounded-xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury mx-auto mb-4`}
              >
                <highlight.icon className="h-6 w-6 text-white" />
              </motion.div>
              
              <p className="text-sm text-foreground font-medium leading-relaxed">
                {t(`products.highlights.${highlight.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
