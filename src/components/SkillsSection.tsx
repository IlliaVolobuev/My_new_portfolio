import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "HTML / CSS / Tailwind", level: 92 },
  { name: "Git & GitHub", level: 85 },
  { name: "Deployment (Vercel/Heroku)", level: 80 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/50">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">My Skills</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">Tech Stack & Expertise</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-sm text-foreground">{skill.name}</span>
              <span className="text-muted-foreground text-sm">{skill.level}%</span>
            </div>
            <div className="h-3 rounded-full bg-card shadow-soft border border-border overflow-hidden">
              <motion.div
                className="h-full rounded-full gradient-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
