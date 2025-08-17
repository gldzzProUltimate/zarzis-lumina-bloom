import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'gr', name: 'Ελληνικά', flag: '🇬🇷', nativeName: 'Ελληνικά' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', nativeName: 'Italiano' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-11 w-11 px-0 glass-luxury hover:bg-primary/10 transition-luxury rounded-xl shadow-soft hover:shadow-medium group"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Globe className="h-5 w-5" />
          </motion.div>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="glass-luxury border-primary/10 backdrop-blur-2xl shadow-large min-w-48 rounded-2xl p-2"
      >
        <div className="px-3 py-2 mb-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Select Language
          </p>
        </div>
        
        {languages.map((language, index) => (
          <motion.div
            key={language.code}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <DropdownMenuItem
              onClick={() => handleLanguageChange(language.code)}
              className={`cursor-pointer transition-luxury rounded-xl p-3 m-1 group ${
                i18n.language === language.code 
                  ? 'bg-primary/10 text-primary shadow-soft' 
                  : 'hover:bg-primary/5 hover:text-primary'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{language.nativeName}</span>
                    <span className="text-xs text-muted-foreground">{language.name}</span>
                  </div>
                </div>
                
                {i18n.language === language.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <Check className="h-4 w-4 text-primary" />
                  </motion.div>
                )}
              </div>
            </DropdownMenuItem>
          </motion.div>
        ))}
        
        <div className="border-t border-primary/10 mt-2 pt-2">
          <div className="px-3 py-2">
            <p className="text-xs text-muted-foreground">
              More languages coming soon
            </p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};