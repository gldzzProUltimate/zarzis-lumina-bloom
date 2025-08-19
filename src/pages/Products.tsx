import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { StickyFloatingButtons } from '@/components/StickyFloatingButtons';
import { useTranslation } from 'react-i18next';
import { 
  Waves, 
  Star, 
  Award, 
  Sparkles,
  CheckCircle,
  Info,
  Package,
  Ruler,
  Heart,
  Shield,
  Leaf,
  Users
} from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const productTypes = [
    {
      name: 'Honeycomb Sponges',
      description: 'Premium natural sponges with distinctive honeycomb texture, perfect for gentle cleansing',
      features: ['Ultra-soft texture', 'Excellent absorption', 'Gentle on sensitive skin', 'Long-lasting durability'],
      sizes: ['Small (3-4 inches)', 'Medium (4-5 inches)', 'Large (5-6 inches)', 'Extra Large (6+ inches)'],
      gradient: 'luxury-gradient',
      shadowClass: 'shadow-luxury',
      icon: Star
    },
    {
      name: 'Fine Grain Sponges',
      description: 'Smooth, fine-textured sponges ideal for delicate applications and premium spa treatments',
      features: ['Silky smooth texture', 'Superior water retention', 'Professional grade quality', 'Consistent performance'],
      sizes: ['Small (2-3 inches)', 'Medium (3-4 inches)', 'Large (4-5 inches)', 'Professional (5+ inches)'],
      gradient: 'pearl-gradient',
      shadowClass: 'shadow-glow',
      icon: Heart
    },
    {
      name: 'Deep Sea Sponges',
      description: 'Robust sponges harvested from deeper Mediterranean waters, known for exceptional durability',
      features: ['High durability', 'Excellent scrubbing power', 'Natural antibacterial', 'Professional strength'],
      sizes: ['Medium (4-5 inches)', 'Large (5-6 inches)', 'Extra Large (6-7 inches)', 'Jumbo (7+ inches)'],
      gradient: 'ocean-gradient',
      shadowClass: 'shadow-ocean',
      icon: Waves
    },
    {
      name: 'Artisan Selection',
      description: 'Hand-picked premium sponges representing the finest quality from our Mediterranean harvests',
      features: ['Hand-selected quality', 'Perfect shape consistency', 'Premium grade only', 'Gift-ready presentation'],
      sizes: ['Curated Small', 'Curated Medium', 'Curated Large', 'Luxury Sets'],
      gradient: 'luxury-gradient',
      shadowClass: 'shadow-luxury',
      icon: Award
    }
  ];

  const qualityGrades = [
    {
      grade: 'Premium Grade',
      description: 'Top-tier sponges with perfect texture, shape, and absorbency',
      characteristics: ['Flawless natural shape', 'Optimal texture consistency', 'Maximum absorption capacity', 'Zero defects'],
      percentage: '15%',
      color: 'text-yellow-500'
    },
    {
      grade: 'Professional Grade',
      description: 'High-quality sponges ideal for commercial and spa applications',
      characteristics: ['Excellent texture quality', 'Consistent performance', 'Commercial durability', 'Minor natural variations'],
      percentage: '35%',
      color: 'text-blue-500'
    },
    {
      grade: 'Standard Grade',
      description: 'Quality sponges suitable for general wholesale distribution',
      characteristics: ['Good texture quality', 'Reliable performance', 'Standard durability', 'Natural variations accepted'],
      percentage: '50%',
      color: 'text-green-500'
    }
  ];

  const specifications = [
    {
      icon: Ruler,
      title: 'Size Ranges',
      details: ['2-3 inches (Small)', '3-5 inches (Medium)', '5-7 inches (Large)', '7+ inches (Extra Large)']
    },
    {
      icon: Package,
      title: 'Packaging Options',
      details: ['Bulk wholesale boxes', 'Individual wrapped units', 'Gift presentation sets', 'Custom packaging available']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      details: ['Doctor-verified processing', 'Health standard compliance', 'Natural purity guaranteed', 'No chemical treatments']
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      details: ['Hand-harvested only', 'Ecosystem preservation', 'Seasonal timing respected', 'Renewable resource management']
    }
  ];

  const applications = [
    {
      category: 'Luxury Spas',
      description: 'Premium treatments and therapies',
      uses: ['Facial cleansing', 'Body exfoliation', 'Massage therapy', 'Aromatherapy treatments']
    },
    {
      category: 'Medical & Therapeutic',
      description: 'Healthcare and wellness applications',
      uses: ['Gentle patient care', 'Therapeutic cleansing', 'Sensitive skin treatments', 'Recovery care']
    },
    {
      category: 'Beauty & Cosmetics',
      description: 'Professional beauty applications',
      uses: ['Makeup removal', 'Skin preparation', 'Product application', 'Gentle exfoliation']
    },
    {
      category: 'Retail Distribution',
      description: 'Consumer market products',
      uses: ['Personal care items', 'Gift products', 'Bathroom accessories', 'Natural lifestyle products']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 pearl-gradient opacity-30" />
          <div className="absolute top-0 right-0 w-96 h-96 luxury-gradient rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 ocean-gradient rounded-full blur-2xl opacity-15" />
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
              <span className="text-sm font-medium text-primary tracking-wide">OUR PRODUCTS</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-shimmer">Premium Natural</span>
              <br />
              <span className="text-primary">Mediterranean Sponges</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-crimson max-w-3xl mx-auto">
              Discover our comprehensive collection of hand-harvested natural sea sponges, 
              carefully graded and sized for wholesale distribution to luxury spas, medical facilities, and retail partners worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Types */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ocean-gradient opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-shimmer">Sponge Varieties</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Four distinct types of Mediterranean sponges, each with unique characteristics and applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {productTypes.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={isDesktop ? { y: -8, scale: 1.02 } : {}}
                className="glass-luxury rounded-3xl p-8 lg:hover:shadow-luxury transition-luxury group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <motion.div
                    whileHover={isDesktop ? { scale: 1.1, rotate: 5 } : {}}
                    className={`w-16 h-16 ${product.gradient} rounded-2xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury flex-shrink-0`}
                  >
                    <product.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-3">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-inter mb-6">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Available Sizes:</h4>
                    <div className="space-y-2">
                      {product.sizes.map((size, sizeIndex) => (
                        <div key={sizeIndex} className="glass-luxury rounded-xl p-3 text-sm font-medium text-foreground">
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Grades */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 luxury-gradient opacity-5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pearl-gradient rounded-full blur-3xl opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-shimmer">Quality Grades</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Three distinct quality grades to meet different wholesale requirements and price points
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {qualityGrades.map((grade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={isDesktop ? { y: -8, scale: 1.02 } : {}}
                className="glass-luxury rounded-3xl p-8 text-center lg:hover:shadow-luxury transition-luxury group"
              >
                <div className={`text-4xl font-bold ${grade.color} mb-4`}>
                  {grade.percentage}
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-4">
                  {grade.grade}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-inter mb-6">
                  {grade.description}
                </p>
                
                <div className="space-y-3">
                  {grade.characteristics.map((characteristic, charIndex) => (
                    <div key={charIndex} className="flex items-center gap-3 justify-start">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground text-left">{characteristic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 pearl-gradient opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-shimmer">Product Specifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Detailed specifications and options for wholesale buyers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={isDesktop ? { y: -8, scale: 1.05 } : {}}
                className="glass-luxury rounded-3xl p-8 text-center lg:hover:shadow-luxury transition-luxury group"
              >
                <motion.div
                  whileHover={isDesktop ? { scale: 1.1, rotate: 5 } : {}}
                  className="w-16 h-16 luxury-gradient rounded-2xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury mx-auto mb-6"
                >
                  <spec.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-4">
                  {spec.title}
                </h3>
                
                <div className="space-y-2">
                  {spec.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-sm text-muted-foreground">
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ocean-gradient opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-shimmer">Market Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Diverse applications across luxury, medical, beauty, and retail markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={isDesktop ? { y: -8, scale: 1.02 } : {}}
                className="glass-luxury rounded-3xl p-8 lg:hover:shadow-luxury transition-luxury group"
              >
                <h3 className="text-2xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-3">
                  {application.category}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-inter mb-6">
                  {application.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {application.uses.map((use, useIndex) => (
                    <div key={useIndex} className="glass-luxury rounded-xl p-3 text-sm font-medium text-foreground">
                      {use}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StickyFloatingButtons />
    </div>
  );
};

export default Products;