import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'products', path: '/products' },
    { key: 'gallery', path: '/gallery' },
    { key: 'contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkIsDesktop);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  return (
    <motion.nav
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
        isScrolled
          ? 'glass-luxury border-b border-primary/10 shadow-large backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={isDesktop ? { scale: 1.05, rotate: 5 } : {}}
              className="w-10 h-10 luxury-gradient rounded-xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury"
            >
              <Waves className="h-6 w-6 text-white" />
            </motion.div>
            <motion.div
              whileHover={isDesktop ? { scale: 1.02 } : {}}
              className="flex flex-col"
            >
              <span className="text-2xl lg:text-3xl font-bold text-shimmer">
                Zarzis Éponge
              </span>
              <span className="text-xs text-muted-foreground font-inter tracking-wider">
                PREMIUM MEDITERRANEAN
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-luxury lg:hover:text-primary group ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                <span className="relative z-10">{t(`nav.${item.key}`)}</span>
                
                {/* Enhanced hover effect */}
                <div className="absolute inset-0 rounded-xl bg-primary/10 scale-0 lg:group-hover:scale-100 transition-luxury opacity-0 lg:group-hover:opacity-100" />
                
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-1 luxury-gradient rounded-full shadow-glow"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* CTA Button for desktop */}
            <div className="hidden md:block">
              <Button 
                variant="outline"
                size="sm"
                className="glass-luxury border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-luxury font-semibold px-6 rounded-xl shadow-soft hover:shadow-glow"
              >
                contact us
              </Button>
            </div>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-11 w-11 px-0 glass-luxury hover:bg-primary/10 transition-luxury rounded-xl"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="glass-luxury border-primary/10 backdrop-blur-2xl w-80"
              >
                <div className="flex flex-col space-y-8 mt-12">
                  {/* Mobile logo */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-8 h-8 luxury-gradient rounded-lg flex items-center justify-center">
                      <Waves className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-shimmer">Zarzis Éponge</span>
                    </div>
                  </div>

                  {/* Mobile navigation */}
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-lg font-medium transition-luxury lg:hover:text-primary p-3 rounded-xl lg:hover:bg-primary/5 ${
                          location.pathname === item.path
                            ? 'text-primary bg-primary/10'
                            : 'text-foreground/80'
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pt-8 border-t border-primary/10"
                  >
                    <Button 
                      className="w-full luxury-gradient text-white shadow-luxury lg:hover:shadow-glow transition-luxury font-semibold py-3 rounded-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Your Premium Sponges
                    </Button>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};