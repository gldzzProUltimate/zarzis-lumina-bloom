
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Award, Shield } from 'lucide-react';

interface SpongeProductContentProps {
  productKey: string;
}

export const SpongeProductContent: React.FC<SpongeProductContentProps> = ({ productKey }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="glass-luxury rounded-2xl p-6">
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground font-medium">{t(`products.products.${productKey}.details.origin`)}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{t(`products.products.${productKey}.details.quality`)}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{t(`products.products.${productKey}.details.resistance`)}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-foreground font-playfair">Key Characteristics</h4>
          {Array.from({ length: 2 }, (_, i) => {
            const characteristic = t(`products.products.${productKey}.details.characteristics.${i}`, { defaultValue: '' });
            return characteristic ? (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                • {characteristic}
              </p>
            ) : null;
          })}
        </div>
      </div>

      <div className="glass-luxury rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-foreground font-playfair mb-4">Premium Mediterranean Quality</h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Hand-harvested from the pristine waters of the Mediterranean Sea, these natural sponges represent over 40 years of traditional craftsmanship and sustainable harvesting practices.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Each sponge is carefully processed without chemicals or machines, ensuring the highest quality while preserving the natural properties that make Mediterranean sea sponges the world's finest.
        </p>
      </div>
    </div>
  );
};
