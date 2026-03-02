import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle scrolling to section if there's a hash in the URL on home page
    if (isHomePage && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [isHomePage, location.hash]);

  const programs = [
    {
      title: "Strengthening Livelihoods",
      href: "/strengthening-livelihoods",
      initiatives: [
        { title: "Sustainable Agriculture", hash: "#sustainable-agriculture-equipment-banks" },
        { title: "Livestock Management", hash: "#livestock-management-market-linkages" },
        { title: "Micro-Entrepreneurship", hash: "#micro-entrepreneurship-financial-support" },
        { title: "Community Cooperatives", hash: "#community-cooperatives-fpos-shgs" },
      ]
    },
    {
      title: "Enhancing Ecosystems",
      href: "/enhancing-ecosystems",
      initiatives: [
        { title: "Water Security", hash: "#water-security-conservation" },
        { title: "Forestation Drives", hash: "#forestation-drives" },
        { title: "Flora & Fauna", hash: "#preservation-of-local-flora-fauna" },
        { title: "Eco-Tourism", hash: "#eco-tourism-community-stewardship" },
      ]
    },
    {
      title: "Civic Amenities & Services",
      href: "/civic-services",
      initiatives: [
        { title: "Safe Drinking Water", hash: "#safe-drinking-water-access" },
        { title: "Rural Connectivity", hash: "#rural-connectivity-transport" },
        { title: "Sanitation & Hygiene", hash: "#sanitation-public-hygiene" },
        { title: "Renewable Energy", hash: "#renewable-energy-solutions" },
      ]
    },
    {
      title: "Education & Health",
      href: "/education-health",
      initiatives: [
        { title: "Skill Development", hash: "#skill-development-digital-literacy" },
        { title: "Holistic Health", hash: "#holistic-health-social-security" },
      ]
    },
  ];

  const handleNavClick = (href: string, hash?: string) => {
    const fullHref = hash ? `${href}${hash}` : href;
    if (fullHref.startsWith("#")) {
      if (isHomePage) {
        const element = document.querySelector(fullHref);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/" + fullHref);
      }
    } else {
      if (location.pathname === href && hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(fullHref);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md py-3`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/logo.png"
                alt="Astha Foundation Logo"
                className="h-12 w-auto md:h-16 transition-all duration-300"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick("/about-us")}
              className="font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 text-foreground"
            >
              About Us
            </button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 border-none h-auto p-0 text-foreground"
                  >
                    Our Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-6 bg-background border border-border rounded-md shadow-xl">
                      {programs.map((program) => (
                        <div key={program.title} className="space-y-2">
                          <button
                            onClick={() => handleNavClick(program.href)}
                            className="text-sm font-bold text-primary hover:opacity-70 transition-opacity text-left w-full"
                          >
                            {program.title}
                          </button>
                          <ul className="space-y-1">
                            {program.initiatives.map((initiative) => (
                              <li key={initiative.title}>
                                <NavigationMenuLink asChild>
                                  <button
                                    onClick={() => handleNavClick(program.href, initiative.hash)}
                                    className="block w-full select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground text-xs font-medium text-muted-foreground text-left"
                                  >
                                    {initiative.title}
                                  </button>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <button
              onClick={() => handleNavClick("/partners")}
              className="font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 text-foreground"
            >
              Our Partners
            </button>

            <button
              onClick={() => handleNavClick("/testimonials")}
              className="font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 text-foreground"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick("#vision")}
              className="font-body text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 text-foreground"
            >
              Vision
            </button>
            <button
              onClick={() => handleNavClick("#connect")}
              className="font-body text-sm font-medium tracking-wide transition-all duration-300 px-6 py-2 rounded-md border-2 border-[#2E6142] text-foreground hover:bg-[#2E6142] hover:text-white"
            >
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-colors text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest-dark pt-24 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6 py-12">
              <button
                onClick={() => handleNavClick("/about-us")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                About Us
              </button>

              <div className="flex flex-col items-center gap-4 w-full px-6">
                <span className="font-display text-2xl text-golden">
                  Our Programs
                </span>
                {programs.map((program) => (
                  <div key={program.title} className="flex flex-col items-center gap-2 w-full">
                    <button
                      onClick={() => handleNavClick(program.href)}
                      className="font-display text-xl text-cream hover:text-golden transition-colors"
                    >
                      {program.title}
                    </button>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
                      {program.initiatives.map((initiative) => (
                        <button
                          key={initiative.title}
                          onClick={() => handleNavClick(program.href, initiative.hash)}
                          className="font-body text-sm text-cream/60 hover:text-golden transition-colors text-center"
                        >
                          {initiative.title}
                        </button>
                      ))}
                    </div>
                    <div className="w-12 h-px bg-golden/20 my-2" />
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleNavClick("/partners")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                Our Partners
              </button>

              <button
                onClick={() => handleNavClick("/testimonials")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                Testimonials
              </button>

              <button
                onClick={() => handleNavClick("#vision")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                Vision
              </button>
              <button
                onClick={() => handleNavClick("#connect")}
                className="font-display text-2xl text-cream hover:text-golden transition-colors"
              >
                Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
