
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Ruler } from 'lucide-react';

export const CommercialDimensions: React.FC = () => {
  const { t } = useTranslation();

  const dimensions = [
    { number: "Nº 0", height: "8cm", width: "6cm" },
    { number: "Nº 1", height: "10cm", width: "8cm" },
    { number: "Nº 2", height: "11.5cm", width: "10cm" },
    { number: "Nº 3", height: "13cm", width: "11cm" },
    { number: "Nº 4", height: "14cm", width: "12cm" },
    { number: "Nº 5", height: "15cm", width: "13cm" },
    { number: "Nº 6", height: "16.5cm", width: "14cm" },
    { number: "Nº 7", height: "18cm", width: "16cm" },
    { number: "Nº 8", height: "20cm", width: "18cm" },
    { number: "Nº 9", height: "22cm", width: "20cm" }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 luxury-gradient opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-6 shadow-medium">
            <Ruler className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">
              {t('products.commercial_dimensions_title').toUpperCase()}
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-crimson mb-8">
            {t('products.note')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-luxury rounded-3xl p-8 overflow-x-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 min-w-max">
            {dimensions.map((dimension, index) => (
              <motion.div
                key={dimension.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-2xl p-4 text-center border border-primary/10"
              >
                <div className="text-lg font-semibold text-primary mb-2">
                  {dimension.number}
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>H: {dimension.height}</div>
                  <div>W: {dimension.width}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
