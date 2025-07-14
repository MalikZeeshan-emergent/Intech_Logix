import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  CheckCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "contact@intechlogix.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "New York, NY 10001",
      description: "Come say hello at our office"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon-Fri: 9:00 AM - 6:00 PM",
      description: "Weekend support available"
    }
  ];

  const services = [
    "Digital Marketing",
    "SEO Optimization",
    "WordPress Development",
    "HubSpot CRM Setup",
    "General Consultation"
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in learning more about your digital services. Can we schedule a consultation?"
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Consultation
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how our digital solutions 
              can help you achieve your goals and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium mb-1">{info.info}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* WhatsApp & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* WhatsApp Section */}
              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-100 rounded-full mr-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      WhatsApp Us
                    </h3>
                    <p className="text-gray-600">Get instant support and quick responses</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Need immediate assistance? Chat with us on WhatsApp for quick answers 
                  to your questions and instant support.
                </p>
                
                <a
                  href={`https://wa.me/15551234567?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start WhatsApp Chat
                </a>
              </div>

              {/* Office Image */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Office
                </h3>
                <img
                  src="https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
                  alt="Our Office"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <p className="text-gray-600 mb-4">
                  Located in the heart of New York, our modern office space is designed 
                  to foster creativity and collaboration. We'd love to meet you in person!
                </p>
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span>New York, NY 10001</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our services and process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long does it take to see results?
                </h3>
                <p className="text-gray-600">
                  Results vary by service, but most clients see initial improvements within 
                  30-60 days, with significant results typically achieved in 3-6 months.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you work with small businesses?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We work with businesses of all sizes, from startups to 
                  enterprises, and tailor our solutions to fit your budget and needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's included in the free audit?
                </h3>
                <p className="text-gray-600">
                  Our free audit includes website analysis, SEO assessment, competitor 
                  research, and strategic recommendations tailored to your business.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide ongoing support and maintenance for all our services, 
                  with dedicated account managers and regular performance reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;