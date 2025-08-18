import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { StickyFloatingButtons } from '@/components/StickyFloatingButtons';
import { useTranslation } from 'react-i18next';
import { Award, Users, Shield, Leaf, Waves, Heart, Star, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const heritage = [
    {
      year: '1980s',
      title: 'Humble Beginnings',
      description: 'Started as a small family operation in the pristine waters of Tunisia',
      icon: Waves,
      gradient: 'ocean-gradient'
    },
    {
      year: '1990s',
      title: 'Mediterranean Expansion',
      description: 'Extended operations to Italian waters, mastering diverse sponge varieties',
      icon: MapPin,
      gradient: 'luxury-gradient'
    },
    {
      year: '2000s',
      title: 'Quality Certification',
      description: 'Achieved international health standards and doctor verification',
      icon: Shield,
      gradient: 'pearl-gradient'
    },
    {
      year: '2020s',
      title: 'Global Wholesale',
      description: 'Serving international wholesale buyers with premium natural sponges',
      icon: Star,
      gradient: 'luxury-gradient'
    }
  ];

  const locations = [
    { country: 'Tunisia', cities: ['Zarzis', 'Djerba', 'Kerkennah', 'Mahdia', 'Qlibya'], flag: '🇹🇳', description: 'Rich Mediterranean coastal waters with pristine sponge beds' },
    { country: 'Italy', cities: ['Pantelleria', 'Lampedusa'], flag: '🇮🇹', description: 'Crystal clear volcanic island waters producing premium quality sponges' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Family Heritage',
      description: 'Four decades of Mediterranean tradition passed down through generations',
      gradient: 'luxury-gradient'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Hand-harvesting methods that preserve marine ecosystems for future generations',
      gradient: 'ocean-gradient'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising quality standards verified by medical professionals',
      gradient: 'pearl-gradient'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships with wholesale buyers worldwide',
      gradient: 'luxury-gradient'
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
              <span className="text-sm font-medium text-primary tracking-wide">OUR STORY</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-shimmer">Four Decades of</span>
              <br />
              <span className="text-primary">Mediterranean Excellence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-crimson max-w-3xl mx-auto">
              From the crystal-clear waters of Tunisia and Italy, we've been hand-harvesting the finest natural sea sponges, 
              building a legacy of quality, sustainability, and trust with wholesale buyers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 luxury-gradient opacity-5" />
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
              <span className="text-shimmer">Our Heritage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              A journey through decades of dedication to Mediterranean sponge craftsmanship
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {heritage.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-8 mb-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`glass-luxury rounded-3xl p-8 ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 ${item.gradient} rounded-2xl flex items-center justify-center shadow-medium`}>
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{item.year}</div>
                        <div className="text-lg font-semibold text-foreground">{item.title}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-inter">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ocean-gradient opacity-10" />
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
              <span className="text-shimmer">Mediterranean Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Seven pristine coastal locations where we harvest the finest natural sponges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-luxury rounded-3xl p-8 hover:shadow-luxury transition-luxury"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{location.flag}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{location.country}</h3>
                    <p className="text-muted-foreground">{location.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">Harvesting Locations:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {location.cities.map((city, cityIndex) => (
                      <div
                        key={city}
                        className="glass-luxury rounded-xl p-3 text-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              <span className="text-shimmer">Our Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              The principles that guide our Mediterranean sponge harvesting tradition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-luxury rounded-3xl p-8 text-center hover:shadow-luxury transition-luxury group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${value.gradient} rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-luxury mx-auto mb-6`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-4">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-inter">
                  {value.description}
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

export default About;