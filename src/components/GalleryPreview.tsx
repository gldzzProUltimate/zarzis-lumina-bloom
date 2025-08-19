import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GalleryPreview = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Gallery images - using placeholder images for now
  const galleryImages = [
    {
      src: 'image-1.jpeg',
      alt: 'Mediterranean sponge diving',
    },
    {
      src: 'image-2.jpeg',
      alt: 'Natural sea sponges drying',
    },
    {
      src: 'image-3.jpeg',
      alt: 'Luxury spa with natural sponges',
    },
    {
      src: 'image-4.jpeg',
      alt: 'Artisan sponge preparation',
    },
    {
      src: 'image-5.jpeg',
      alt: 'Coastal harvesting scene',
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary-subtle/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-6 shadow-medium">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">{t('gallery.title').toUpperCase()}</span>
          </div>
          <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto bg-gradient-to-r from-primary via-secondary to-primary text-transparent bg-clip-text block">
            {t('gallery.description')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative mb-8 rounded-3xl overflow-hidden glass shadow-ocean">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src={galleryImages[currentImage].src}
                  alt={galleryImages[currentImage].alt}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/10" />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-3 lg:hover:bg-primary/20 transition-smooth"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-3 lg:hover:bg-primary/20 transition-smooth"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentImage
                      ? 'bg-primary shadow-glow'
                      : 'bg-white/40 lg:hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-5 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={isDesktop ? { scale: 1.05 } : {}}
                onClick={() => setCurrentImage(index)}
                className={`cursor-pointer rounded-xl overflow-hidden transition-smooth ${
                  index === currentImage
                    ? 'ring-2 ring-primary shadow-glow'
                    : 'lg:hover:ring-2 lg:hover:ring-primary/50'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-20 object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link to="/gallery">
              <Button 
                size="lg" 
                className="sand-gradient text-primary shadow-soft lg:hover:shadow-glow transition-smooth group px-8 py-6 text-lg"
              >
                {t('gallery.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform lg:group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};