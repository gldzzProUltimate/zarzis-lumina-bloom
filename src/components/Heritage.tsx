
import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Waves, Users, Shield, Award, Calendar, TrendingUp, Anchor, Sparkles, GraduationCap } from 'lucide-react';

const TextGenerateEffect = ({ 
  text, 
  className = "",
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(' ');

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: "easeOut"
          }}
          style={{ display: 'inline-block', marginRight: '0.25rem' }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

const NumberCounter = ({ 
  number, 
  suffix = "", 
  duration = 2 
}: { 
  number: string; 
  suffix?: string; 
  duration?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  const numericValue = parseInt(number.replace(/[^\d]/g, ''));
  
  useEffect(() => {
    if (!isInView) return;
    
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * numericValue));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    updateCount();
  }, [isInView, numericValue, duration]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

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
        {/* Header with Sticky Reveal */}
        <motion.div 
          style={{ y: textY }}
          className="text-center mb-32"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-8 shadow-medium"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">OUR HERITAGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="text-shimmer">{t('heritage.title')}</span>
          </motion.h2>

          <TextGenerateEffect
            text={t('heritage.subtitle')}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-crimson"
            delay={0.5}
          />
        </motion.div>

        {/* Why +40 Years Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-32"
        >
          <div className="glass-luxury rounded-3xl p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-shimmer">
              {t('heritage.why_title')}
            </h3>
            
            <TextGenerateEffect
              text={t('heritage.why_description')}
              className="text-lg text-muted-foreground leading-relaxed font-inter text-center mb-12"
              delay={0.3}
            />

            {/* Heritage Points with Staggered Animation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {heritagePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  whileHover={isDesktop ? { y: -8, scale: 1.02 } : {}}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={isDesktop ? { scale: 1.1, rotate: 5 } : {}}
                    className={`w-16 h-16 ${point.gradient} rounded-2xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury mx-auto mb-6`}
                  >
                    <point.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-4">
                    {point.title}
                  </h4>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <TextGenerateEffect
              text={t('heritage.claim_description')}
              className="text-muted-foreground font-inter leading-relaxed text-center mt-12"
              delay={1}
            />
          </div>
        </motion.div>

        {/* Our Promise Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-shimmer">
            {t('heritage.promise_title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-luxury rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                  <promise.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-foreground font-inter leading-relaxed">{promise.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Heritage in Numbers */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-32"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-shimmer">
            {t('heritage.numbers_title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {numbers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-luxury rounded-3xl p-8 text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                  {item.value}{item.suffix}
                </div>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Looking Forward */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass-luxury rounded-3xl p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-shimmer">
              {t('heritage.future_title')}
            </h3>
            
            <TextGenerateEffect
              text={t('heritage.future_description')}
              className="text-lg text-muted-foreground leading-relaxed font-crimson"
              delay={0.3}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
