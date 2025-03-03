interface CaseStudyCardProps {
  title: string
  problem: string
  details: string[]
  imageNumber: number
  delay: number
  isVisible: boolean
}

export function CaseStudyCard({
  title,
  problem,
  details,
  imageNumber,
  delay,
  isVisible
}: CaseStudyCardProps) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      role="article"
      aria-labelledby={`case-study-title-${imageNumber}`}
    >
      <div 
        className="h-48 overflow-hidden bg-gray-50 flex flex-col items-center justify-center gap-4"
        role="img"
        aria-label={`事例${imageNumber}のイメージ`}
      >
        <div className="w-16 h-16 rounded-full bg-[#4361ee]/20 animate-pulse flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[#4361ee]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <span className="text-gray-400">事例 {imageNumber}</span>
      </div>

      <div className="p-6 flex-grow">
        <h3 
          id={`case-study-title-${imageNumber}`}
          className="text-xl font-bold mb-3"
        >
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          <strong className="text-[#4361ee]">課題：</strong> {problem}
        </p>
        <ul className="space-y-2 text-gray-600 text-sm" role="list">
          {details.map((detail, idx) => (
            <li
              key={idx}
              className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#4361ee]"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
