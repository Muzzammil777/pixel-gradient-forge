import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";

const EducationPage = () => {
  const education = [
    {
      degree: "Master of Science in Artificial Intelligence",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2020 - 2022",
      gpa: "3.9/4.0",
      description: "Specialized in machine learning, deep learning, and natural language processing. Thesis: 'Improving Generative AI Models for Creative Content Generation'",
      achievements: [
        "Dean's List for 4 consecutive semesters",
        "AI Research Fellowship recipient",
        "Published 3 papers in top-tier AI conferences"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Strong foundation in computer science fundamentals with focus on algorithms, data structures, and software engineering.",
      achievements: [
        "Summa Cum Laude graduate",
        "Outstanding CS Student Award 2020",
        "Captain of Programming Competition Team"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Tech Valley High School",
      location: "San Jose, CA",
      period: "2012 - 2016",
      gpa: "4.0/4.0",
      description: "Valedictorian with exceptional performance in mathematics and science. Early exposure to programming and computer science.",
      achievements: [
        "Valedictorian (1st in class of 450)",
        "National Merit Scholar",
        "Won State Programming Championship"
      ]
    }
  ];

  const certifications = [
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      credentialId: "TF-2023-12345"
    },
    {
      name: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-MLS-98765"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2022",
      credentialId: "DL-SPEC-54321"
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
            Education
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 pulse-glow"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                <motion.div
                  className="glass-card p-6 hover:bg-primary/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <GraduationCap className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-primary mb-1">
                        {edu.institution}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="font-semibold text-primary">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Award size={16} />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Professional Certifications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="glass-card p-6 text-center hover:bg-primary/5 transition-colors"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {cert.name}
                </h3>
                
                <p className="text-primary font-medium mb-1">
                  {cert.issuer}
                </p>
                
                <p className="text-sm text-muted-foreground mb-2">
                  Issued: {cert.date}
                </p>
                
                <p className="text-xs text-muted-foreground">
                  ID: {cert.credentialId}
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
            Continuous Learning Journey
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Education doesn't stop at graduation. I'm committed to continuous learning 
            and staying at the forefront of AI and technology advancements.
          </p>
          <motion.a
            href="/skills"
            className="btn-neon inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Skills
          </motion.a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default EducationPage;