import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Search, 
  Code, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Target
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Drive growth with targeted campaigns, social media marketing, and conversion optimization strategies that deliver measurable results.",
      link: "/services/digital-marketing",
      features: ["Social Media Marketing", "PPC Advertising", "Email Marketing", "Content Strategy"]
    },
    {
      icon: Search,
      title: "SEO",
      description: "Boost your online visibility and organic traffic with our comprehensive SEO strategies tailored to your business goals.",
      link: "/services/seo",
      features: ["Technical SEO", "Local SEO", "Content Optimization", "Link Building"]
    },
    {
      icon: Code,
      title: "WordPress Development",
      description: "Create powerful, responsive websites that engage your audience and drive conversions with our expert development team.",
      link: "/services/wordpress",
      features: ["Custom Themes", "Plugin Development", "Site Optimization", "Maintenance"]
    },
    {
      icon: Settings,
      title: "HubSpot CRM Setup",
      description: "Streamline your business processes and boost productivity with automated workflows and CRM optimization.",
      link: "/services/hubspot",
      features: ["CRM Setup", "Workflow Automation", "Lead Management", "Analytics"]
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Target, number: "2M+", label: "Leads Generated" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWdlbmN5fGVufDB8fHxibHVlfDE3NTIyMTkwODN8MA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Digital Solutions to{" "}
              <span className="gradient-text">Grow, Optimize,</span>{" "}
              and Automate Your Business
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive digital marketing, SEO, 
              development, and automation services that deliver real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="btn-primary text-lg px-8 py-4 flex items-center"
              >
                Get a Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Services
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="service-card group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how we can help you achieve your digital goals.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;