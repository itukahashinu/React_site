import { LucideIcon } from "lucide-react"

interface ProblemCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
  isVisible: boolean
}

export function ProblemCard({
  icon: Icon,
  title,
  description,
  delay,
  isVisible
}: ProblemCardProps) {
  return (
    <div
      className={`bg-surface-light rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-primary/5 group transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      role="article"
      aria-labelledby={`problem-${title}`}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
        </div>
        <div>
          <h3 
            id={`problem-${title}`}
            className="text-lg font-bold text-gray-800 mb-2"
          >
            {title}
          </h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
