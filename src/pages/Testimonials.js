import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg",
      quote: "Intech Logix transformed our digital presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. The team is professional, responsive, and truly understands our business needs.",
      rating: 5,
      results: "300% increase in organic traffic"
    },
    {
      name: "Robert Chen",
      role: "Marketing Director, GrowthCorp",
      image: "https://images.pexels.com/photos/7544433/pexels-photo-7544433.jpeg",
      quote: "The HubSpot CRM setup and automation workflows they created for us saved us 20+ hours per week. Our lead management process is now seamless, and we've seen a 45% increase in conversion rates.",
      rating: 5,
      results: "45% increase in conversion rates"
    },
    {
      name: "Sarah Thompson",
      role: "Founder, EcoLiving Solutions",
      image: "https://images.unsplash.com/photo-1650675042127-d57c5808e105?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHxibHVlfDE3NTIyMDU2NDZ8MA&ixlib=rb-4.1.0&q=85",
      quote: "Their WordPress development team created a stunning website that perfectly reflects our brand. The site is fast, responsive, and has helped us generate 200% more leads. Outstanding work!",
      rating: 5,
      results: "200% more leads generated"
    },
    {
      name: "Michael Davis",
      role: "Owner, Local Service Pro",
      image: "https://images.unsplash.com/photo-1659353589112-005e063abdaf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHxibHVlfDE3NTIyMDU2NDZ8MA&ixlib=rb-4.1.0&q=85",
      quote: "The digital marketing campaigns they ran for us exceeded all expectations. ROI increased by 250%, and we're now dominating our local market. They truly understand how to drive results.",
      rating: 5,
      results: "250% ROI increase"
    },
    {
      name: "Lisa Wang",
      role: "VP Marketing, InnovateTech",
      image: "https://images.unsplash.com/photo-1592891024301-bf7948cee673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHxibHVlfDE3NTIyMDU2NDZ8MA&ixlib=rb-4.1.0&q=85",
      quote: "Working with Intech Logix was a game-changer for our business. Their comprehensive approach to digital marketing helped us achieve a 180% increase in qualified leads within 4 months.",
      rating: 5,
      results: "180% increase in qualified leads"
    }
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "250%", label: "Average ROI Increase" }
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
              Client Success Stories
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don't just take our word for it. See what our clients have to say about 
              the results we've delivered for their businesses.
            </p>
          </motion.div>
        </div>
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
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real businesses that have achieved remarkable results 
              with our digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="testimonial-card relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>

                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-blue-800 mb-1">
                    Key Result:
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonial.results}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how we helped TechStart Inc. transform their digital presence 
              and achieve remarkable growth.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1606588984221-7ab3e2bb038a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwYWdlbmN5fGVufDB8fHxibHVlfDE3NTIyMTkwODN8MA&ixlib=rb-4.1.0&q=85"
                  alt="Success Story"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  TechStart Inc. - 300% Traffic Growth
                </h3>
                <p className="text-gray-600 mb-6">
                  "Working with Intech Logix was the best decision we made for our business. 
                  Their comprehensive SEO strategy and digital marketing campaigns helped us 
                  achieve results we never thought possible. The team is knowledgeable, 
                  professional, and truly cares about our success."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg"
                      alt="Jennifer Martinez"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Jennifer Martinez</div>
                      <div className="text-gray-600 text-sm">CEO, TechStart Inc.</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">300%</div>
                    <div className="text-sm text-gray-600">Traffic Increase</div>
                  </div>
                </div>
              </div>
            </div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have achieved remarkable growth with our 
              digital solutions. Let's discuss your goals.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Get Your Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;