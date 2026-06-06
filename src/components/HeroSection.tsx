import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Sparkles, Code2, Server, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const profileImg = "../../public/Illia.jpg";

const roles = ["MERN Stack Developer", "Full Stack Developer", "Web App Architect"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const techStack = [
    { icon: Code2, label: "React" },
    { icon: Server, label: "Node.js" },
    { icon: Rocket, label: "MongoDB" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-3xl"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-soft">
                <Sparkles size={12} /> Available for Hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-2 text-foreground"
            >
              Hi! I Am
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 text-gradient"
            >
              Illia Volobuiev
            </motion.h1>

            {/* Typing effect tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-8 mb-6"
            >
              <span className="font-display text-lg md:text-xl text-primary font-semibold">
                {displayed}
                <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg max-w-lg mb-8 leading-relaxed"
            >
              Specializing in building and deploying scalable web applications using{" "}
              <span className="text-foreground font-medium">React, Node.js, MongoDB & Express</span>.
              Delivering polished products on Vercel, GitHub & Heroku.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#portfolio"
                className="group gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:shadow-hover transition-all duration-300 flex items-center gap-2 shadow-soft"
              >
                View Portfolio
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group border-2 border-primary/20 px-8 py-3.5 rounded-xl font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Tech Stack</span>
              <div className="h-px flex-1 max-w-[40px] bg-border" />
              <div className="flex gap-2">
                {techStack.map((t, i) => (
                  <motion.div
                    key={t.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1.5 shadow-soft hover:shadow-card transition-shadow cursor-default"
                  >
                    <t.icon size={14} className="text-primary" />
                    <span className="text-xs font-medium text-foreground">{t.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8 md:gap-12"
            >
              {[
                { num: "100+", label: "Projects Completed" },
                { num: "7+", label: "Technologies Used" },
                { num: "2024", label: "CS Graduate" },
              ].map((s, i) => (
                <div key={s.label} className="relative">
                  {i > 0 && (
                    <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 h-8 w-px bg-border" />
                  )}
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{s.num}</div>
                  <div className="text-muted-foreground text-xs md:text-sm">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
              />

              {/* Profile image */}
              <div className="w-72 h-72 md:w-[360px] md:h-[360px] rounded-full gradient-primary p-[3px] shadow-hover relative z-10">
                <div className="w-full h-full rounded-full bg-card overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Illia Volobuiev"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-2 md:-right-6 top-8 bg-card rounded-2xl px-5 py-3 shadow-card border border-border z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <Code2 size={14} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Specializing in</div>
                    <div className="font-display font-bold text-sm text-foreground">MERN Stack</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-2 md:-left-6 bottom-12 bg-card rounded-2xl px-5 py-3 shadow-card border border-border z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <Rocket size={14} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Deployment</div>
                    <div className="font-display font-bold text-sm text-foreground">Vercel & GitHub</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating dots decoration */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-1/3 flex flex-col gap-1.5"
              >
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary/30" />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
