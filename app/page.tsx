"use client";
import React, { useState } from "react";
import { EnhancedMasonryGallery } from "@/components/enhanced-masonry-gallery";
import { CategoryFilter } from "@/components/category-filter";
import { ProjectShowcase } from "@/components/project-showcase";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { AwardsSection } from "@/components/awards-section";
import { ContactForm } from "@/components/contact-form";
import { ResumeDownload } from "@/components/resume-download";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const PROJECTS = [
  {
    id: 1,
    title: "Eclipse Branding Platform",
    description: "A dynamic brand experience for a fast-growing tech startup.",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&h=600&fit=crop&auto=format",
    categories: ["Branding", "Web"],
    caseStudy:
      "Led the design and development of a highly visual branding platform. Focused on scalability and performance, while ensuring the brand's core values shine through. Result: +150% engagement rate increase, widely praised by client and users.",
  },
  {
    id: 2,
    title: "FinPeak Mobile App UI",
    description: "Award-winning finance app UX for next-gen users.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop&auto=format",
    categories: ["Mobile App", "UI/UX"],
    caseStudy:
      "Designed a FinTech mobile application for Gen Z users. Key focus: ease-of-use, gamification, and security. Helped reduce onboarding friction by 50%. Won Silver at the Design Excellence Awards 2021.",
  },
  {
    id: 3,
    title: "Celeste E-commerce Redesign",
    description: "A reimagined luxury shopping experience for a global brand.",
    image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?w=400&h=600&fit=crop&auto=format",
    categories: ["E-commerce", "Web"],
    caseStudy:
      "Full revamp of the Celeste shopping ecosystem. Modernized visual language, micro-interactions, and mobile-first flows. Increased average session duration by 30%.",
  },
  {
    id: 4,
    title: "Muse AR Exhibition",
    description: "Immersive AR gallery for a contemporary art event.",
    image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=400&h=600&fit=crop&auto=format",
    categories: ["AR/VR", "Experience"],
    caseStudy:
      "Created an interactive augmented reality exhibition. Visitors engaged via mobile, with real-time layered visuals and artist commentary. Resulted in 120% visitor retention during the event.",
  },
  {
    id: 5,
    title: "Eclipse Partner Hub Portal",
    description: "A scalable platform connecting business partners across regions.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3e1b?w=400&h=600&fit=crop&auto=format",
    categories: ["Web", "Platform"],
    caseStudy:
      "Architected a modular partner portal for a tech client. Included multi-lingual support, analytics dashboards, and role management. Recognized as a benchmark solution in its field.",
  },
  {
    id: 6,
    title: "Vivid Visuals Photography Showcase",
    description: "A visually-rich portfolio for a creative studio.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=600&fit=crop&auto=format",
    categories: ["Photography", "Showcase"],
    caseStudy:
      "Produced an immersive showcase with a minimalist UI. Strong focus on grid/masonry layout and optimized load times. Shortlisted for Modern Web Awards 2022.",
  },
];

const CATEGORIES = [
  "Branding",
  "Web",
  "Mobile App",
  "UI/UX",
  "E-commerce",
  "AR/VR",
  "Experience",
  "Platform",
  "Photography",
  "Showcase",
];

const TESTIMONIALS = [
  {
    author: "Alexandra Stone",
    role: "CEO, Eclipse Tech",
    content:
      "Jane brought our vision to life with unrivaled creativity. She is responsive, technical, and a joy to collaborate with.",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&auto=format",
  },
  {
    author: "David Lin",
    role: "Creative Director, Celeste",
    content:
      "A master of modern digital experiences—a rare blend of aesthetics and performance mindset.",
    avatar:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=80&h=80&fit=crop&auto=format",
  },
  {
    author: "Priya Murthy",
    role: "Founder, Vivid Visuals",
    content:
      "Our new portfolio draws consistent praise. Jane’s attention to detail is unmatched!",
    avatar:
      "https://images.unsplash.com/photo-1519340333755-dc838f5d0eb3?w=80&h=80&fit=crop&auto=format",
  },
];

const AWARDS = [
  {
    id: 1,
    name: "Design Excellence Awards – Silver",
    year: "2021",
    description: "For ‘FinPeak Mobile App’. Recognized for best-in-class User Experience in FinTech.",
  },
  {
    id: 2,
    name: "Modern Web Awards – Shortlist",
    year: "2022",
    description: "For ‘Vivid Visuals Photography Showcase’, noted for visual craft and performance.",
  },
  {
    id: 3,
    name: "Nominee, CSSDA Innovation Award",
    year: "2020",
    description: "For ‘Celeste E-commerce Redesign’, recognized for innovation in e-commerce UI/UX.",
  },
];

export default function Page() {
  const [filtered, setFiltered] = useState<string[]>([]);
  const [caseStudyProject, setCaseStudyProject] = useState<null | typeof PROJECTS[0]>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // For smooth transitions on case study view
  const showCaseStudy = (project: typeof PROJECTS[0]) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCaseStudyProject(project);
      setIsTransitioning(false);
    }, 400);
  };
  const hideCaseStudy = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCaseStudyProject(null);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="bg-gradient-to-t from-gray-100 via-white to-white min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 w-full">
        <section id="gallery" className="w-full max-w-7xl mx-auto py-20 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-center">Creative Portfolio</h1>
          {/* FILTER */}
          <CategoryFilter categories={CATEGORIES} selectedCategories={filtered} onChange={setFiltered} />
          {/* MASONRY GALLERY OR CASE STUDY */}
          <div className="relative mt-8">
            {!caseStudyProject && (
              <div className={`${isTransitioning ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"} transition-all duration-500`}>
                <EnhancedMasonryGallery
                  projects={PROJECTS}
                  filteredCategories={filtered}
                  onCaseStudyOpen={showCaseStudy}
                />
              </div>
            )}
            {caseStudyProject && (
              <div className={`${isTransitioning ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"} transition-all duration-500 absolute top-0 left-0 w-full`}>
                <ProjectShowcase project={caseStudyProject} onBack={hideCaseStudy} />
              </div>
            )}
          </div>
        </section>
        {/* ABOUT */}
        <section id="about">
          <AboutSection />
        </section>
        {/* TESTIMONIALS */}
        <section id="testimonials">
          <TestimonialsSection testimonials={TESTIMONIALS} />
        </section>
        {/* AWARDS */}
        <section id="awards">
          <AwardsSection awards={AWARDS} />
        </section>
        {/* RESUME DOWNLOAD */}
        <ResumeDownload />
        {/* CONTACT */}
        <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-white min-h-[480px] flex items-center">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <style>{`
        .animate-fade-in { animation: fadeIn .8s both; }
        @keyframes fadeIn { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
