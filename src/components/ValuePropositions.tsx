import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Leaf } from 'lucide-react';

const valueIcons = {
  heritage: Award,
  direct: Users,
  certified: Shield,
  eco: Leaf,
};

export const ValuePropositions = () => {
  const { t } = useTranslation();

  const values = [
    { key: 'heritage', icon: Award, color: 'text-primary' },
    { key: 'direct', icon: Users, color: 'text-secondary' },
    { key: 'certified', icon: Shield, color: 'text-primary' },
    { key: 'eco', icon: Leaf, color: 'text-secondary' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary-subtle/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-gradient bg-clip-text text-transparent">
            {t('values.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 text-center transition-smooth hover:shadow-ocean">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                      value.color === 'text-primary' ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}
                  >
                    <IconComponent className={`h-8 w-8 ${value.color}`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                    {t(`values.${value.key}.title`)}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};