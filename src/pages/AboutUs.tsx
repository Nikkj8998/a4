import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserCircle,
  ShieldCheck,
  Briefcase,
  Navigation,
  Car,
  Award,
  Target,
  Eye,
  Linkedin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import aboutHero from "@/assets/about-hero-bg.jpg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const leadAdvisors = [
    {
      name: "Ms Seemantinee Khot",
      role: "Leader in Sustainable Development & Corporate Governance",
      image: "/images/seemantinee-khot.png",
      linkedin: "https://www.linkedin.com/in/seemantinee-khot-9b2b0211/",
      experience: "40+ Y",
      bio: "A farmer by choice, she has 40+ years’ experience across the UN, NGOs, and CSR. As an Independent Director for Suzlon Energy and Partner at CHHAYA, she specializes in gender integration, rural livelihoods, and community-based institutions. A Senior Evaluation Specialist (FAO), Harvard initiative founder, and MASW (TISS) graduate, she leads boards for Paryay and YUVA Rural Association.",
    },
    {
      name: "Satish Khade",
      role: "Civil Engineer, Water Expert, and Environmental Advocate",
      image: "/images/satish-khade.jfif",
      linkedin: "https://www.linkedin.com/in/satish-khade-840195179/",
      experience: "12+ Y",
      bio: "A B.E. Civil engineer and renowned water expert dedicated to community 'water literacy' for over 12 years. Author of Abhinav Jalnayak and a prolific columnist, he has delivered 600+ environmental lectures. As a Rotary District Director, he has implemented vital water projects across 142 villages, earning the prestigious 'Paryavaran Rakshak' award.",
    },
    {
      name: "Biren Sudhir Vora",
      role: "Bridging Corporate Leadership, Academia, and Social Impact",
      image: "/images/biren-vora.png",
      linkedin: "https://www.linkedin.com/in/birenvora/",
      experience: "30+ Y",
      bio: "A multi-disciplinary leader with over three decades of corporate experience. An IIT Madras alumnus and PhD candidate at IIT Delhi, he serves as Professor-of-Practice at Navrachana University. As Founder of Ekaagra Social & Microfinance Foundation, Biren has driven significant change, including spearheading water security initiatives for 180 villages in Gujarat.",
    },
    {
      name: "Sanjay Mahadeo Bobade",
      role: "Business Transformation Leader & Growth Facilitator",
      image: "/images/sanjay-bobade.png",
      experience: "25+ Y",
      bio: "A dedicated Business Transformation Leader focused on creating impactful solutions for Indian society. As Founder of Yuga Globe Tech, he drives initiatives in Health-Insurance, Agri-tech, and Vocational Enrichment. With a background at Microsoft, PwC, and NISG, he excels in digital government transformation. He is an alumnus of IIT Mumbai and IIM Ahmedabad.",
    },
  ];

  const trustees = [
    {
      name: "Vikramjit Mehmi",
      role: "Chairman and Managing Trustee",
      icon: <UserCircle className="w-8 h-8" />,
    },
    {
      name: "Sudam Dagadu Zende",
      role: "Trustee",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Dattatraya Maruti Mulay",
      role: "Trustee and the Settler",
      icon: <Award className="w-8 h-8" />,
    },
    {
      name: "Pramod Dattatraya Kale",
      role: "Trustee",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Suresh Rajaram Dere",
      role: "Trustee (Historical)",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Ramakant Raghunath Kulkarni",
      role: "Trustee (Historical)",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Dr Anagha Joshi",
      role: "Director and Senior Consultant",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      name: "Mr Raosaheb Badhe",
      role: "Chief Operating Officer (COO)",
      image: "/images/raosaheb-badhe.png",
    },
  ];

  const fieldTeam = [
    {
      name: "Kiran Reddy Avuthu",
      role: "Field assessments and evaluations",
      icon: <Navigation className="w-8 h-8" />,
    },
    {
      name: "Dr Ranveer Sing",
      role: "Field visits and assessments",
      icon: <Navigation className="w-8 h-8" />,
    },
    {
      name: "Raosaheb (R.K.) Badhe",
      role: "Field visits and interactions",
      icon: <Navigation className="w-8 h-8" />,
    },
    {
      name: "Local Project Driver",
      role: "E-Rickshaw service in Pasali Valley",
      icon: <Car className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-40">
            <img 
              src={aboutHero} 
              alt="About Us" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Our Foundation & People
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl text-cream mb-8 leading-tight"
            >
              About Us
            </motion.h1>
          </div>
        </section>

        {/* Vision, Mission, Goal - Grid layout matching Partners page cards */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <div className="bg-cream/30 p-8 rounded-2xl h-full shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-primary">
                    Our Vision
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    To be a catalyst for profound social transformation and
                    human advancement, creating a world where every individual
                    has the opportunity to live a life of dignity,
                    self-reliance, and prosperity.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-cream/30 p-8 rounded-2xl h-full shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-primary">
                    Our Mission
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    To empower marginalized communities by implementing
                    high-impact initiatives in education, health, livelihood,
                    and environmental conservation, while providing strategic
                    expertise.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-cream/30 p-8 rounded-2xl h-full shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-primary">
                    Our Goal
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Ultimately, we strive to make every region we touch "Sujlam,
                    Suflam"—rich in resources and abundant in
                    opportunity—ensuring ecological and social harmony.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Lead Advisory Section - Light Profile Display Design */}
        <section className="section-padding bg-cream/50">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-primary mb-4">
                  Lead Advisors & Experts
                </h2>
                <div className="w-24 h-1 bg-golden mx-auto"></div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadAdvisors.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.1}>
                  <div className="relative bg-white border border-forest-dark/10 rounded-[2rem] p-8 h-full flex flex-col items-center text-center group hover:border-golden/50 hover:shadow-xl transition-all duration-300">
                    {/* Experience Badge */}
                    {member.experience && (
                      <div className="absolute top-8 right-8 bg-golden/10 text-golden text-[10px] font-bold px-3 py-1 rounded-full border border-golden/20">
                        {member.experience}
                      </div>
                    )}

                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-full border-2 border-golden/20 p-1 overflow-hidden bg-cream">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <h4 className="font-display text-xl mb-1 text-primary group-hover:text-golden transition-colors">
                      {member.name}
                    </h4>
                    <p className="font-body text-[10px] font-bold text-golden uppercase tracking-widest mb-4">
                      {member.role}
                    </p>
                    
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {member.bio}
                    </p>

                    {/* LinkedIn Footer */}
                    <div className="w-full pt-6 border-t border-forest-dark/5 flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground font-medium italic">
                        {member.experience ? `${member.experience.split('+')[0]}+ years of expertise` : ""}
                      </span>
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-primary/5 p-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trustees Section - Professional Style */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl text-primary mb-4">
                  Board of Trustees
                </h2>
                <div className="w-24 h-1 bg-golden mx-auto"></div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              {trustees.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-2xl h-full shadow-sm border border-border/30 hover:border-golden/50 transition-all group text-center">
                    <div className="w-32 h-32 bg-golden/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-golden group-hover:bg-golden group-hover:text-white transition-colors overflow-hidden shadow-inner">
                      {'image' in member ? (
                        <img 
                          src={(member as any).image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="p-4">{(member as any).icon}</div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-display text-xl mb-2 text-primary">
                        {member.name}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Field Team Section */}
        <section
          className="section-padding"
          style={{ backgroundColor: "#1c402b0d" }}
        >
          <div className="container-wide">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl mb-4 text-primary">
                  Field Team & Personnel
                </h2>
                <div className="w-24 h-1 bg-golden mx-auto"></div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fieldTeam.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.1}>
                  <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-black/5 hover:border-golden/50 transition-colors h-full">
                    <div className="text-primary mb-4">{member.icon}</div>
                    <h4 className="font-display text-lg mb-1 text-primary">
                      {member.name}
                    </h4>
                    <p className="font-body text-sm text-primary/70">
                      {member.role}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
