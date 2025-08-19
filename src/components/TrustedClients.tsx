import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';

export const TrustedClients = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);
  const currentClients = [
    { country: 'Greece', flag: '🇬🇷', color: 'from-blue-500 to-blue-600' },
    { country: 'France', flag: '🇫🇷', color: 'from-blue-600 to-red-500' },
    { country: 'Italy', flag: '🇮🇹', color: 'from-green-500 to-red-500' },
    { country: 'Germany', flag: '🇩🇪', color: 'from-yellow-500 to-red-500' },
  ];

  const prospectiveClients = [
    { country: 'USA', flag: '🇺🇸', color: 'from-blue-600 to-red-600' },
    { country: 'Canada', flag: '🇨🇦', color: 'from-red-600 to-white' },
    { country: 'China', flag: '🇨🇳', color: 'from-red-500 to-yellow-500' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pearl-gradient opacity-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 luxury-gradient rounded-full blur-3xl opacity-5" />
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
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">GLOBAL REACH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-shimmer">
              Trusted by international wholesale buyers worldwide
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Current Clients */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-luxury rounded-3xl p-8 shadow-soft lg:hover:shadow-luxury transition-luxury"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center shadow-medium">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Current Partners</h3>
                  <p className="text-sm text-muted-foreground">Established relationships</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {currentClients.map((client, index) => (
                  <motion.div
                    key={client.country}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={isDesktop ? { scale: 1.05, y: -2 } : {}}
                    className="glass-luxury rounded-2xl p-4 text-center group cursor-pointer shadow-soft lg:hover:shadow-medium transition-luxury"
                  >
                    <div className="text-3xl mb-2 lg:group-hover:scale-110 transition-transform">
                      {client.flag}
                    </div>
                    <div className="text-sm font-medium text-foreground lg:group-hover:text-primary transition-colors">
                      {client.country}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Prospective Clients */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-luxury rounded-3xl p-8 shadow-soft lg:hover:shadow-luxury transition-luxury"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 ocean-gradient rounded-full flex items-center justify-center shadow-medium">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Expanding To</h3>
                  <p className="text-sm text-muted-foreground">New market opportunities</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {prospectiveClients.map((client, index) => (
                  <motion.div
                    key={client.country}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={isDesktop ? { scale: 1.02, x: 5 } : {}}
                    className="glass-luxury rounded-2xl p-4 flex items-center gap-4 group cursor-pointer shadow-soft lg:hover:shadow-medium transition-luxury opacity-75 lg:hover:opacity-100"
                  >
                    <div className="text-2xl lg:group-hover:scale-110 transition-transform">
                      {client.flag}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground lg:group-hover:text-primary transition-colors">
                        {client.country}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground lg:group-hover:text-primary transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};