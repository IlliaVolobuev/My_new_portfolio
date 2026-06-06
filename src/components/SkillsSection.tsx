import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "SCSS", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux", "VS Code", "REST API"],
  },
  {
    title: "Server Administration",
    skills: ["Ubuntu Server", "SSH", "Apache", "Nginx", "Bind9 DNS", "DHCP", "Samba"],
  },
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
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">Technologies & Tools</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border"
          >
            <h3 className="font-display text-xl font-bold mb-4 text-foreground">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
