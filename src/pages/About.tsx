import React from 'react';
import { Navigation } from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground">Coming soon - Learn about our story and heritage.</p>
        </div>
      </div>
    </div>
  );
};

export default About;