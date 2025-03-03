interface TrainingFeatureProps {
  title: string
  subtitle: string
  description: string
  delay: number
  isVisible: boolean
}

export function TrainingFeature({
  title,
  subtitle,
  description,
  delay,
  isVisible
}: TrainingFeatureProps) {
  return (
    <div 
      className={`bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      role="article"
      aria-labelledby={`feature-title-${title}`}
    >
      <h3 
        id={`feature-title-${title}`}
        className="text-xl font-bold text-[#4361ee] mb-3"
      >
        {title}
      </h3>
      <p className="font-semibold text-lg mb-3">{subtitle}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
