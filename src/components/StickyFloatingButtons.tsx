import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Facebook, MessageCircle, Mail, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyFloatingButtons = () => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
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

  const socialButtons = [
    {
      icon: Facebook,
      label: t('social.facebook'),
      onClick: handleFacebook,
      className: 'bg-[#1877F2] hover:bg-[#1877F2]/90 text-white',
    },
    {
      icon: MessageCircle,
      label: t('social.whatsapp'),
      onClick: handleWhatsApp,
      className: 'bg-[#25D366] hover:bg-[#25D366]/90 text-white',
    },
    {
      icon: Mail,
      label: t('social.email'),
      onClick: handleEmail,
      className: 'bg-primary hover:bg-primary/90 text-primary-foreground',
    },
  ];

  return (
    <TooltipProvider>
      <div className="fixed right-4 bottom-4 z-50 flex flex-col space-y-3">
        {/* Social Media Buttons */}
        {socialButtons.map((button, index) => {
          const IconComponent = button.icon;
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    onClick={button.onClick}
                    className={`
                      h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-smooth animate-float
                      ${button.className}
                    `}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{button.label}</span>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="left" className="glass border-primary/20">
                <p>{button.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    onClick={scrollToTop}
                    className="h-12 w-12 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-smooth"
                  >
                    <ChevronUp className="h-5 w-5" />
                    <span className="sr-only">Scroll to top</span>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="left" className="glass border-primary/20">
                <p>Scroll to top</p>
              </TooltipContent>
            </Tooltip>
          )}
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
};