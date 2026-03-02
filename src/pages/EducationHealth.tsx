import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, BookOpen, Microscope, Users, ShieldCheck, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const EducationHealth = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const sliderImages = [
    "/attached_assets/shared_image_(13)_1768208685605.jfif",
    "/attached_assets/shared_image_(14)_1768208685605.jfif",
    "/attached_assets/shared_image_(15)_1768208685604.jfif",
    "/attached_assets/shared_image_(32)_1768284257274.jfif",
    "/attached_assets/shared_image_(33)_1768284257273.jfif"
  ];

  const initiatives = [
    {
      title: "Skill Development & Digital Literacy",
      subtitle: "Education Beyond the Classroom",
      icon: <GraduationCap className="w-10 h-10" />,
      content: "Education beyond the classroom. We equip youth and adults with essential life skills, vocational trade training, and financial/digital literacy, preparing them to thrive in the modern digital economy.",
      features: ["Life Skill Education", "Vocational Training", "Digital Literacy", "Financial Literacy"],
      image: "/attached_assets/shared_image_(32)_1768284257274.jfif",
      color: "bg-blue-50"
    },
    {
      title: "Holistic Health & Social Security",
      subtitle: "Nurturing Well-being",
      icon: <Heart className="w-10 h-10" />,
      content: "Our health mission is comprehensive: from nutrition awareness and preventive care camps to mental health support. We also facilitate access to diagnostic services and health insurance, protecting families from medical financial crises.",
      features: ["Nutrition Awareness", "Preventive Care", "Insurance Access", "Mental Health Support"],
      image: "/attached_assets/shared_image_(13)_1768208685605.jfif",
      color: "bg-red-50"
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
              src="/attached_assets/shared_image_(33)_1768284257273.jfif" 
              alt="Education & Health" 
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
                Education <br /> <span className="text-golden">& Health</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-cream/90 max-w-4xl mx-auto leading-relaxed font-light">
                Improving quality of life by nurturing potential and ensuring community well-being through holistic health and lifelong learning.
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
                    Community Well-being
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
                    Nurturing Potential <br /> for a Brighter Future
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    We believe that health and education are the twin pillars of human development. Our programs focus on empowering individuals with knowledge and ensuring they have the physical and mental health to use it.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <BookOpen className="text-blue-600" />, text: "Lifelong learning and skill acquisition" },
                      { icon: <Microscope className="text-red-600" />, text: "Diagnostic and preventive healthcare" },
                      { icon: <Users className="text-emerald-600" />, text: "Community-driven health and literacy" }
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
                      <h3 className="font-display text-2xl text-primary">Potential in Growth</h3>
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
                <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Empowering People</span>
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
                  True progress is measured by the <span className="text-golden italic">Well-being</span> and knowledge of our people.
                </h2>
                <p className="text-xl md:text-2xl text-cream/80 font-light max-w-3xl mx-auto">
                  By investing in health and education, we are securing a future where every individual can contribute meaningfully to their community and live a life of dignity.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display text-golden mb-2">People</div>
                    <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">Nurturing Potential</div>
                  </div>
                  <div className="w-px h-16 bg-white/10 hidden md:block"></div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display text-golden mb-2">Health</div>
                    <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">Holistic Care</div>
                  </div>
                  <div className="w-px h-16 bg-white/10 hidden md:block"></div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-display text-golden mb-2">Education</div>
                    <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">Lifelong Learning</div>
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

export default EducationHealth;
