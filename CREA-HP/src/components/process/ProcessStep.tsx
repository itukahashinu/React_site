interface ProcessStepProps {
  number: number
  title: string
  description: string
  delay: number
  isVisible: boolean
}

export function ProcessStep({
  number,
  title,
  description,
  delay,
  isVisible
}: ProcessStepProps) {
  return (
    <div
      className={`flex flex-col items-center text-center md:w-1/4 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      role="listitem"
      aria-label={`ステップ${number}: ${title}`}
    >
      <div className="relative z-10">
        <div className="w-20 h-20 bg-gradient-to-r from-[#4361ee] to-[#6b86ff] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10 shadow-lg">
          <div 
            className="absolute -inset-1.5 bg-[#4361ee]/10 rounded-full -z-10"
            aria-hidden="true"
          ></div>
          {number}
        </div>
        <h3 
          className="text-xl font-bold mb-3"
          id={`process-step-${number}`}
        >
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}
