import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Leaf, Sparkles } from 'lucide-react';

const valueIcons = {
  heritage: Award,
  direct: Users,
  certified: Shield,
  eco: Leaf,
};

export const ValuePropositions = () => {
  const { t } = useTranslation();

  const values = [
    { 
      key: 'heritage', 
      icon: Award, 
      gradient: 'luxury-gradient',
      shadowClass: 'shadow-luxury',
      delay: 0.1
    },
    { 
      key: 'direct', 
      icon: Users, 
      gradient: 'ocean-gradient',
      shadowClass: 'shadow-ocean',
      delay: 0.2
    },
    { 
      key: 'certified', 
      icon: Shield, 
      gradient: 'pearl-gradient',
      shadowClass: 'shadow-glow',
      delay: 0.3
    },
    { 
      key: 'eco', 
      icon: Leaf, 
      gradient: 'luxury-gradient',
      shadowClass: 'shadow-luxury',
      delay: 0.4
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full pearl-gradient opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 luxury-gradient rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 ocean-gradient rounded-full blur-2xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          {/* Premium section badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-8 shadow-medium"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">WHY CHOOSE US</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-balance">
            <span className="text-shimmer">
              {t('values.title')}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
            Four decades of Mediterranean excellence, bringing you the finest natural sponges with uncompromising quality and sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: value.delay,
                  ease: "easeOut"
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative h-full"
              >
                <div className={`glass-luxury rounded-3xl p-8 text-center transition-luxury hover:${value.shadowClass} relative overflow-hidden h-full flex flex-col`}>
                  {/* Background decoration */}
                  <div className={`absolute inset-0 ${value.gradient} opacity-0 group-hover:opacity-5 transition-luxury rounded-3xl`} />
                  
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 mb-8"
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${value.gradient} ${value.shadowClass} mb-2`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Floating sparkle effect */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: value.delay + 0.5, duration: 0.3 }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="h-5 w-5 text-primary opacity-60" />
                    </motion.div>
                  </motion.div>
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-foreground group-hover:text-primary transition-luxury">
                      {t(`values.${value.key}.title`)}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed font-inter flex-1">
                      {t(`values.${value.key}.description`)}
                    </p>
                  </div>

                  {/* Hover gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-luxury -z-10 blur-xl" />
                </div>

                {/* Number badge */}
                <div className={`absolute -top-4 -right-4 w-10 h-10 ${value.gradient} text-white rounded-full flex items-center justify-center text-sm font-bold ${value.shadowClass} z-20`}>
                  {index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};