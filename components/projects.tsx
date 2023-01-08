import type Project from "../interfaces/project";
import ProjectPreview from "./project-preview";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            link={project.link}
            coverImage={project.coverImage}
            date={project.date}
            slug={project.slug}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
