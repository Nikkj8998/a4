import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Truck, Trash2, Zap, Heart, Construction, Lightbulb, MapPin, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CivicAmenities = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const sliderImages = [
    "/src/assets/solar-hero.png",
    "/src/assets/eriksha-hero.png",
    "/src/assets/agri-bank-1.png",
    "/attached_assets/shared_image_(30)_1768280952192.jfif",
    "/attached_assets/shared_image_(39)_1768281748403.jpg"
  ];

  const initiatives = [
    {
      title: "Safe Drinking Water Access",
      subtitle: "The Right to Clean Water",
      icon: <Droplets className="w-10 h-10" />,
      content: "We are committed to the right to clean water. Our infrastructure projects focus on delivering safe, potable drinking water directly to households, reducing waterborne diseases and the burden of fetching water.",
      features: ["Potable Water Access", "Infrastructure Projects", "Disease Reduction", "Household Delivery"],
      image: "/attached_assets/shared_image_(30)_1768280952192.jfif",
      color: "bg-blue-50"
    },
    {
      title: "Rural Connectivity & Transport",
      subtitle: "Bridging the Gap",
      icon: <Truck className="w-10 h-10" />,
      content: "Bridging the gap between remote villages and essential services. We work to improve transportation networks, ensuring that markets, hospitals, and schools are within reach for everyone.",
      features: ["Improved Networks", "Access to Markets", "Healthcare Linkages", "School Connectivity"],
      image: "/src/assets/eriksha-hero.png",
      color: "bg-slate-50"
    },
    {
      title: "Sanitation & Public Hygiene",
      subtitle: "Dignity and Health",
      icon: <Trash2 className="w-10 h-10" />,
      content: "We promote dignity and health through improved sanitation. Our initiatives include constructing toilets and running hygiene awareness campaigns to create open-defecation-free communities.",
      features: ["Toilet Construction", "Hygiene Campaigns", "ODF Communities", "Public Health focus"],
      image: "/attached_assets/shared_image_(39)_1768281748403.jpg",
      color: "bg-emerald-50"
    },
    {
      title: "Renewable Energy Solutions",
      subtitle: "Empowering Villages",
      icon: <Zap className="w-10 h-10" />,
      content: "Empowering villages with clean energy. We promote the adoption of biogas plants, fuel-efficient cookstoves, and solar-powered lights and water pumps to reduce dependency on fossil fuels.",
      features: ["Solar Water Pumps", "Biogas Plants", "Efficient Cookstoves", "Solar Lighting"],
      image: "/src/assets/solar-hero.png",
      color: "bg-amber-50"
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-foreground font-body">
      <Navbar />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="/src/assets/solar-hero.png" 
              alt="Civic Amenities & Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/20 to-forest-dark/80"></div>
          </div>
          <div className="container-wide relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-body text-golden text-sm md:text-base tracking-[0.3em] uppercase mb-6 block font-bold">
                Thematic Program
              </span>
              <h1 className="font-display text-5xl md:text-8xl text-cream mb-8 leading-[1.1]">
                Civic Amenities <br /> <span className="text-golden">& Services</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-cream/90 max-w-4xl mx-auto leading-relaxed font-light">
                Improving quality of life through essential infrastructure, safe water, clean energy, and better connectivity.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-golden to-transparent"></div>
          </div>
        </section>

        {/* Executive Summary Section */}
        <section className="section-padding overflow-hidden">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal direction="left">
                <div className="space-y-10">
                  <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-wider">
                    Infrastructure & Essentials
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
                    Building the Foundation <br /> for Better Living
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Access to basic civic amenities is a fundamental right. We focus on building resilient infrastructure that brings essential services to the doorstep of every rural household.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <Construction className="text-amber-600" />, text: "Last-mile infrastructure development" },
                      { icon: <Lightbulb className="text-blue-600" />, text: "Sustainable and renewable energy adoption" },
                      { icon: <MapPin className="text-emerald-600" />, text: "Enhanced connectivity for remote regions" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="font-semibold text-foreground/80">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-golden/20 rounded-3xl blur-2xl group-hover:bg-golden/30 transition-all duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-6 border border-border/50">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-display text-2xl text-primary">Service in Action</h3>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      </div>
                    </div>
                    <Carousel 
                      opts={{ align: "start", loop: true }}
                      plugins={[ Autoplay({ delay: 3500 }) ]}
                      className="w-full"
                    >
                      <CarouselContent>
                        {sliderImages.map((src, index) => (
                          <CarouselItem key={index}>
                            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-inner">
                              <img src={src} alt={`Operational impact ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-center gap-4 mt-8">
                        <CarouselPrevious className="static translate-y-0 h-12 w-12 border-2 border-primary/20 hover:bg-primary hover:text-white transition-all" />
                        <CarouselNext className="static translate-y-0 h-12 w-12 border-2 border-primary/20 hover:bg-primary hover:text-white transition-all" />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Deep Initiatives Section */}
        <section className="section-padding bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cream to-transparent"></div>
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-24">
                <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Building Place</span>
                <h2 className="font-display text-4xl md:text-6xl text-foreground mb-8">Core Initiatives</h2>
                <div className="h-1.5 w-24 bg-golden mx-auto rounded-full"></div>
              </div>
            </ScrollReveal>

            <div className="space-y-32">
              {initiatives.map((initiative, i) => (
                <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"}>
                  <div id={initiative.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`lg:col-span-7 relative group ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                        <img src={initiative.image} alt={initiative.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                          <p className="text-white font-display text-xl">{initiative.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`lg:col-span-5 space-y-8 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                      <div className={`w-20 h-20 ${initiative.color} rounded-2xl flex items-center justify-center text-primary shadow-sm border border-primary/10`}>
                        {initiative.icon}
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-display text-3xl md:text-4xl text-primary leading-tight">{initiative.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {initiative.content}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {initiative.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 group/feat">
                            <div className="w-2 h-2 rounded-full bg-golden group-hover/feat:w-4 transition-all"></div>
                            <span className="text-sm font-bold text-foreground/70 uppercase tracking-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Vision Callout */}
        <section className="section-padding bg-forest-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
          <div className="container-wide relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <ScrollReveal>
                <Heart className="w-16 h-16 text-golden mx-auto mb-8 animate-pulse" />
                <h2 className="font-display text-4xl md:text-6xl text-cream leading-tight">
                  A resilient <span className="text-golden italic">Community</span> starts with reliable access to essential services.
                </h2>
                <p className="text-xl md:text-2xl text-cream/80 font-light max-w-3xl mx-auto">
                  By providing clean water, renewable energy, and better transport, we are not just building infrastructure; we are building hope and a better future for rural India.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display text-golden mb-2">Place</div>
                    <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">Building Infrastructure</div>
                  </div>
                  <div className="w-px h-16 bg-white/10 hidden md:block"></div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display text-golden mb-2">Service</div>
                    <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">Safe Essentials</div>
                  </div>
                  <div className="w-px h-16 bg-white/10 hidden md:block"></div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display text-golden mb-2">100%</div>
                    <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">Rural Reach</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CivicAmenities;
