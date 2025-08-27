import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { StickyFloatingButtons } from '@/components/StickyFloatingButtons';
import { Timeline } from '@/components/Timeline';
import { useTranslation } from 'react-i18next';
import { 
  Waves, 
  Eye, 
  Package, 
  Truck, 
  ShieldCheck, 
  Hand, 
  Microscope, 
  Clock, 
  Users, 
  Award,
  Sparkles,
  CheckCircle,
  Heart,
  Leaf
} from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Hand,
      title: 'Hand Harvesting',
      description: 'Careful collection by experienced divers using traditional Mediterranean methods',
      features: ['40+ years diving experience', 'Sustainable harvesting techniques', 'Selective collection methods', 'Seasonal timing optimization'],
      gradient: 'ocean-gradient',
      shadowClass: 'shadow-ocean'
    },
    {
      icon: Microscope,
      title: 'Quality Processing',
      description: 'No chemicals or machines - only natural cleaning and preparation methods',
      features: ['Chemical-free processing', 'Natural cleaning methods', 'Careful size sorting', 'Texture optimization'],
      gradient: 'pearl-gradient',
      shadowClass: 'shadow-glow'
    },
    {
      icon: ShieldCheck,
      title: 'Medical Verification',
      description: 'Process monitored and approved by doctors for health and safety standards',
      features: ['Doctor-approved process', 'Health standard compliance', 'Safety verification', 'Quality certification'],
      gradient: 'luxury-gradient',
      shadowClass: 'shadow-luxury'
    },
    {
      icon: Package,
      title: 'Safe Storage & Shipping',
      description: 'Doctor-reviewed storage methods with flexible shipping options worldwide',
      features: ['Optimal storage conditions', 'Quick airplane shipping', 'Reliable boat transport', 'Client preference options'],
      gradient: 'ocean-gradient',
      shadowClass: 'shadow-ocean'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Location Scouting',
      description: 'Identifying pristine Mediterranean waters with healthy sponge populations',
      icon: Eye,
      details: ['Water quality assessment', 'Sponge bed mapping', 'Seasonal evaluation', 'Sustainability planning']
    },
    {
      step: '02',
      title: 'Hand Collection',
      description: 'Expert divers carefully harvest sponges using traditional methods',
      icon: Hand,
      details: ['Selective harvesting', 'Depth-specific collection', 'Minimal ecosystem impact', 'Quality selection']
    },
    {
      step: '03',
      title: 'Natural Processing',
      description: 'Chemical-free cleaning and preparation maintaining sponge integrity',
      icon: Heart,
      details: ['Natural cleaning methods', 'Gentle processing', 'Size categorization', 'Quality grading']
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Medical professional verification ensuring health and safety standards',
      icon: ShieldCheck,
      details: ['Doctor inspection', 'Health certification', 'Safety compliance', 'Quality validation']
    },
    {
      step: '05',
      title: 'Storage & Packaging',
      description: 'Optimal storage conditions and secure packaging for worldwide shipping',
      icon: Package,
      details: ['Climate-controlled storage', 'Professional packaging', 'Documentation preparation', 'Shipping coordination']
    },
    {
      step: '06',
      title: 'Global Delivery',
      description: 'Flexible shipping options to wholesale buyers worldwide',
      icon: Truck,
      details: ['Airplane express shipping', 'Reliable boat transport', 'Tracking & insurance', 'Client preference fulfillment']
    }
  ];

  const guarantees = [
    {
      icon: Award,
      title: '100% Natural',
      description: 'No chemicals, artificial treatments, or synthetic materials'
    },
    {
      icon: Leaf,
      title: 'Sustainably Harvested',
      description: 'Eco-friendly methods preserving marine ecosystems'
    },
    {
      icon: ShieldCheck,
      title: 'Medically Verified',
      description: 'Doctor-approved processing and safety standards'
    },
    {
      icon: Users,
      title: 'Wholesale Focused',
      description: 'Dedicated service for international business buyers'
    }
  ];

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
              <span className="text-sm font-medium text-primary tracking-wide">OUR SERVICES</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-shimmer">From Sea to</span>
              <br />
              <span className="text-primary">Your Hand</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-crimson max-w-3xl mx-auto">
              Four decades of expertise in Mediterranean sponge hand-harvesting, processing, and delivery. 
              Every step carefully monitored to ensure the highest quality natural sponges reach our wholesale partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 pearl-gradient opacity-10" />
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
              <span className="text-shimmer">Our Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Comprehensive sponge harvesting and processing services for wholesale buyers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
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
                    className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury flex-shrink-0`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-inter mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 luxury-gradient opacity-5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 ocean-gradient rounded-full blur-3xl opacity-10" />
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
              <span className="text-shimmer">Our Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Six carefully orchestrated steps from Mediterranean waters to your warehouse
            </p>
          </motion.div>

          <Timeline steps={process} />
        </div>
      </section>

      {/* Guarantees */}
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
              <span className="text-shimmer">Our Guarantee</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Quality commitments that set us apart in the Mediterranean sponge industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {guarantees.map((guarantee, index) => (
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
                  <guarantee.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-4">
                  {guarantee.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-inter">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StickyFloatingButtons />
    </div>
  );
};

export default Services;
