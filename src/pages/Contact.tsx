import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { StickyFloatingButtons } from "@/components/StickyFloatingButtons";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import ContactForm from "@/components/ContactForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Globe,
  Users,
  Package,
  Star,
  Award,
} from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    inquiryType: "",
    message: "",
  });

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    toast.success(
      "Thank you for your inquiry! We will contact you within 24 hours."
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      inquiryType: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "wholesale@zarziseponge.com",
      description: "Send us your wholesale inquiries",
      gradient: "luxury-gradient",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+216 XX XXX XXX",
      description: "Speak directly with our team",
      gradient: "ocean-gradient",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Zarzis, Tunisia",
      description: "Mediterranean headquarters",
      gradient: "pearl-gradient",
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 8AM-6PM GMT+1",
      description: "Mediterranean time zone",
      gradient: "luxury-gradient",
    },
  ];

  const inquiryTypes = [
    "Wholesale Pricing",
    "Product Samples",
    "Bulk Orders",
    "Partnership Opportunities",
    "Quality Certifications",
    "Shipping & Logistics",
    "Custom Requirements",
    "Other",
  ];

  const whyContactUs = [
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal service for all wholesale clients",
    },
    {
      icon: Package,
      title: "Custom Solutions",
      description: "Tailored packaging and sizing options",
    },
    {
      icon: Globe,
      title: "Global Shipping",
      description: "Worldwide delivery via air or sea",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Doctor-verified premium standards",
    },
  ];

  const testimonials = [
    {
      name: "Maria Rossi",
      company: "Luxury Spa Group, Italy",
      message:
        "Exceptional quality sponges and outstanding customer service. Been working with them for 3 years.",
      rating: 5,
    },
    {
      name: "Jean Dubois",
      company: "Premium Beauty Supply, France",
      message:
        "Reliable supplier with consistent quality. Their Mediterranean sponges are the best in the market.",
      rating: 5,
    },
    {
      name: "Andreas Müller",
      company: "Wellness Distributors, Germany",
      message:
        "Professional team, competitive pricing, and excellent packaging. Highly recommended for wholesale.",
      rating: 5,
    },
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
              <span className="text-sm font-medium text-primary tracking-wide">
                CONTACT US
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-shimmer">Let's Start Your</span>
              <br />
              <span className="text-primary">Wholesale Journey</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed font-crimson max-w-3xl mx-auto">
              Connect with our Mediterranean sponge specialists. Whether you're
              seeking wholesale pricing, product samples, or partnership
              opportunities, we're here to help your business succeed.
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
                whileHover={isDesktop ? { y: -8, scale: 1.05 } : {}}
                className="glass-luxury rounded-3xl p-8 text-center lg:hover:shadow-luxury transition-luxury group"
              >
                <motion.div
                  whileHover={isDesktop ? { scale: 1.1, rotate: 5 } : {}}
                  className={`w-16 h-16 ${info.gradient} rounded-2xl flex items-center justify-center shadow-medium lg:group-hover:shadow-glow transition-luxury mx-auto mb-6`}
                >
                  <info.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold text-foreground lg:group-hover:text-primary transition-colors mb-2">
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

        <ContactForm />
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
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-muted-foreground leading-relaxed font-crimson italic mb-6">
                  "{testimonial.message}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center shadow-medium">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
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
