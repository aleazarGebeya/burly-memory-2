import React from "react";
import { MasonryGalleryProps } from "@/components/masonry-gallery";

export interface EnhancedMasonryGalleryProps extends MasonryGalleryProps {
  onCaseStudyOpen: (project: MasonryGalleryProps["projects"][0]) => void;
}

export const EnhancedMasonryGallery: React.FC<EnhancedMasonryGalleryProps> = ({ projects, filteredCategories, onCaseStudyOpen }) => {
  const visibleProjects = filteredCategories.length
    ? projects.filter((p) => p.categories.some((cat) => filteredCategories.includes(cat)))
    : projects;

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-6 w-full">
      {visibleProjects.map((project) => (
        <div key={project.id} className="mb-6 break-inside-avoid relative group cursor-pointer" onClick={() => onCaseStudyOpen(project)}>
          {/* Retain hover overlay logic */}
          <img
            src={project.image}
            alt={project.title}
            width={400}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-90"
            loading="lazy"
            data-category={project.categories[0]}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-gray-100 mb-1 line-clamp-2">{project.description}</p>
            <span className="mt-2 px-3 py-1 rounded bg-white bg-opacity-80 text-black text-xs font-semibold cursor-pointer">
              View Case Study
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
