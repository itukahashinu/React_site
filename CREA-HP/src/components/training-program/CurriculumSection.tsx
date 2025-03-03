import { CURRICULUM_ITEMS, EXPECTED_OUTCOMES } from "./training-data"

interface CurriculumSectionProps {
  isVisible: boolean
}

export function CurriculumSection({ isVisible }: CurriculumSectionProps) {
  return (
    <>
      <div 
        className={`bg-gray-50 rounded-xl p-8 mb-12 border border-gray-100 transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <h3 className="text-xl font-bold text-[#4361ee] mb-3">初心者から即戦力へ！</h3>
        <p className="mb-4">すべての受講者がAIスキルを活用できる人材に。</p>
        <h4 className="font-bold mb-4">研修後に目指す姿</h4>
        <ul className="space-y-3">
          {EXPECTED_OUTCOMES.map((goal, index) => (
            <li
              key={index}
              className="pl-7 relative before:content-['✓'] before:absolute before:left-0 before:text-[#4361ee] before:font-bold"
            >
              {goal}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        <h3 
          className="text-xl font-bold text-center mb-6"
          id="curriculum-title"
        >
          短期間で成果を出す11時間の集中プログラム
        </h3>
        <h4 className="font-bold text-center mb-6">カリキュラム詳細</h4>
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          role="list"
          aria-labelledby="curriculum-title"
        >
          {CURRICULUM_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-100"
              role="listitem"
            >
              <p>・{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
