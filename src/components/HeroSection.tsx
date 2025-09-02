import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import hero images
import heroSponges from '@/assets/hero-sponges.jpg';
import heroDiving from '@/assets/hero-diving.jpg';
import heroSpa from '@/assets/hero-spa.jpg';

const heroImages = [
  {
    src: heroSponges,
    alt: 'Premium Natural Sea Sponges',
    overlay: 'luxury-gradient'
  },
  {
    src: heroDiving,
    alt: 'Mediterranean Sponge Diving',
    overlay: 'ocean-gradient'
  },
  {
    src: heroSpa,
    alt: 'Luxury Spa Experience',
    overlay: 'pearl-gradient'
  }
];

export const HeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  // Desktop detection
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ 
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0 gpu-accelerated"
          >
            <img
              src={heroImages[currentSlide].src}
              alt={heroImages[currentSlide].alt}
              className="w-full h-full object-cover transform-gpu"
              loading="eager"
              decoding="async"
            />
            {/* Enhanced overlay with dynamic gradients */}
            <div className={`absolute inset-0 ${heroImages[currentSlide].overlay} opacity-60`} />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
            
            {/* Optimized floating particles effect */}
            <div className="absolute inset-0 overflow-hidden contain-strict">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full gpu-accelerated"
                  initial={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                    y: typeof window !== 'undefined' ? window.innerHeight + 50 : 850,
                    opacity: 0
                  }}
                  animate={{ 
                    y: -50,
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 2 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 1.5,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 my-8 shadow-luxury"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Mediterranean Quality</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight text-balance">
              <span className="text-muted-foreground">
                {t('hero.title')}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-secondary-deep mb-6 font-crimson font-medium">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-12 leading-relaxed max-w-2xl font-inter">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button 
                  size="lg" 
                  className="btn-luxury luxury-gradient text-white shadow-luxury lg:hover:shadow-ocean transition-luxury group px-10 py-7 text-lg font-semibold rounded-2xl focus-luxury"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform lg:group-hover:translate-x-2" />
                </Button> 
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Carousel Controls */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
        <div className="flex items-center space-x-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="glass-luxury h-14 w-14 p-0 lg:hover:bg-primary/20 transition-luxury rounded-full shadow-medium"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-luxury ${
                  index === currentSlide
                    ? 'luxury-gradient shadow-glow scale-125'
                    : 'bg-white/40 lg:hover:bg-white/60 shadow-soft'
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="glass-luxury h-14 w-14 p-0 lg:hover:bg-primary/20 transition-luxury rounded-full shadow-medium"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 right-12 z-20"
      >
        <div className="flex flex-col items-center text-white/90 animate-float">
          <span className="text-sm mb-4 rotate-90 origin-center font-inter tracking-wider">Discover</span>
          <div className="w-px h-12 luxury-gradient rounded-full shadow-glow" />
        </div>
      </motion.div>

      {/* Optimized decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 luxury-gradient rounded-full blur-3xl opacity-20 animate-pulse-optimized contain-paint" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 ocean-gradient rounded-full blur-2xl opacity-30 animate-pulse-optimized contain-paint" style={{ animationDelay: '1s' }} />
    </section>
  );
};