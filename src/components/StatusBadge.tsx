import type { ProjectStatus } from '@/data/projects'

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; dot: string; text: string }
> = {
  live:          { label: 'Live',        dot: 'bg-emerald-400', text: 'text-emerald-400' },
  'in-progress': { label: 'In Progress', dot: 'bg-orange-400',  text: 'text-orange-400'  },
  concept:       { label: 'Concept',     dot: 'bg-sky-400',     text: 'text-sky-400'     },
}

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const { label, dot, text } = STATUS_CONFIG[status]

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-display font-semibold whitespace-nowrap ${text}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} aria-hidden="true" />
      {label}
    </span>
  )
}
