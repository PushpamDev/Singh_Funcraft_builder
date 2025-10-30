import { useParams } from 'react-router-dom';
import { getProjectBySlug, Project } from '@/lib/projects';
import NotFound from './NotFound';
import Head from 'react-helmet';

// Component to render a single detail item
const ProjectInfoItem = ({ label, value }) => (
  <div className="rounded-2xl border border-border/60 bg-secondary/40 p-6">
    <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
    <dd className="mt-2 font-display text-2xl text-foreground">{value}</dd>
  </div>
);

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }

  const project: Project | undefined = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  const heroImage = project.images[0];
  const galleryImages = project.images.slice(1);

  return (
    <>
      <Head>
          <title>{project.name} - Singh FurnCraft</title>
          <meta name="description" content={project.description} />
      </Head>

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

        {/* --- 3. NEW PROJECT DETAILS SECTION --- */}
        <div className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-center font-display text-4xl text-foreground mb-12">
            Project Details
          </h2>
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectInfoItem label="Location" value={project.location} />
            <ProjectInfoItem label="Area" value={project.area} />
            <ProjectInfoItem label="Service" value={project.type} />
          </dl>
        </div>

        {/* 4. Gallery Grid */}
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
    </>
  );
}