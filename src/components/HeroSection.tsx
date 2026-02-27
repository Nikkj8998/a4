import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-farmer.jpg';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToContent = () => {
    document.querySelector('#philosophy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img 
          src={heroImage} 
          alt="Rural India - Woman farmer in fields" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/40 to-forest-dark/80" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="font-body text-golden text-lg md:text-xl tracking-[0.3em] uppercase">
            <span className="text-white font-bold text-[1.2em]">A</span>ssociation for{" "}
            <span className="text-white font-bold text-[1.2em]">S</span>ocial{" "}
            <span className="text-white font-bold text-[1.2em]">T</span>ransformation &{" "}
            <span className="text-white font-bold text-[1.2em]">H</span>uman{" "}
            <span className="text-white font-bold text-[1.2em]">A</span>dvancement
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center p-4 shadow-xl mx-auto">
            <img 
              src="/logo.png" 
              alt="Astha Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-display text-2xl md:text-4xl text-cream/90 italic mb-4"
        >
          About Whom?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-body text-lg md:text-xl text-cream/80 max-w-2xl"
        >
          Faith in those who build our nation with their hands.
          <br />
          Empowering them to help themselves.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-cream/60 hover:text-golden transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={40} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
