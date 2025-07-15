import { motion } from "framer-motion";
import { Code, Brain, Zap, Heart } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";

const AboutPage = () => {
  const qualities = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Passionate about writing clean, efficient code and staying up-to-date with the latest technologies."
    },
    {
      icon: Brain,
      title: "AI Expertise",
      description: "Deep understanding of machine learning algorithms, neural networks, and generative AI technologies."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Always exploring new ways to solve complex problems and push the boundaries of what's possible."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Focused on creating solutions that truly make a difference in people's lives and businesses."
    }
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
            About Me
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover the passion and expertise behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <div className="aspect-square bg-gradient-primary rounded-xl p-8 flex items-center justify-center">
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center text-6xl font-bold text-muted-foreground">
                  JD
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-foreground">
              Building the Future with AI
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Generative AI Developer with over 3 years of experience 
                in machine learning, deep learning, and artificial intelligence. My journey 
                began with a fascination for how machines could learn and create, leading me 
                to specialize in cutting-edge AI technologies.
              </p>
              
              <p>
                Throughout my career, I've worked on diverse projects ranging from natural 
                language processing systems to computer vision applications. I believe in 
                the transformative power of AI to solve real-world problems and enhance 
                human capabilities.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest research papers, 
                contributing to open-source projects, or mentoring aspiring developers. 
                I'm always excited to collaborate on innovative projects that push the 
                boundaries of what's possible with AI.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {["Python", "TensorFlow", "PyTorch", "Transformers", "LangChain"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 glass-card text-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Qualities Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {qualities.map((quality, index) => {
            const Icon = quality.icon;
            return (
              <motion.div
                key={quality.title}
                className="glass-card p-6 text-center group hover:bg-primary/5 transition-colors"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="mb-4">
                  <Icon 
                    size={40} 
                    className="mx-auto text-primary group-hover:text-neon-cyan transition-colors" 
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {quality.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {quality.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about the exciting world of AI.
          </p>
          <motion.a
            href="/contact"
            className="btn-neon inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;