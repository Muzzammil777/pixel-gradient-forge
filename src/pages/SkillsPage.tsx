import { motion } from "framer-motion";
import { Code, Database, Brain, Globe, Server, Palette } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "R", level: 75 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      title: "AI/ML Frameworks",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 92 },
        { name: "PyTorch", level: 90 },
        { name: "Scikit-learn", level: 88 },
        { name: "Hugging Face", level: 85 },
        { name: "OpenAI API", level: 95 },
        { name: "LangChain", level: 87 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "React", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "FastAPI", level: 90 },
        { name: "Flask", level: 88 },
        { name: "Next.js", level: 82 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "AWS", level: 90 },
        { name: "Docker", level: 87 },
        { name: "Kubernetes", level: 75 },
        { name: "Redis", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Server,
      skills: [
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 85 },
        { name: "MLflow", level: 82 },
        { name: "Jupyter", level: 92 },
        { name: "VS Code", level: 90 },
        { name: "Linux", level: 85 }
      ]
    },
    {
      title: "Design & UI",
      icon: Palette,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 },
        { name: "Three.js", level: 75 },
        { name: "Adobe Creative Suite", level: 70 },
        { name: "Blender", level: 65 }
      ]
    }
  ];

  const specializations = [
    "Natural Language Processing",
    "Computer Vision",
    "Generative AI",
    "Large Language Models",
    "Deep Learning",
    "Machine Learning Operations",
    "AI Ethics & Safety",
    "Prompt Engineering"
  ];

  return (
    <PageTransition className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Technical Skills
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Specializations */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            AI Specializations
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec}
                className="px-6 py-3 glass-card hover:bg-primary/10 transition-colors cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-foreground font-medium">{spec}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Visualization */}
        <motion.div
          className="glass-card p-8 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center gradient-text mb-8">
            Skill Level Overview
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { level: "Expert", range: "90-100%", count: 8, color: "neon-cyan" },
              { level: "Advanced", range: "80-89%", count: 12, color: "primary" },
              { level: "Intermediate", range: "70-79%", count: 7, color: "neon-pink" },
              { level: "Beginner", range: "60-69%", count: 3, color: "neon-blue" }
            ].map((levelData, index) => (
              <motion.div
                key={levelData.level}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 rounded-full bg-${levelData.color}/20 flex items-center justify-center mx-auto`}>
                  <span className={`text-2xl font-bold text-${levelData.color}`}>
                    {levelData.count}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {levelData.level}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {levelData.range}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            With this diverse skill set, I'm equipped to tackle complex AI challenges 
            and deliver innovative solutions. Let's discuss your next project!
          </p>
          <motion.a
            href="/projects"
            className="btn-neon inline-block mr-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="/contact"
            className="btn-neon inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;