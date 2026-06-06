import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap } from "lucide-react";

const educationItems = [
  {
    icon: GraduationCap,
    title: "Computer Science Technician Student",
    meta: "Expected graduation: 2027",
    desc: "Studying Computer Science with a focus on programming, web technologies, databases and practical software development.",
  },
  {
    icon: BookOpen,
    title: "School of Computer Mastery",
    meta: "Started programming in 2021",
    desc: "Built a solid foundation in HTML, CSS and JavaScript through practical projects and programming courses.",
  },
  {
    icon: Calendar,
    title: "Continuous Practice",
    meta: "Personal projects and learning",
    desc: "Expanding my skills with React, TypeScript, Node.js, backend development, databases and modern development tools.",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Education</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">Learning Journey</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {educationItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-hover transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-soft">
              <item.icon className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-display text-xl font-bold mb-2 text-foreground">{item.title}</h3>
            <p className="text-primary text-sm font-semibold mb-3">{item.meta}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
