import React from 'react';
import { Navigation } from '@/components/Navigation';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground">Coming soon - Discover our process and services.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;