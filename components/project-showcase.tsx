import React from "react";

export interface ProjectShowcaseProps {
  project: {
    title: string;
    description: string;
    caseStudy: string;
    image: string;
    categories: string[];
  };
  onBack: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project, onBack }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 relative animate-fade-in">
      <button className="absolute top-3 left-3 text-gray-600 text-lg p-1.5 rounded hover:bg-gray-100 transition-colors" onClick={onBack} aria-label="Back to Gallery">
        ← Back
      </button>
      <img src={project.image} alt={project.title} className="rounded-lg mb-6 w-full h-64 object-cover" />
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mr-2">{project.categories.join(", ")}</span>
      </div>
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-700 text-base mb-6">{project.description}</p>
      <h3 className="font-semibold text-lg mb-3">Case Study</h3>
      <p className="text-gray-800 whitespace-pre-line leading-relaxed">{project.caseStudy}</p>
    </div>
  );
};
