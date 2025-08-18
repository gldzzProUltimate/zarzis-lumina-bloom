import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { StickyFloatingButtons } from '@/components/StickyFloatingButtons';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Building,
  Globe,
  Users,
  Package,
  CheckCircle,
  MessageSquare,
  Star,
  Award
} from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Simulate form submission
    toast.success('Thank you for your inquiry! We will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      country: '',
      inquiryType: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'wholesale@zarziseponge.com',
      description: 'Send us your wholesale inquiries',
      gradient: 'luxury-gradient'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+216 XX XXX XXX',
      description: 'Speak directly with our team',
      gradient: 'ocean-gradient'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Zarzis, Tunisia',
      description: 'Mediterranean headquarters',
      gradient: 'pearl-gradient'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Mon-Fri: 8AM-6PM GMT+1',
      description: 'Mediterranean time zone',
      gradient: 'luxury-gradient'
    }
  ];

  const inquiryTypes = [
    'Wholesale Pricing',
    'Product Samples',
    'Bulk Orders',
    'Partnership Opportunities',
    'Quality Certifications',
    'Shipping & Logistics',
    'Custom Requirements',
    'Other'
  ];

  const whyContactUs = [
    {
      icon: Users,
      title: 'Dedicated Account Manager',
      description: 'Personal service for all wholesale clients'
    },
    {
      icon: Package,
      title: 'Custom Solutions',
      description: 'Tailored packaging and sizing options'
    },
    {
      icon: Globe,
      title: 'Global Shipping',
      description: 'Worldwide delivery via air or sea'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Doctor-verified premium standards'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rossi',
      company: 'Luxury Spa Group, Italy',
      message: 'Exceptional quality sponges and outstanding customer service. Been working with them for 3 years.',
      rating: 5
    },
    {
      name: 'Jean Dubois',
      company: 'Premium Beauty Supply, France',
      message: 'Reliable supplier with consistent quality. Their Mediterranean sponges are the best in the market.',
      rating: 5
    },
    {
      name: 'Andreas Müller',
      company: 'Wellness Distributors, Germany',
      message: 'Professional team, competitive pricing, and excellent packaging. Highly recommended for wholesale.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 luxury-gradient opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 ocean-gradient rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 pearl-gradient rounded-full blur-2xl opacity-15" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-8 shadow-medium">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">CONTACT US</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-shimmer">Let's Start Your</span>
              <br />
              <span className="text-primary">Wholesale Journey</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-crimson max-w-3xl mx-auto">
              Connect with our Mediterranean sponge specialists. Whether you're seeking wholesale pricing, 
              product samples, or partnership opportunities, we're here to help your business succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 pearl-gradient opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-shimmer">Get In Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              Multiple ways to connect with our Mediterranean sponge experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="glass-luxury rounded-3xl p-8 text-center hover:shadow-luxury transition-luxury group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${info.gradient} rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-luxury mx-auto mb-6`}
                >
                  <info.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {info.title}
                </h3>
                
                <p className="text-lg font-medium text-primary mb-2">
                  {info.info}
                </p>
                
                <p className="text-muted-foreground text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Why Contact Us */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 ocean-gradient opacity-5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 luxury-gradient rounded-full blur-3xl opacity-10" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-luxury rounded-3xl p-8 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center shadow-medium">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Send Us a Message</h3>
                  <p className="text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="glass-luxury border-0 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="glass-luxury border-0 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                      className="glass-luxury border-0 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Country
                    </label>
                    <Input
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Your country"
                      className="glass-luxury border-0 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full glass-luxury border-0 rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your wholesale requirements..."
                    rows={6}
                    className="glass-luxury border-0 focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full luxury-gradient text-white hover:shadow-luxury transition-luxury"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  <span className="text-shimmer">Why Choose Us?</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-crimson">
                  Join hundreds of satisfied wholesale partners who trust us for premium Mediterranean sponges
                </p>
              </div>

              <div className="space-y-6">
                {whyContactUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="glass-luxury rounded-2xl p-6 hover:shadow-medium transition-luxury"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 ocean-gradient rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                        <reason.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {reason.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 pearl-gradient opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-shimmer">Client Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-crimson">
              What our wholesale partners say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-luxury rounded-3xl p-8 hover:shadow-luxury transition-luxury"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed font-crimson italic mb-6">
                  "{testimonial.message}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center shadow-medium">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StickyFloatingButtons />
    </div>
  );
};

export default Contact;