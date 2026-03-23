import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A selection of projects built by Osmon Djumagulov — spanning finance, data engineering, and AI.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Page header */}
      <header className="mb-16">
        <p className="font-display text-xs tracking-[0.28em] uppercase text-muted mb-4">
          Work by Osmon Djumagulov
        </p>
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-text leading-none tracking-tight">
          Projects
        </h1>
        <p className="text-muted text-base mt-5 max-w-sm leading-relaxed">
          From concept to deployment — a selection of things I've built.
        </p>
      </header>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Watermark notice for unpublished docs */}
      {projects.some((p) => p.docFile) && (
        <p className="mt-16 text-xs text-muted/50 text-center tracking-wide">
          Documents marked for download are property of Osmon Djumagulov and are shared for
          review purposes only.
        </p>
      )}
    </div>
  )
}
