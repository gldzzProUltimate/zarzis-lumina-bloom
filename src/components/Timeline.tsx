
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

interface TimelineProps {
  steps: TimelineStep[];
}

export const Timeline = ({ steps }: TimelineProps) => {
  return (
    <div className="w-full">
      {/* Desktop Timeline - Horizontal */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-border z-0" />
          
          {/* Timeline steps */}
          <div className="relative z-10 flex justify-between items-start">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex flex-col items-center max-w-xs">
                  {/* Circle with icon */}
                  <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center shadow-medium bg-background border-4 border-background">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div className="mt-4 mb-2 text-2xl font-bold text-primary">
                    {step.step}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-center mb-4">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-sm text-muted-foreground text-center">
                        • {detail}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border z-0" />
          
          {/* Timeline steps */}
          <div className="relative z-10 space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  {/* Circle with icon */}
                  <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center shadow-medium bg-background border-4 border-background flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    {/* Step number */}
                    <div className="text-2xl font-bold text-primary mb-2">
                      {step.step}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-sm text-muted-foreground">
                          • {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
