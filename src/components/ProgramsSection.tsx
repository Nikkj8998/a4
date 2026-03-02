import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import goatFarming from '@/assets/goat-farming.jpg';
import landscapeImage from '@/assets/landscape-western-ghats.jpg';
import { Sprout, Sun, Leaf, Scale, Heart, ChevronRight } from 'lucide-react';

const programs = [
  {
    category: 'Strengthening Livelihoods',
    route: '/strengthening-livelihoods',
    icon: Sprout,
    items: [
      {
        title: 'Sustainable Agriculture & Equipment Banks',
        description: 'Providing affordable access to modern farming tools to reduce labor and increase productivity for small-scale farmers.',
      },
      {
        title: 'Livestock Management & Market Linkages',
        description: 'Transforming traditional livestock rearing into a scientific and profitable enterprise for landless families.',
      },
      {
        title: 'Micro-Entrepreneurship & Financial Support',
        description: 'Through targeted training and microfinance support, we empower individuals to launch and sustain their own small businesses.',
      },
    ],
  },
  {
    category: 'Enhancing Ecosystems/ Environment',
    route: '/enhancing-ecosystems',
    icon: Leaf,
    items: [
      {
        title: 'Water Security & Conservation',
        description: 'Implementing community-led water conservation structures—such as check dams and rainwater harvesting systems.',
      },
      {
        title: 'Forestation Drives',
        description: 'Promoting large-scale forestation initiatives to restore green cover and ecological balance.',
      },
      {
        title: 'Preservation of Local Flora & Fauna',
        description: 'Protecting indigenous flora and fauna, ensuring that the unique biodiversity of the region thrives.',
      },
    ],
  },
  {
    category: 'Improving Access to Civic Amenities & Services',
    route: '/civic-services',
    icon: Scale,
    items: [
      {
        title: 'Safe Drinking Water Access',
        description: 'Providing safe, potable drinking water directly to households, reducing waterborne diseases.',
      },
      {
        title: 'Rural Connectivity & Transport',
        description: 'Improving transportation networks, ensuring that markets, hospitals, and schools are within reach.',
      },
      {
        title: 'Renewable Energy Solutions',
        description: 'Promoting biogas plants, fuel-efficient cookstoves, and solar-powered lights and water pumps.',
      },
    ],
  },
  {
    category: 'Improving Quality of Life through Education and Health',
    route: '/education-health',
    icon: Heart,
    items: [
      {
        title: 'Skill Development & Digital Literacy',
        description: 'Equipping youth and adults with essential life skills, vocational trade training, and digital literacy.',
      },
      {
        title: 'Holistic Health & Social Security',
        description: 'Comprehensive health mission: from nutrition awareness and preventive care camps to mental health support.',
      },
      {
        title: 'Community Cooperatives (FPOs & SHGs)',
        description: 'Fostering financial independence through micro-savings and collective entrepreneurship among women.',
      },
    ],
  },
];

const conservation = {
  title: 'Environmental Conservation',
  icon: Leaf,
  items: [
    { label: 'Solar Water Pumps', desc: 'Clean energy for irrigation' },
    { label: 'Solar Lamps', desc: '25+ villages protected from wildlife' },
    { label: 'Biogas Plants', desc: 'Sustainable cooking fuel' },
    { label: 'Biodiversity Study', desc: '84 plants, 52 mammals, 92 birds documented' },
  ],
};

const ProgramsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="programs" className="section-padding bg-cream">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-body text-accent text-sm tracking-[0.2em] uppercase mb-6 block">
              Our Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Programs That Transform
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Every initiative is designed not just to provide — but to build lasting capability.
              These are the seeds of self-reliance.
            </p>
          </div>
        </ScrollReveal>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {programs.map((program, programIndex) => (
            <ScrollReveal key={program.category} delay={programIndex * 0.1}>
              <div 
                className="bg-background rounded-xl p-8 lg:p-10 shadow-sm border border-border/30 h-full cursor-pointer hover:shadow-md transition-shadow group/card"
                onClick={() => navigate(program.route)}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover/card:bg-primary/20 transition-colors">
                    <program.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground group-hover/card:text-primary transition-colors flex items-center gap-2">
                    {program.category}
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover/card:opacity-100 transition-all -translate-x-2 group-hover/card:translate-x-0" />
                  </h3>
                </div>

                <div className="space-y-6">
                  {program.items.map((item, index) => (
                    <motion.div 
                      key={item.title}
                      whileHover={{ x: 8 }}
                      className={`border-l-2 border-golden/50 pl-6 py-2 cursor-pointer hover:bg-primary/5 transition-colors rounded-r-lg`}
                      onClick={(e) => {
                        e.stopPropagation();
                        const id = item.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                        navigate(`${program.route}#${id}`);
                      }}
                    >
                      <div className="flex items-center gap-2 group">
                        <h4 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                      </div>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Conservation Section with Image */}
        <ScrollReveal>
          <div 
            className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-xl cursor-pointer group/conservation hover:shadow-2xl transition-shadow"
            onClick={() => navigate('/enhancing-ecosystems')}
          >
            {/* Image */}
            <div className="relative h-80 lg:h-auto">
              <img 
                src={landscapeImage} 
                alt="Western Ghats Landscape"
                className="w-full h-full object-cover group-hover/conservation:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent lg:bg-gradient-to-t" />
            </div>

            {/* Content */}
            <div className="bg-primary p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-8 right-8 text-primary-foreground/20 group-hover/conservation:text-golden/40 transition-colors">
                <ChevronRight className="w-12 h-12" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="w-8 h-8 text-golden" />
                <h3 className="font-display text-2xl lg:text-3xl text-primary-foreground group-hover/conservation:text-golden transition-colors">
                  {conservation.title}
                </h3>
              </div>
              
              <p className="font-body text-primary-foreground/80 mb-8">
                The Western Ghats are among the world's most biodiverse regions. We work to protect 
                this heritage while providing sustainable solutions for rural communities.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {conservation.items.map((item) => (
                  <div key={item.label} className="bg-primary-foreground/10 rounded-lg p-4">
                    <span className="font-display text-sm text-golden block mb-1">{item.label}</span>
                    <span className="font-body text-xs text-primary-foreground/70">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Goat Program Feature */}
        <ScrollReveal className="mt-20">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/attached_assets/shared_image_(39)_1768286715112.jpg" 
                  alt="Women with goats in rural village"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-3 lg:pl-8">
              <span className="font-body text-accent text-sm tracking-[0.15em] uppercase mb-4 block">
                Impact Story
              </span>
              <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-6">
                "Others won't sit with us because we smell of goats."
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                That day, one man sold 65 goats because his son couldn't get married due to the stigma. 
                Since then, we transformed goat farming from a source of shame to a path of prosperity.
                <br /><br />
                By introducing fair weighing scales, training paraveterinarians, and building market linkages, 
                we doubled the income of the poorest families. The same goat that fetched ₹800 now sells for ₹1500.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="font-display text-3xl text-primary block">2x</span>
                  <span className="text-muted-foreground">Income Increase</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="font-display text-3xl text-primary block">7</span>
                  <span className="text-muted-foreground">Trained Paravets</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <span className="font-display text-3xl text-primary block">500+</span>
                  <span className="text-muted-foreground">Families Impacted</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProgramsSection;
