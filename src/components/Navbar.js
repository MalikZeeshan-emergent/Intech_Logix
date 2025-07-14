import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "SEO", path: "/services/seo" },
    { name: "WordPress Development", path: "/services/wordpress" },
    { name: "HubSpot CRM Setup", path: "/services/hubspot" },
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">
              Intech Logix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                location.pathname === "/" ? "text-blue-600" : ""
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                location.pathname === "/about" ? "text-blue-600" : ""
              }`}
            >
              About
            </Link>

            <Link
              to="/testimonials"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                location.pathname === "/testimonials" ? "text-blue-600" : ""
              }`}
            >
              Testimonials
            </Link>

            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                location.pathname === "/contact" ? "text-blue-600" : ""
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Free Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="md:hidden fixed inset-0 bg-white z-50 pt-16"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>

              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-900">Services</p>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block pl-4 text-gray-700 hover:text-blue-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-blue-600"
              >
                About
              </Link>

              <Link
                to="/testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-blue-600"
              >
                Testimonials
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary inline-block mt-4"
              >
                Get Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;