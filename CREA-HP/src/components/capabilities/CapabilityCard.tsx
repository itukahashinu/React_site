import { LucideIcon } from "lucide-react"

interface CapabilityCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
  isVisible: boolean
}

export function CapabilityCard({
  icon: Icon,
  title,
  description,
  delay,
  isVisible,
}: CapabilityCardProps) {
  return (
    <div
      className={`bg-surface-light rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      role="article"
      aria-labelledby={`capability-${title}`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
        <h3 
          id={`capability-${title}`}
          className="text-lg font-bold text-gray-800"
        >
          {title}
        </h3>
        <p className="text-gray-500 text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}
