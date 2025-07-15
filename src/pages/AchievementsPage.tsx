import { motion } from "framer-motion";
import { Trophy, Star, Award, Target, Zap, Users } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";

const AchievementsPage = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "AI Innovation Award 2023",
      organization: "Tech Innovation Summit",
      date: "December 2023",
      description: "Recognized for developing a groundbreaking generative AI solution that improved content creation efficiency by 300%.",
      category: "Awards"
    },
    {
      icon: Star,
      title: "Top 1% AI Developer",
      organization: "GitHub",
      date: "2023",
      description: "Ranked in the top 1% of AI developers globally based on contributions to open-source AI projects and community impact.",
      category: "Recognition"
    },
    {
      icon: Award,
      title: "Best Paper Award",
      organization: "ICML Conference",
      date: "July 2023",
      description: "Co-authored research paper on 'Ethical AI in Generative Models' received best paper award at International Conference on Machine Learning.",
      category: "Academic"
    },
    {
      icon: Target,
      title: "Hackathon Winner",
      organization: "AI for Good Challenge",
      date: "March 2023",
      description: "Led team to victory in 48-hour hackathon, developing an AI solution for climate change prediction with 94% accuracy.",
      category: "Competition"
    },
    {
      icon: Zap,
      title: "Innovation Patent",
      organization: "USPTO",
      date: "January 2023",
      description: "Granted patent for novel approach to improving efficiency in large language model training by 40%.",
      category: "Innovation"
    },
    {
      icon: Users,
      title: "AI Mentor of the Year",
      organization: "Developer Community",
      date: "2022",
      description: "Recognized for mentoring 50+ junior developers and contributing to the growth of the AI developer community.",
      category: "Community"
    }
  ];

  const stats = [
    { number: "15+", label: "Awards Won", description: "Industry recognition" },
    { number: "50K+", label: "GitHub Stars", description: "Open source impact" },
    { number: "100+", label: "Mentees", description: "Developers guided" },
    { number: "25+", label: "Speaking Events", description: "Conference talks" }
  ];

  const publications = [
    {
      title: "Ethical Considerations in Generative AI Systems",
      journal: "Nature Machine Intelligence",
      year: "2023",
      citations: 127
    },
    {
      title: "Improving Efficiency in Large Language Model Training",
      journal: "Journal of Machine Learning Research",
      year: "2023",
      citations: 89
    },
    {
      title: "AI-Powered Content Generation: A Comprehensive Study",
      journal: "ACM Computing Surveys",
      year: "2022",
      citations: 203
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
            Achievements
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Milestones, recognition, and contributions to the AI community
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center hover:bg-primary/5 transition-colors"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-foreground font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                className="glass-card p-6 hover:bg-primary/5 transition-colors group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="px-2 py-1 bg-secondary/30 text-xs rounded-full text-muted-foreground">
                        {achievement.category}
                      </span>
                    </div>
                    
                    <div className="text-primary font-medium mb-1">
                      {achievement.organization}
                    </div>
                    
                    <div className="text-sm text-muted-foreground mb-3">
                      {achievement.date}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Publications Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Research Publications
          </h2>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                className="glass-card p-6 hover:bg-primary/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {pub.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="text-primary font-medium">
                        {pub.journal}
                      </span>
                      <span>{pub.year}</span>
                      <span>{pub.citations} citations</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
                      {pub.citations} citations
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition Timeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Recognition Timeline
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            {achievements.slice(0, 4).map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background pulse-glow"></div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className="glass-card p-4">
                    <h4 className="font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-primary mb-1">
                      {achievement.organization}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {achievement.date}
                    </p>
                  </div>
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
            Let's Achieve Great Things Together
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            These achievements represent just the beginning. I'm always looking for new 
            challenges and opportunities to make a meaningful impact in the AI field.
          </p>
          <motion.a
            href="/contact"
            className="btn-neon inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Our Journey
          </motion.a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default AchievementsPage;