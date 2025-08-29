import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    country: ''
  });

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Set subject based on URL parameter
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData((prev) => ({
        ...prev,
        subject: subjectParam,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Determine API URL based on environment
      const apiUrl = import.meta.env.PROD
        ? 'https://zarzis-eponge-api.onrender.com/api/send-email' // Production URL for zarzis-eponge
        : 'http://localhost:3001/api/send-email'; // Development URL
      console.log({apiUrl})
      const body = JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        company: formData.company,
        country: formData.country,
        language: 'en', // Default to English for zarzis-eponge
      });
      console.log({body})
      // Send data to our API endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
      console.log({response})

      const data = await response.json();
      console.log({data})

      if (data.success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          company: '',
          country: ''
        });

        // Show success message
        toast.success('Thank you for your inquiry! We will contact you within 24 hours.');
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);

      // Show error message
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'contact@zarzis-eponge.com',
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

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 pearl-gradient opacity-20" />
        <div className="absolute top-1/4 right-0 w-96 h-96 luxury-gradient rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 ocean-gradient rounded-full blur-2xl opacity-15" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-8 shadow-medium">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">CONTACT US</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-shimmer">Let's Start Your</span>
            <br />
            <span className="text-primary">Wholesale Journey</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed font-crimson max-w-3xl mx-auto">
            Connect with our Mediterranean sponge specialists. Whether you're seeking wholesale pricing, 
            product samples, or partnership opportunities, we're here to help your business succeed.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="glass-luxury rounded-3xl p-8 text-center lg:hover:shadow-luxury transition-luxury group"
            >
              <div
                className={`w-16 h-16 ${info.gradient} rounded-2xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury mx-auto mb-6`}
              >
                <info.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-2">
                {info.title}
              </h3>
              
              <p className="text-lg font-medium text-primary mb-2">
                {info.info}
              </p>
              
              <p className="text-muted-foreground text-sm">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="glass-luxury border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center shadow-medium">
                    <Send className="h-6 w-6 text-white" />
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                        placeholder="Your country"
                        className="glass-luxury border-0 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Inquiry Type
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger className="glass-luxury border-0 focus:ring-2 focus:ring-primary/20">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your wholesale requirements..."
                      rows={6}
                      className="glass-luxury border-0 focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full luxury-gradient text-white lg:hover:shadow-luxury transition-luxury"
                    disabled={isSubmitting}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-luxury border-0 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 font-crimson">
                  Ready to discover the finest Mediterranean sponges? Our team is here to help you find the perfect wholesale solution.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center shadow-medium flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                      <p className="text-primary font-medium">contact@zarzis-eponge.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 ocean-gradient rounded-full flex items-center justify-center shadow-medium flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                      <p className="text-primary font-medium">+216 XX XXX XXX</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-6PM GMT+1</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 pearl-gradient rounded-full flex items-center justify-center shadow-medium flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                      <p className="text-primary font-medium">Zarzis, Tunisia</p>
                      <p className="text-sm text-muted-foreground">Mediterranean headquarters</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;