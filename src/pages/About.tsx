
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { StickyFloatingButtons } from '@/components/StickyFloatingButtons';
import { Heritage } from '@/components/Heritage';
import { useTranslation } from 'react-i18next';
import { Award, Users, Shield, Leaf, Heart, Star, MapPin, Sparkles } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
          <div className="text-center max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <Heritage />

      {/* Locations */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ocean-gradient opacity-10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pearl-gradient rounded-full blur-3xl opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-shimmer">Mediterranean Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Seven pristine coastal locations where we harvest the finest natural sponges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={location.country}
                className="glass-luxury rounded-3xl p-8 lg:hover:shadow-luxury transition-luxury"
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
              </div>
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
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-shimmer">Our Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              The principles that guide our Mediterranean sponge harvesting tradition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-luxury rounded-3xl p-8 text-center lg:hover:shadow-luxury transition-luxury group"
              >
                <div
                  className={`w-16 h-16 ${value.gradient} rounded-2xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury mx-auto mb-6`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-4">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-inter">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StickyFloatingButtons />
    </div>
  );
};

export default About;
