import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, GraduationCap, Code, Trophy, FolderOpen, Heart, Mail, Download } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: User },
  { path: "/education", label: "Education", icon: GraduationCap },
  { path: "/skills", label: "Skills", icon: Code },
  { path: "/achievements", label: "Achievements", icon: Trophy },
  { path: "/projects", label: "Projects", icon: FolderOpen },
  { path: "/interests", label: "Interests", icon: Heart },
  { path: "/contact", label: "Contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card m-4 px-6 py-4 hidden md:block"
      >
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
          </motion.div>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex items-center space-x-2"
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </motion.div>
                  
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30"
                    />
                  )}
                </Link>
              );
            })}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="btn-neon flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Resume</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card m-4 px-4 py-3 md:hidden"
      >
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text"
          >
            Portfolio
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-secondary/50 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-4 text-2xl transition-colors ${
                        location.pathname === item.path
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon size={24} />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={handleDownloadResume}
                className="btn-neon flex items-center space-x-2 text-lg"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;