import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ProductsPreview = () => {
  const { t } = useTranslation();

  const products = [
    {
      key: "zimokhas",
      imageUrl:
        "https://stepma-eponges.com/wp-content/uploads/2017/01/zimokhas.png",
    },
    {
      key: "scaphandre",
      imageUrl:
        "https://stepma-eponges.com/wp-content/uploads/2017/01/scaphandre.png",
    },
    {
      key: "kamakis",
      imageUrl:
        "https://stepma-eponges.com/wp-content/uploads/2017/01/kamakis.png",
    },
    {
      key: "chalutier",
      imageUrl:
        "https://stepma-eponges.com/wp-content/uploads/2017/01/chalutier.png",
    },
    {
      key: "elephant_ear",
      imageUrl:
        "https://stepma-eponges.com/wp-content/uploads/2017/01/zimokhas.png",
    },
    {
      key: "madappa",
      imageUrl:
        "https://stepma-eponges.com/wp-content/uploads/2017/01/scaphandre.png",
    },
  ];

  const cards = products.map((product) => ({
    category: t(`products.${product.key}.origin`),
    title: t(`products.${product.key}.name`),
    src: product.imageUrl,
  }));

  const carouselItems = cards.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary-subtle/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 pearl-gradient opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-luxury rounded-full px-6 py-3 mb-6 shadow-medium">
            <Package className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">
              {t("products.title").toUpperCase()}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 font-playfair">
            <span className="text-shimmer">{t("products.title")}</span>
          </h2>
          <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto font-crimson text-muted-foreground">
            {t("products.description")}
          </p>
        </motion.div>

        <Carousel items={carouselItems} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link to="/products">
            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-6 text-lg border-primary text-primary lg:hover:bg-primary lg:hover:text-primary-foreground transition-smooth shadow-soft lg:hover:shadow-glow"
            >
              {t("products.cta")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform lg:group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
