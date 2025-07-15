import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your Formspree endpoint
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.doe@example.com",
      link: "mailto:john.doe@example.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: null
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Open for new opportunities",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/johndoe",
      username: "@johndoe"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/johndoe",
      username: "John Doe"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/johndoe",
      username: "@johndoe"
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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Let's discuss your next AI project or just have a conversation about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/30 border border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/30 border border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/30 border border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary/30 border border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-neon flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                    />
                  ) : (
                    <Send size={18} />
                  )}
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Contact Information */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <motion.div
                      key={info.label}
                      className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {info.value}
                        </div>
                      </div>
                    </motion.div>
                  );

                  return info.link ? (
                    <a key={info.label} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Connect With Me
              </h2>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-primary/10 transition-colors group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {social.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.username}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <CheckCircle className="text-neon-cyan mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-foreground mb-2">
                Quick Response Time
              </h3>
              <p className="text-sm text-muted-foreground">
                I typically respond to messages within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Start Something Amazing?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a specific project in mind or just want to explore possibilities, 
            I'm here to help bring your AI ideas to life.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;