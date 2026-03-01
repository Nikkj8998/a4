import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Zap, Heart, ChevronRight, Briefcase, Handshake, Sprout, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const StrengtheningLivelihoods = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const sliderImages = [
    "/attached_assets/shared_image_(20)_1768279435851.jfif",
    "/attached_assets/shared_image_(22)_1768279589814.jfif",
    "/attached_assets/shared_image_(24)_1768279693356.jfif",
    "/src/assets/woman-farmer.jpg"
  ];

  const focusAreas = [
    {
      title: "Sustainable Agriculture & Equipment Banks",
      icon: <Sprout className="w-8 h-8" />,
      content: "We revolutionize traditional farming by introducing organic practices and modern technology. Our \"Equipment Banks\" provide farmers with access to drudgery-reducing tools to boost efficiency, while our training programs ensure they have the skills and high-quality seeds needed for sustainable, chemical-free harvests."
    },
    {
      title: "Livestock Management & Market Linkages",
      icon: <ShoppingCart className="w-8 h-8" />,
      content: "Our livestock program offers comprehensive support for rural families. From breeding and nutrition management to veterinary care, we ensure healthier livestock. Crucially, we establish direct marketing linkages, helping farmers get fair prices for their produce."
    },
    {
      title: "Micro-Entrepreneurship & Financial Support",
      icon: <Briefcase className="w-8 h-8" />,
      content: "We turn aspirations into livelihoods. through targeted training, microfinance support, and continuous \"hand-holding\" mentorship, we empower individuals to launch and sustain their own small businesses, fostering economic independence."
    },
    {
      title: "Community Cooperatives (FPOs & SHGs)",
      icon: <Users className="w-8 h-8" />,
      content: "We believe in the power of the collective. By organizing farmers and women into Farmer Producer Organizations (FPOs) and Self-Help Groups (SHGs), we increase their bargaining power, reduce costs, and create a resilient community support system."
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <Navbar />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="/attached_assets/shared_image_(22)_1768279589814.jfif" 
              alt="Strengthening Livelihoods" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Our Programs
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl text-cream mb-8 leading-tight"
            >
              Strengthening Livelihoods
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering rural communities through sustainable economic opportunities, skill development, and collective action.
            </motion.p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="space-y-8">
                  <h2 className="font-display text-4xl text-primary">Empowering Rural Prosperity</h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    At ASTHA, we believe that sustainable livelihoods are the cornerstone of rural development. Our multifaceted approach addresses the challenges faced by small-scale farmers and aspiring entrepreneurs, providing them with the tools, knowledge, and support needed to thrive.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <Target className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Impact Driven</h3>
                      <p className="font-body text-sm text-muted-foreground">Focusing on measurable improvements in income and quality of life.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                      <TrendingUp className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-display text-lg mb-2">Sustainable Growth</h3>
                      <p className="font-body text-sm text-muted-foreground">Ensuring long-term viability through eco-friendly practices.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
                  <h3 className="font-display text-2xl text-center mb-6 text-primary">Our Impact in the Community</h3>
                  <Carousel 
                    opts={{ align: "start", loop: true }}
                    plugins={[ Autoplay({ delay: 3000 }) ]}
                    className="w-full"
                  >
                    <CarouselContent>
                      {sliderImages.map((src, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[4/3] rounded-lg overflow-hidden">
                            <img src={src} alt={`Impact slide ${index + 1}`} className="w-full h-full object-cover" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-4">
                      <CarouselPrevious className="static translate-y-0" />
                      <CarouselNext className="static translate-y-0" />
                    </div>
                  </Carousel>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Initiatives Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-foreground mb-4">Our Core Initiatives</h2>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                  Diverse programs tailored to create comprehensive economic opportunities.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {focusAreas.map((area, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-2xl h-full shadow-sm hover:shadow-md transition-shadow border border-border/50">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                      {area.icon}
                    </div>
                    <h3 className="font-display text-2xl mb-4 text-primary">{area.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {area.content}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Empowerment Framework */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="bg-forest-dark rounded-3xl p-8 md:p-16 text-center text-cream relative overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl mb-8 text-golden italic">"Building the foundation for economic independence."</h2>
                <p className="font-body text-xl leading-relaxed opacity-90">
                  Through our Strengthening Livelihoods program, we don't just provide temporary relief; we build the capacity of individuals and communities to sustain themselves and grow, fostering a future where every rural family has the opportunity to prosper.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StrengtheningLivelihoods;
