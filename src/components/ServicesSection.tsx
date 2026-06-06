import { motion } from "framer-motion";
import { Code2, Globe, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "MERN Stack Development",
    desc: "Building robust, full-featured web applications using MongoDB, Express, React, and Node.js with clean architecture and best practices.",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    desc: "End-to-end web development from responsive front-ends to secure back-end APIs, delivering complete, production-ready applications.",
  },
  {
    icon: Rocket,
    title: "Deployment & Hosting",
    desc: "Seamless deployment and hosting of web applications on Vercel, GitHub Pages, and Heroku with CI/CD pipelines and optimized performance.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">What I Do</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">My Services</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-hover transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft">
              <s.icon className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-display text-xl font-bold mb-3 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
