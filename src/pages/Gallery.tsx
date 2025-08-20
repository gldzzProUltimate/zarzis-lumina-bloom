import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { StickyFloatingButtons } from '@/components/StickyFloatingButtons';
import { useTranslation } from 'react-i18next';
import { 
  X, 
  Sparkles,
  Waves,
  MapPin,
  Users,
  Package,
  Award,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
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

  const categories = [
    { id: 'all', name: 'All Images', icon: Eye },
    { id: 'harvesting', name: 'Harvesting', icon: Waves },
    { id: 'locations', name: 'Locations', icon: MapPin },
    { id: 'processing', name: 'Processing', icon: Package },
    { id: 'products', name: 'Products', icon: Award },
    { id: 'team', name: 'Our Team', icon: Users }
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/image-1.jpeg',
      title: 'Mediterranean Diving',
      description: 'Our experienced divers carefully harvesting sponges from pristine Mediterranean waters',
      category: 'harvesting',
      location: 'Zarzis, Tunisia'
    },
    {
      id: 2,
      src: '/image-2.jpeg',
      title: 'Crystal Clear Waters',
      description: 'The pristine Mediterranean waters where our natural sponges grow',
      category: 'locations',
      location: 'Djerba, Tunisia'
    },
    {
      id: 3,
      src: '/image-3.jpeg',
      title: 'Quality Processing',
      description: 'Natural processing methods ensuring the highest quality standards',
      category: 'processing',
      location: 'Processing Facility'
    },
    {
      id: 4,
      src: '/image-4.jpeg',
      title: 'Premium Sponges',
      description: 'Our finest quality Mediterranean sponges ready for wholesale distribution',
      category: 'products',
      location: 'Quality Control'
    },
    {
      id: 5,
      src: '/image-5.jpeg',
      title: 'Expert Team',
      description: 'Our dedicated team of Mediterranean sponge specialists',
      category: 'team',
      location: 'Headquarters'
    },
    {
      id: 6,
      src: '/ze-logo.png',
      title: 'Zarzis Éponge Heritage',
      description: 'Four decades of Mediterranean sponge expertise and tradition',
      category: 'team',
      location: 'Brand Heritage'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === galleryImages[selectedImage].id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    const newImageId = filteredImages[newIndex].id;
    const originalIndex = galleryImages.findIndex(img => img.id === newImageId);
    setSelectedImage(originalIndex);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ocean-gradient opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 luxury-gradient rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 pearl-gradient rounded-full blur-2xl opacity-15" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-8 shadow-medium">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">GALLERY</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-shimmer">Mediterranean</span>
              <br />
              <span className="text-primary">Journey</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-crimson max-w-3xl mx-auto">
              Explore our Mediterranean sponge harvesting process through stunning visuals. 
              From the pristine waters of Tunisia and Italy to the final premium products delivered to wholesale buyers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={isDesktop ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-full transition-luxury shadow-soft
                  ${activeCategory === category.id 
                    ? 'luxury-gradient text-white shadow-luxury' 
                    : 'glass-luxury text-foreground lg:hover:text-primary lg:hover:shadow-medium'
                  }
                `}
              >
                <category.icon className="h-4 w-4" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="glass-luxury rounded-3xl overflow-hidden shadow-soft lg:hover:shadow-luxury transition-luxury group cursor-pointer"
                onClick={() => openModal(galleryImages.findIndex(img => img.id === image.id))}
              >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover lg:group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-2">
                      {image.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed font-inter mb-3">
                      {image.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <MapPin className="h-4 w-4" />
                      {image.location}
                    </div>
                  </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white lg:hover:text-primary transition-colors z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white lg:hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white lg:hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image */}
              <div className="glass-luxury rounded-3xl overflow-hidden">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed font-inter mb-4">
                    {galleryImages[selectedImage].description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <MapPin className="h-4 w-4" />
                    {galleryImages[selectedImage].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <StickyFloatingButtons />
    </div>
  );
};

export default Gallery;