import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Waves, MapPin, Calendar, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutPreview = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Calendar, value: '40+', label: 'Years of Heritage', gradient: 'luxury-gradient' },
    { icon: MapPin, value: '7', label: 'Mediterranean Locations', gradient: 'ocean-gradient', locations: 'Zarzis, Djerba, Kerkennah, Mahdia, Qlibya, Pantelleria, Lampedusa' },
    { icon: Users, value: '1000+', label: 'Happy Customers', gradient: 'pearl-gradient' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pearl-gradient opacity-30" />
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] rounded-full border border-primary/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-secondary/10"
          />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 luxury-gradient rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 ocean-gradient rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 left-1/6 w-4 h-4 pearl-gradient rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
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
                <span className="text-sm font-medium text-primary tracking-wide">OUR STORY</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl luxury-gradient mb-8 shadow-luxury group"
              >
                <Waves className="h-10 w-10 text-white group-hover:scale-110 transition-luxury" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-balance">
                <span className="text-shimmer">
                  {t('about.title')}
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-crimson">
                {t('about.description')}
              </p>

              <p className="text-lg text-foreground/70 mb-12 leading-relaxed font-inter">
                From the crystal-clear waters of the Mediterranean to luxury spas around the world, our commitment to excellence and sustainability has made us the trusted choice for discerning customers who value authenticity and quality.
              </p>

              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="btn-luxury group px-10 py-6 text-lg font-semibold border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-luxury shadow-soft hover:shadow-glow rounded-2xl focus-luxury"
                >
                  {t('about.cta')}
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="space-y-8"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group"
                  >
                    <div className="glass-luxury rounded-3xl p-8 transition-luxury hover:shadow-luxury">
                      <div className="flex items-center gap-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 ${stat.gradient} rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-luxury`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="text-3xl lg:text-4xl font-bold text-shimmer mb-2">
                            {stat.value}
                          </div>
                          <div className="text-muted-foreground font-medium mb-2">
                            {stat.label}
                          </div>
                          {stat.locations && (
                            <div className="text-xs text-muted-foreground/80 leading-relaxed">
                              {stat.locations}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Decorative quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="glass-luxury rounded-3xl p-8 shadow-soft"
              >
                <blockquote className="text-lg font-crimson italic text-muted-foreground leading-relaxed">
                  "The sea has always been our teacher, and we honor its gifts with the respect they deserve."
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center shadow-medium">
                    <span className="text-white font-bold text-sm">ZE</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Zarzis Éponge</div>
                    <div className="text-sm text-muted-foreground">Founder & Master Craftsman</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};