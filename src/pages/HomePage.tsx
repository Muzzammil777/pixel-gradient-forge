import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";
import ThreeScene from "../components/ui/ThreeScene";

const HomePage = () => {
  const scrollToSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-screen-mobile flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Text Content */}
          <div className="space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold gradient-text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                John Doe
              </motion.h1>
              
              <motion.h2
                className="text-2xl md:text-3xl text-muted-foreground"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Generative AI Developer
              </motion.h2>
              
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Passionate about creating intelligent solutions that bridge the gap between 
                human creativity and artificial intelligence. Specializing in machine learning, 
                natural language processing, and innovative AI applications.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/projects" className="btn-neon">
                View Projects
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 border border-muted-foreground/30 rounded-xl hover:border-foreground/50 transition-colors"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card hover:bg-primary/10 transition-colors group"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Icon size={24} className="group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowDown className="text-primary" size={32} />
        </motion.button>
      </section>

      {/* Quick About Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">
              Crafting the Future
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a passionate Generative AI Developer with expertise in machine learning, 
              deep learning, and natural language processing. My work focuses on creating 
              innovative AI solutions that enhance human capabilities and solve real-world problems.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "10+", label: "AI Models Deployed" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-muted-foreground mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/about" className="btn-neon">
                Learn More About Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;