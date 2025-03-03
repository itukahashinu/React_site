import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
  isVisible: boolean
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
  isVisible
}: FeatureCardProps) {
  return (
    <div
      className={`bg-surface-light rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-primary/5 group transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      role="article"
      aria-labelledby={`feature-${title}`}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
        <Icon 
          className="w-7 h-7 text-primary" 
          aria-hidden="true"
        />
      </div>

      <h3 
        id={`feature-${title}`}
        className="text-xl font-bold text-gray-800 mb-4"
      >
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-6">
        <a
          href="#contact"
          className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
        >
          詳しく見る
          <svg
            className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
