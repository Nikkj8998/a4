import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Our Programs", href: "#programs" },
    { name: "Our Partners", href: "/partners" },
    { name: "Vision", href: "#vision" },
    { name: "Connect", href: "#connect" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/" + href);
    }
  };

  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <motion.div
              className="mb-6 block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/")}
            >
              <img
                src="/logo.png"
                alt="Astha Foundation Logo"
                className="h-20 w-auto"
              />
            </motion.div>
            <p className="font-body text-black/80 leading-relaxed">
              <span className="font-bold">A</span>ssociation for <span className="font-bold">S</span>ocial <span className="font-bold">T</span>ransformation & <span className="font-bold">H</span>uman <span className="font-bold">A</span>dvancement
            </p>
            <p className="font-body text-black/60 text-sm mt-4">
              Empowering rural India through dignity, not charity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-black mb-6">Explore</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block font-body text-black/60 hover:text-[#2E6142] transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-lg text-black mb-6">Our Region</h4>
            <p className="font-body text-black/60 leading-relaxed mb-4">
              Velhe Taluka
              <br />
              18 Gaon Maval Cluster
              <br />
              Pune District, Maharashtra
              <br />
              Western Ghats, India
            </p>
            <div className="space-y-2">
              <a href="mailto:info@astharural.org" className="flex items-center gap-2 text-black/60 hover:text-[#2E6142] transition-colors font-body text-sm">
                <span className="p-1.5 bg-gray-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                info@astharural.org
              </a>
              <a href="tel:+919823030218" className="flex items-center gap-2 text-black/60 hover:text-[#2E6142] transition-colors font-body text-sm">
                <span className="p-1.5 bg-gray-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                +91 98230 30218
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="font-body text-sm text-black/40 mx-auto">
            © {currentYear} Astha Foundation. All rights reserved. Designed by{" "}
            <a
              href="https://www.cybaemtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2E6142] transition-colors"
            >
              Cybaem Tech
            </a>
          </p>
          <p className="font-body text-sm text-black/40 hidden md:block">
            Built with hope in rural India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
