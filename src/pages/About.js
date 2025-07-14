import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 10 years of experience in digital marketing and business strategy, Sarah leads our team with vision and expertise.",
      image: "https://images.unsplash.com/photo-1650675042127-d57c5808e105?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHxibHVlfDE3NTIyMDU2NDZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      bio: "Michael brings 12+ years of development experience, specializing in scalable web solutions and automation systems.",
      image: "https://images.unsplash.com/photo-1659353589112-005e063abdaf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHxibHVlfDE3NTIyMDU2NDZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Strategist",
      bio: "Emily's data-driven approach to marketing has helped hundreds of businesses achieve their growth objectives.",
      image: "https://images.pexels.com/photos/9221770/pexels-photo-9221770.jpeg"
    },
    {
      name: "David Park",
      role: "SEO Specialist",
      bio: "David's expertise in SEO and content optimization has driven millions in organic traffic for our clients.",
      image: "https://images.unsplash.com/photo-1592891024301-bf7948cee673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHxibHVlfDE3NTIyMDU2NDZ8MA&ixlib=rb-4.1.0&q=85"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your business growth and success."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build long-term partnerships based on trust and transparency."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of industry trends and leverage cutting-edge technologies for optimal results."
    }
  ];

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
              About Intech Logix
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're a team of passionate digital experts dedicated to helping businesses 
              thrive in the digital landscape through innovative solutions and strategic growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, Intech Logix emerged from a simple yet powerful vision: 
                to bridge the gap between complex digital technologies and business success. 
                We recognized that many businesses were struggling to navigate the rapidly 
                evolving digital landscape.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we're proud to have helped over 500 businesses transform their 
                digital presence, streamline their operations, and achieve unprecedented growth. 
                Our comprehensive approach combines cutting-edge technology with proven strategies 
                to deliver results that matter.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every business, regardless of size, deserves access to 
                world-class digital solutions. That's why we're committed to providing 
                personalized services that adapt to your unique needs and goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwYWdlbmN5fGVufDB8fHxibHVlfDE3NTIyMTkwODN8MA&ixlib=rb-4.1.0&q=85"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              To empower businesses with smart digital solutions that drive growth, 
              optimize operations, and automate processes for sustainable success in 
              the modern digital economy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience 
              in digital marketing, development, and business strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="team-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve its digital goals.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;