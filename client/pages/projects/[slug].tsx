import { GetStaticProps, GetStaticPaths } from 'next';
import { projects, getProjectBySlug, getAllProjectSlugs, Project } from '@/lib/projects';

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  if (!project) return <div>Loading...</div>;

  const heroImage = project.images[0];
  const galleryImages = project.images.slice(1);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* 1. Project Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
          {project.name}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* 2. Hero Image */}
      <div className="mt-14 w-full h-[600px] overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card">
        <img 
          src={heroImage} 
          alt={project.name} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* 3. Gallery Grid */}
      {galleryImages.length > 0 && (
        <div className="mt-24">
          <h2 className="text-center font-display text-4xl text-foreground mb-12">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img, index) => (
              <div key={index} className="h-96 w-full overflow-hidden rounded-3xl border border-border/60 shadow-card">
                <img 
                  src={img} 
                  alt={`${project.name} gallery image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// These functions handle fetching the data for each page
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugs();
  return {
    paths,
    fallback: false, // 404 if slug is not found
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getProjectBySlug(params?.slug as string);
  return {
    props: {
      project,
    },
  };
};