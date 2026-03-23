import Image from 'next/image'
import type { Project } from '@/data/projects'
import StatusBadge from './StatusBadge'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col bg-surface border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden">

      {/* Project image */}
      <div className="relative w-full aspect-video overflow-hidden bg-surface-2">
        {project.image && project.imageStyle === 'contain' ? (
          // Logo/icon: centered, not stretched, capped at natural resolution
          <div className="absolute inset-0 flex items-center justify-center p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ maxWidth: '200px', maxHeight: '160px', width: 'auto', height: 'auto' }}
            />
          </div>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-bold text-2xl text-border select-none tracking-tight">
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">

        {/* Title + status */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 className="font-display font-bold text-xl text-text leading-snug">
            {project.title}
          </h2>
          <StatusBadge status={project.status} />
        </div>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted/60 border border-border px-2 py-0.5 font-sans tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action row */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display font-semibold text-sm text-accent hover:text-accent-dim transition-colors duration-200 group/link"
            >
              View Project
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                aria-hidden="true"
              >
                <path
                  d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : project.docFile ? (
            <a
              href={`/api/download?slug=${project.id}`}
              className="inline-flex items-center gap-2 font-display font-semibold text-sm text-text/70 border border-border px-4 py-2 hover:text-accent hover:border-accent/40 transition-all duration-200 group/dl"
            >
              Download Overview
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover/dl:translate-y-0.5 transition-transform duration-200"
                aria-hidden="true"
              >
                <path
                  d="M7 2v7M4 6l3 3 3-3M2.5 11h9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <span />
          )}

          {/* Attribution whisper */}
          <span className="text-xs text-muted/35 italic font-sans select-none">
            by Osmon
          </span>
        </div>
      </div>
    </article>
  )
}
