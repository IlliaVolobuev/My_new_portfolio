import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    image: "Site_Nelly-s-Saloon.png",
    title: "Nelly's Saloon",
    desc: "Responsive salon website with a clean visual style, service presentation and polished landing page layout.",
    tags: ["Creative", "Web Design", "Branding"],
    url: "https://aleksandrvolobuev.github.io/Site_Nelly-s-Saloon/",
  },
  {
    image: "Site_krist-shop.png",
    title: "Krist Shop",
    desc: "Shop website project focused on product presentation, branding and a clear user experience.",
    tags: ["Branding"],
    url: "https://github.com/AleksandrVolobuev/Site_krist-shop",
  },
  {
    image: "Site_Bond_construction.png",
    title: "Bond Construction",
    desc: "Construction company website with responsive sections, strong visuals and service-focused content.",
    tags: ["Web Design", "Creative", "Branding"],
    url: "https://aleksandrvolobuev.github.io/Site_Bond_construction/",
  },
  {
    image: "Site_Bombay_Luxury.png",
    title: "Bombay Luxury",
    desc: "Luxury-styled landing page project with elegant presentation and brand-focused UI.",
    tags: ["Branding", "Creative"],
    url: "https://aleksandrvolobuev.github.io/Site_Bombay_Luxury/",
  },
  {
    image: "Site_about_mountains.png",
    title: "About Mountains",
    desc: "Travel and nature themed website with responsive layout, visual storytelling and modern sections.",
    tags: ["Web Design", "Branding", "Creative"],
    url: "https://aleksandrvolobuev.github.io/Site_about_mountains/",
  },
  {
    image: "SHOP_COFE.png",
    title: "Coffee Shop",
    desc: "Online coffee shop project with product presentation, modern interface and responsive design.",
    tags: ["Web Design", "Creative", "Branding"],
    url: "https://aleksandrvolobuev.github.io/SHOP_COFE/",
  },
  {
    image: "nuxt_vue.png",
    title: "Nuxt Vue Project",
    desc: "Vue and Nuxt based website experiment focused on component structure and modern frontend workflow.",
    tags: ["Creative", "Branding"],
    url: "https://aleksandrvolobuev.github.io/nuxt_vue/",
  },
  {
    image: "Psychologist-Svetlana-Prudnik.png",
    title: "Psychologist Website",
    desc: "Professional psychologist website with calm visual design, service information and responsive pages.",
    tags: ["Web Design", "Branding"],
    url: "https://aleksandrvolobuev.github.io/Psychologist-Svetlana-Prudnik/",
  },
  {
    image: "mersedes.png",
    title: "Mercedes Project",
    desc: "Automotive themed website concept with clean layout, product visuals and responsive presentation.",
    tags: ["Web Design"],
    url: "https://aleksandrvolobuev.github.io/mersedes/",
  },
  {
    image: "karaokel-project.png",
    title: "Karaoke Project",
    desc: "Entertainment website project with a bold visual style and event-focused page structure.",
    tags: ["Web Design", "Branding"],
    url: "https://aleksandrvolobuev.github.io/karaokel-project/",
  },
  {
    image: "game_Snake.png",
    title: "Snake Game",
    desc: "Classic Snake browser game built as an interactive JavaScript practice project.",
    tags: ["Web Design", "JavaScript", "Game"],
    url: "https://aleksandrvolobuev.github.io/game_Snake/",
  },
  {
    image: "game_BlackJack.png",
    title: "BlackJack Game",
    desc: "Browser card game project focused on JavaScript logic, interactions and simple game flow.",
    tags: ["Web Design", "JavaScript", "Game"],
    url: "https://aleksandrvolobuev.github.io/game_BlackJack/",
  },
];

const getProjectImage = (image: string) => `${import.meta.env.BASE_URL}${image}`;

const PortfolioSection = () => (
  <section id="projects" className="py-24 bg-secondary/50">
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
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
              <img
                src={getProjectImage(p.image)}
                alt={`${p.title} project preview`}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </a>
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
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                >
                  <ExternalLink size={14} /> Open Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
