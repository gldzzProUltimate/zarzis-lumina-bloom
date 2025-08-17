import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ValuePropositions } from '@/components/ValuePropositions';
import { AboutPreview } from '@/components/AboutPreview';
import { ServicesPreview } from '@/components/ServicesPreview';
import { ProductsPreview } from '@/components/ProductsPreview';
import { GalleryPreview } from '@/components/GalleryPreview';
import { ContactPreview } from '@/components/ContactPreview';
import { StickyFloatingButtons } from '@/components/StickyFloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ValuePropositions />
        <AboutPreview />
        <ServicesPreview />
        <ProductsPreview />
        <GalleryPreview />
        <ContactPreview />
      </main>
      <StickyFloatingButtons />
    </div>
  );
};

export default Index;
