import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";

// Lazy load pages for better performance
const AboutPage = lazy(() => import("./pages/AboutPage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const AchievementsPage = lazy(() => import("./pages/AchievementsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const InterestsPage = lazy(() => import("./pages/InterestsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="dark">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="education" element={<EducationPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="achievements" element={<AchievementsPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="interests" element={<InterestsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
