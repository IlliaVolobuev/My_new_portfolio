import { motion } from "framer-motion";
import { GraduationCap, Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Lightbulb, title: "Problem Solver", desc: "Analytical approach to challenges" },
  { icon: GraduationCap, title: "CS Graduate", desc: "Bachelor's in Computer Science, Fall 2024" },
  { icon: Rocket, title: "Continuous Learner", desc: "Always exploring new technologies" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">Know Me Better</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
            A dedicated <span className="text-gradient">Full Stack Developer</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm Illia Volobuiev, a passionate MERN Stack and Full Stack Developer with a
            Bachelor's degree in Computer Science (Fall 2024). I specialize in developing
            and deploying web applications using modern technologies with a strong focus on
            usability, performance, and clean design.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My journey in web development is fueled by a genuine love for coding and
            problem-solving. I continuously learn and adapt to new technologies to deliver
            high-quality, production-ready applications that make a real impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-hover transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3">
                <h.icon className="text-primary-foreground" size={20} />
              </div>
              <h4 className="font-display font-semibold mb-1 text-foreground">{h.title}</h4>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
