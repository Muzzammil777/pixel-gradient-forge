import { motion } from "framer-motion";
import { Music, Gamepad2, Coffee, Book, Camera, Plane, Code, Palette } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";

const InterestsPage = () => {
  const interests = [
    {
      icon: Music,
      title: "Music Production",
      description: "Creating electronic music and experimenting with AI-generated compositions. I love blending technology with creativity.",
      color: "neon-cyan",
      tags: ["Ableton Live", "Synthesizers", "AI Music", "Electronic"]
    },
    {
      icon: Gamepad2,
      title: "Gaming & Game Dev",
      description: "Passionate gamer and indie game developer. Currently working on AI-powered procedural game content generation.",
      color: "neon-pink",
      tags: ["Unity", "Procedural Gen", "AI NPCs", "Indie Games"]
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Contributing to open-source AI projects and maintaining libraries that help other developers build amazing things.",
      color: "primary",
      tags: ["Python", "TensorFlow", "Community", "Education"]
    },
    {
      icon: Book,
      title: "Research & Reading",
      description: "Constantly learning through research papers, tech books, and exploring the latest developments in AI and machine learning.",
      color: "neon-blue",
      tags: ["ArXiv", "Nature", "Tech Books", "Podcasts"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and experimenting with computational photography. Interested in AI-enhanced image processing.",
      color: "neon-cyan",
      tags: ["Portrait", "Street", "AI Enhancement", "Post-processing"]
    },
    {
      icon: Plane,
      title: "Travel & Culture",
      description: "Exploring different cultures and gaining new perspectives. Travel inspires creativity and innovative thinking.",
      color: "neon-pink",
      tags: ["Cultural Exchange", "Adventure", "Digital Nomad", "Inspiration"]
    },
    {
      icon: Coffee,
      title: "Coffee & Cafés",
      description: "Coffee enthusiast and café hopper. Some of my best coding sessions happen in cozy coffee shops around the world.",
      color: "primary",
      tags: ["Specialty Coffee", "Café Culture", "Remote Work", "Productivity"]
    },
    {
      icon: Palette,
      title: "Digital Art",
      description: "Creating digital art with AI tools and traditional software. Exploring the intersection of human creativity and AI.",
      color: "neon-blue",
      tags: ["AI Art", "Digital Painting", "NFTs", "Creative Coding"]
    }
  ];

  const currentReading = [
    "Attention Is All You Need - Transformer Architecture",
    "The Alignment Problem - Brian Christian",
    "Life 3.0 - Max Tegmark",
    "Human Compatible - Stuart Russell"
  ];

  const currentProjects = [
    "AI Music Composition Tool",
    "Procedural Game World Generator",
    "Photography AI Enhancement Plugin",
    "Open Source LLM Fine-tuning Library"
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
            Interests
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Beyond code: the passions and hobbies that fuel my creativity
          </p>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                className="glass-card p-6 hover:bg-primary/5 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${interest.color}/20 flex items-center justify-center group-hover:bg-${interest.color}/30 transition-colors`}>
                    <Icon className={`text-${interest.color}`} size={28} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {interest.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {interest.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {interest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/30 text-xs rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Current Activities */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Currently Reading */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Book className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-foreground">
                Currently Reading
              </h2>
            </div>
            
            <div className="space-y-3">
              {currentReading.map((book, index) => (
                <motion.div
                  key={book}
                  className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{book}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Side Projects */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-foreground">
                Side Projects
              </h2>
            </div>
            
            <div className="space-y-3">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project}
                  className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  <span className="text-foreground">{project}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          className="glass-card p-8 text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl font-light text-foreground mb-4 italic">
            "The intersection of technology and liberal arts, of engineering and humanity - 
            that's where the magic happens."
          </blockquote>
          <cite className="text-muted-foreground">- Inspired by Steve Jobs</cite>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Fun Facts About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                fact: "50+",
                description: "Countries visited for inspiration and cultural exchange"
              },
              {
                fact: "10K+",
                description: "Hours spent listening to music while coding"
              },
              {
                fact: "100+",
                description: "Photography sessions with AI enhancement experiments"
              }
            ].map((item, index) => (
              <motion.div
                key={item.fact}
                className="text-center glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl font-bold gradient-text mb-3">
                  {item.fact}
                </div>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
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
            Let's Connect Over Shared Interests
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you share any of these interests or have completely different passions, 
            I'd love to hear from you and learn about what drives your creativity!
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

export default InterestsPage;