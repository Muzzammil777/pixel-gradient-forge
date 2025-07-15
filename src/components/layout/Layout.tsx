import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ParticlesBackground from "../ui/ParticlesBackground";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Suspense 
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full"
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;