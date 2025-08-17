import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Anchor, Droplets, CheckCircle, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServicesPreview = () => {
  const { t } = useTranslation();

  const steps = [
    { key: 'step1', icon: Anchor, color: 'text-secondary' },
    { key: 'step2', icon: Droplets, color: 'text-primary' },
    { key: 'step3', icon: CheckCircle, color: 'text-secondary' },
    { key: 'step4', icon: Package, color: 'text-primary' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary-subtle/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-gradient bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-secondary mb-8 font-medium">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/30 to-secondary/30 z-0" />
                  )}

                  <div className="glass rounded-2xl p-8 text-center relative z-10 transition-smooth hover:shadow-ocean">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                        step.color === 'text-primary' ? 'bg-primary/10' : 'bg-secondary/10'
                      }`}
                    >
                      <IconComponent className={`h-8 w-8 ${step.color}`} />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                      {t(`services.${step.key}.title`)}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {t(`services.${step.key}.description`)}
                    </p>

                    {/* Step number */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 ${
                      step.color === 'text-primary' ? 'bg-primary' : 'bg-secondary'
                    } text-white rounded-full flex items-center justify-center text-sm font-bold shadow-soft`}>
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Link to="/services">
              <Button 
                size="lg" 
                className="ocean-gradient text-white shadow-ocean hover:shadow-glow transition-smooth group px-8 py-6 text-lg"
              >
                {t('services.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};