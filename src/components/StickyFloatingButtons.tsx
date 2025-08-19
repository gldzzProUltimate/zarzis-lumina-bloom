import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Facebook, MessageCircle, Mail, ChevronUp, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyFloatingButtons = () => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleFacebook = () => {
    console.log('TODO: implement Facebook link');
    // window.open('https://facebook.com/zarziseponge', '_blank');
  };

  const handleWhatsApp = () => {
    console.log('TODO: implement WhatsApp link');
    // window.open('https://wa.me/21612345678', '_blank');
  };

  const handleEmail = () => {
    console.log('TODO: implement email functionality');
    // window.location.href = 'mailto:contact@zarziseponge.com';
  };

  const handlePhone = () => {
    console.log('TODO: implement phone call');
    // window.location.href = 'tel:+21612345678';
  };

  const socialButtons = [
    {
      icon: Facebook,
      label: t('social.facebook'),
      onClick: handleFacebook,
      className: 'bg-[#1877F2] lg:hover:bg-[#1877F2]/90 text-white shadow-medium lg:hover:shadow-large',
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      label: t('social.whatsapp'),
      onClick: handleWhatsApp,
      className: 'bg-[#25D366] lg:hover:bg-[#25D366]/90 text-white shadow-medium lg:hover:shadow-large',
      delay: 0.2,
    },
    {
      icon: Phone,
      label: 'Call Us',
      onClick: handlePhone,
      className: 'luxury-gradient text-white shadow-luxury lg:hover:shadow-glow',
      delay: 0.3,
    },
    {
      icon: Mail,
      label: t('social.email'),
      onClick: handleEmail,
      className: 'ocean-gradient text-white shadow-ocean lg:hover:shadow-glow',
      delay: 0.4,
    },
  ];

  return (
    <TooltipProvider>
      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end space-y-4">
        {/* Main Contact Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="lg"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-16 w-16 rounded-full luxury-gradient text-white shadow-luxury lg:hover:shadow-glow transition-luxury group relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MessageCircle className="h-7 w-7" />
                </motion.div>
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full luxury-gradient animate-ping opacity-30" />
                
                <span className="sr-only">Contact Options</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="glass-luxury border-primary/20 shadow-large">
              <p className="font-medium">Contact Us</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>

        {/* Social Media Buttons */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col space-y-3"
            >
              {socialButtons.map((button, index) => {
                const IconComponent = button.icon;
                return (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, x: 30, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 30, scale: 0.8 }}
                        transition={{ 
                          delay: button.delay,
                          type: "spring", 
                          stiffness: 300 
                        }}
                        whileHover={isDesktop ? { scale: 1.1, x: -5 } : {}}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          onClick={button.onClick}
                          className={`
                            h-14 w-14 rounded-2xl transition-luxury group
                            ${button.className}
                          `}
                        >
                          <IconComponent className="h-6 w-6" />
                          <span className="sr-only">{button.label}</span>
                        </Button>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="glass-luxury border-primary/20 shadow-large">
                      <p className="font-medium">{button.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 20 }}
                  whileHover={isDesktop ? { scale: 1.1, y: -2 } : {}}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    size="sm"
                    onClick={scrollToTop}
                    className="h-12 w-12 rounded-xl glass-luxury lg:hover:bg-primary/20 text-primary shadow-soft lg:hover:shadow-medium transition-luxury"
                  >
                    <ChevronUp className="h-5 w-5" />
                    <span className="sr-only">Scroll to top</span>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="left" className="glass-luxury border-primary/20 shadow-large">
                <p className="font-medium">Back to Top</p>
              </TooltipContent>
            </Tooltip>
          )}
        </AnimatePresence>

        {/* Floating particles around buttons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 luxury-gradient rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 40 - 20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};