import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Trees, ShieldCheck, Globe, Heart, ChevronRight, Zap, Leaf } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const EnhancingEcosystems = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const sliderImages = [
    "/attached_assets/shared_image_(31)_1768292922461.jfif",
    "/attached_assets/shared_image_(36)_1768292922458.jfif",
    "/attached_assets/shared_image_(41)_1768292922456.jfif",
    "/src/assets/landscape-western-ghats.jpg",
    "/attached_assets/shared_image_(22)_1768292922462.jfif"
  ];

  const initiatives = [
    {
      title: "Water Security & Conservation",
      subtitle: "Water is Life",
      icon: <Droplets className="w-10 h-10" />,
      content: "We implement community-led water conservation structures—such as check dams and rainwater harvesting systems—to ensure year-round water availability for drinking and irrigation.",
      features: ["Check Dams", "Rainwater Harvesting", "Year-round Availability", "Community-led Maintenance"],
      image: "/attached_assets/shared_image_(31)_1768292922461.jfif",
      color: "bg-blue-50"
    },
    {
      title: "Forestation Drives",
      subtitle: "Restoring Green Cover",
      icon: <Trees className="w-10 h-10" />,
      content: "To combat climate change and soil erosion, we lead large-scale forestation initiatives. We work with local communities to plant and nurture trees, restoring the green cover and ecological balance of the region.",
      features: ["Large-scale Planting", "Climate Combat", "Erosion Control", "Community Nurturing"],
      image: "/attached_assets/shared_image_(36)_1768292922458.jfif",
      color: "bg-emerald-50"
    },
    {
      title: "Preservation of Local Flora & Fauna",
      subtitle: "Guardians of the Ecosystem",
      icon: <Leaf className="w-10 h-10" />,
      content: "We are guardians of the local ecosystem. Our programs actively document and protect indigenous flora and fauna, ensuring that the unique biodiversity of the region thrives for future generations.",
      features: ["Biodiversity Documentation", "Indigenous Protection", "Species Conservation", "Future-focused Preservation"],
      image: "/attached_assets/shared_image_(41)_1768292922456.jfif",
      color: "bg-amber-50"
    },
    {
      title: "Eco-Tourism & Community Stewardship",
      subtitle: "Conservation through Leadership",
      icon: <Globe className="w-10 h-10" />,
      content: "Conservation works best when the community leads. We engage locals in documentation projects and promote agro-tourism. Special focus is given to preserving native species and protecting sacred groves and mangroves as community heritage sites.",
      features: ["Agro-Tourism", "Community Documentation", "Sacred Grove Protection", "Heritage Preservation"],
      image: "/attached_assets/shared_image_(22)_1768292922462.jfif",
      color: "bg-purple-50"
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
              src="/src/assets/landscape-western-ghats.jpg" 
              alt="Enhancing Ecosystems" 
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
                Enhancing <br /> <span className="text-golden">Ecosystems</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-cream/90 max-w-4xl mx-auto leading-relaxed font-light">
                Environmental stewardship through water security, forestation, and the preservation of our planet's unique biodiversity.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-golden to-transparent"></div>
          </div>
        </section>

        {/* Executive Strategy Section */}
        <section className="section-padding overflow-hidden">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal direction="left">
                <div className="space-y-10">
                  <div className="inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-wider">
                    Environmental Stewardship
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
                    Restoring Nature <br /> for a Sustainable Planet
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Our approach to ecosystem enhancement is rooted in community participation and scientific preservation. We work to restore the delicate balance between human activity and the natural environment.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <ShieldCheck className="text-emerald-600" />, text: "Protecting sacred groves and native species" },
                      { icon: <Droplets className="text-blue-600" />, text: "Ensuring water security for future generations" },
                      { icon: <Trees className="text-purple-600" />, text: "Combatting climate change through forestation" }
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
                      <h3 className="font-display text-2xl text-primary">Nature in Focus</h3>
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
                <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Action-Oriented Conservation</span>
                <h2 className="font-display text-4xl md:text-6xl text-foreground mb-8">Core Initiatives</h2>
                <div className="h-1.5 w-24 bg-golden mx-auto rounded-full"></div>
              </div>
            </ScrollReveal>

            <div className="space-y-32">
              {initiatives.map((initiative, i) => (
                <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
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
                  Protecting our <span className="text-golden italic">Planet</span> is a shared responsibility for all living beings.
                </h2>
                <p className="text-xl md:text-2xl text-cream/80 font-light max-w-3xl mx-auto">
                  Our commitment to the environment ensures that the unique biodiversity and natural resources of the region are preserved for generations to come.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display text-golden mb-2">Planet</div>
                    <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">Restoring Nature</div>
                  </div>
                  <div className="w-px h-16 bg-white/10 hidden md:block"></div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display text-golden mb-2">Ecology</div>
                    <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">Stewardship</div>
                  </div>
                  <div className="w-px h-16 bg-white/10 hidden md:block"></div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display text-golden mb-2">100%</div>
                    <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">Participation</div>
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

export default EnhancingEcosystems;
