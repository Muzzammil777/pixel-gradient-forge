import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Play, Sparkles } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI Content Generator",
      category: "generative-ai",
      description: "Advanced content generation platform using GPT-4 and custom fine-tuned models for creating high-quality articles, social media posts, and marketing copy.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "OpenAI API", "React", "FastAPI", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 2,
      title: "Smart Document Analyzer",
      category: "all",
      description: "AI-powered document analysis tool that extracts insights, summarizes content, and answers questions about uploaded documents using NLP techniques.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Transformers", "LangChain", "Streamlit", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 3,
      title: "Voice-to-Code AI",
      category: "generative-ai",
      description: "Revolutionary tool that converts spoken descriptions into functional code across multiple programming languages using advanced speech recognition and code generation.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Whisper", "Codex", "React", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 4,
      title: "Real-time Sentiment Analysis",
      category: "all",
      description: "Live sentiment analysis dashboard for social media monitoring with real-time data processing and visualization capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Apache Kafka", "TensorFlow", "D3.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 5,
      title: "AI Art Generator",
      category: "generative-ai",
      description: "Creative AI platform for generating unique artwork using Stable Diffusion and custom trained models with advanced prompt engineering capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Stable Diffusion", "PyTorch", "Next.js", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 6,
      title: "Predictive Analytics Dashboard",
      category: "all",
      description: "Business intelligence platform with machine learning-powered predictions for sales forecasting and trend analysis.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Scikit-learn", "React", "FastAPI", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const tabs = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "generative-ai", label: "Generative AI", count: projects.filter(p => p.category === "generative-ai").length }
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
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Innovative AI solutions that push the boundaries of what's possible
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-card p-2 flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all relative ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {tab.label}
                  <span className="text-sm bg-primary/20 px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
                </span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card overflow-hidden group hover:bg-primary/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-primary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/20">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-neon-cyan/20 border border-neon-cyan/40 rounded-full p-2">
                        <Sparkles className="text-neon-cyan" size={16} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/30 text-xs rounded-full text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary/30 text-xs rounded-full text-muted-foreground">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-colors text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play size={14} />
                      Live Demo
                    </motion.a>
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-card hover:bg-secondary/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} className="text-foreground" />
                    </motion.a>
                    
                    <motion.button
                      className="p-2 glass-card hover:bg-secondary/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} className="text-foreground" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Interested in Collaborating?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and explore innovative AI solutions. 
            Let's create something amazing together!
          </p>
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

export default ProjectsPage;