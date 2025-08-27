
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Award, Shield } from 'lucide-react';

interface ProductCardProps {
  productKey: string;
  imageUrl: string;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ productKey, imageUrl, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-luxury rounded-3xl overflow-hidden lg:hover:shadow-luxury transition-luxury group"
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={t(`products.${productKey}.name`)}
          className="w-full h-64 object-cover transition-smooth lg:group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 lg:group-hover:opacity-100 transition-smooth" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-4">
          {t(`products.${productKey}.name`)}
        </h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{t(`products.${productKey}.origin`)}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{t(`products.${productKey}.quality`)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{t(`products.${productKey}.resistance`)}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t(`products.${productKey}.characteristic_1`)}
          </p>
          {t(`products.${productKey}.characteristic_2`, { defaultValue: '' }) && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(`products.${productKey}.characteristic_2`)}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
