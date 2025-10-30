import React from 'react';

interface Project {
  name: string;
  images: string[];
}

interface ProjectGalleryProps {
  projects: Project[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{project.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.images.map((image, imageIndex) => (
              <div key={imageIndex} className="overflow-hidden rounded-lg shadow-lg">
                <img src={image} alt={`${project.name} - ${imageIndex + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};