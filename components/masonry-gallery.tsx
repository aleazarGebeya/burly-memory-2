import React from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  caseStudy: string;
}

export interface MasonryGalleryProps {
  projects: Project[];
  filteredCategories: string[];
}

import { GalleryImage } from "@/components/gallery-image";

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ projects, filteredCategories }) => {
  const visibleProjects = filteredCategories.length
    ? projects.filter((p) => p.categories.some((cat) => filteredCategories.includes(cat)))
    : projects;

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-6 w-full">
      {visibleProjects.map((project) => (
        <div key={project.id} className="mb-6 break-inside-avoid relative group">
          <GalleryImage src={project.image} alt={project.title} category={project.categories[0]} />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-gray-100 mb-1 line-clamp-2">{project.description}</p>
            <button className="mt-2 px-3 py-1 rounded bg-white bg-opacity-80 text-black text-xs font-semibold hover:bg-opacity-100 transition-all">View Case Study</button>
          </div>
        </div>
      ))}
    </div>
  );
};
