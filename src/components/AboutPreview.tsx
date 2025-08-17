import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutPreview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 ocean-gradient opacity-5" />
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-96 h-96 rounded-full border border-primary/20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8"
            >
              <Waves className="h-8 w-8 text-primary" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="hero-gradient bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              {t('about.description')}
            </p>

            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="group px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-glow"
              >
                {t('about.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};