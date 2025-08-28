
import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Waves, Users, Shield, Award, Calendar, TrendingUp, Anchor, Sparkles, GraduationCap } from 'lucide-react';





export const Heritage = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const heritagePoints = [
    {
      icon: Users,
      title: t('heritage.training.title'),
      description: t('heritage.training.description'),
      gradient: 'luxury-gradient'
    },
    {
      icon: Anchor,
      title: t('heritage.hub.title'),
      description: t('heritage.hub.description'),
      gradient: 'ocean-gradient'
    },
    {
      icon: Award,
      title: t('heritage.cultural.title'),
      description: t('heritage.cultural.description'),
      gradient: 'pearl-gradient'
    },
    {
      icon: GraduationCap,
      title: t('heritage.vocational.title'),
      description: t('heritage.vocational.description'),
      gradient: 'luxury-gradient'
    }
  ];

  const promises = [
    { text: t('heritage.promise_1'), icon: Waves },
    { text: t('heritage.promise_2'), icon: Shield },
    { text: t('heritage.promise_3'), icon: Users },
    { text: t('heritage.promise_4'), icon: TrendingUp }
  ];

  const numbers = [
    { value: "7-30", text: t('heritage.number_1'), suffix: " boats" },
    { value: "7", text: t('heritage.number_2'), suffix: " tons" }
  ];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 pearl-gradient opacity-20" />
        <div className="absolute top-1/4 right-0 w-96 h-96 luxury-gradient rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 ocean-gradient rounded-full blur-2xl opacity-15" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-8 shadow-medium">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">OUR HERITAGE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-shimmer">{t('heritage.title')}</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-crimson">
            {t('heritage.subtitle')}
          </p>
        </div>

        {/* Why +40 Years Section */}
        <div className="max-w-5xl mx-auto mb-32">
          <div className="glass-luxury rounded-3xl p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-shimmer">
              {t('heritage.why_title')}
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-inter text-center mb-12">
              {t('heritage.why_description')}
            </p>

            {/* Heritage Points */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {heritagePoints.map((point, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div
                    className={`w-16 h-16 ${point.gradient} rounded-2xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury mx-auto mb-6`}
                  >
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-4">
                    {point.title}
                  </h4>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground font-inter leading-relaxed text-center mt-12">
              {t('heritage.claim_description')}
            </p>
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-shimmer">
            {t('heritage.promise_title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="glass-luxury rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                  <promise.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-foreground font-inter leading-relaxed">{promise.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage in Numbers */}
        <div className="max-w-6xl mx-auto mb-32">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-shimmer">
            {t('heritage.numbers_title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {numbers.map((item, index) => (
              <div
                key={index}
                className="glass-luxury rounded-3xl p-8 text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                  {item.value}{item.suffix}
                </div>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Looking Forward */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-luxury rounded-3xl p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-shimmer">
              {t('heritage.future_title')}
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-crimson">
              {t('heritage.future_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
