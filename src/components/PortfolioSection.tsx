import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-featured online store built with MERN stack featuring product management, cart, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Task Management App",
    desc: "A productivity app with authentication, CRUD operations, and real-time updates deployed on Vercel.",
    tags: ["React", "Express", "MongoDB", "Vercel"],
  },
  {
    title: "Portfolio Website",
    desc: "Modern responsive portfolio with smooth animations and clean UI, hosted on GitHub Pages.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Blog Platform",
    desc: "Full stack blogging platform with markdown support, user auth, and dynamic content management.",
    tags: ["MERN Stack", "JWT", "Heroku"],
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather application with location search, forecasts, and beautiful data visualization.",
    tags: ["React", "API Integration", "Vercel"],
  },
  {
    title: "Chat Application",
    desc: "Real-time messaging app with socket connections, user presence indicators, and message history.",
    tags: ["Node.js", "Socket.io", "React", "MongoDB"],
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 bg-secondary/50">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">My Work</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">Featured Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-hover transition-all duration-300 group"
          >
            <div className="h-2 gradient-primary" />
            <div className="p-6">
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-1.5 text-sm text-primary hover:underline font-medium">
                  <ExternalLink size={14} /> Live Demo
                </button>
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                  <Github size={14} /> Source
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
