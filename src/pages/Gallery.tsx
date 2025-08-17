import React from 'react';
import { Navigation } from '@/components/Navigation';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-muted-foreground">Coming soon - View our Mediterranean journey.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;