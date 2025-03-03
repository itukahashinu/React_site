import { useState, useEffect, useRef } from "react"
import { AlertTriangle, BellRing, Clock, DollarSign } from "lucide-react"
import { ProblemCard } from "./problems/ProblemCard"

export default function Problems() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const problems = [
    {
      icon: AlertTriangle,
      title: "人材不足",
      description: "採用難や早期離職により、慢性的な人材不足に悩まされている"
    },
    {
      icon: Clock,
      title: "業務非効率",
      description: "マニュアル化されていない業務が多く、効率が上がらない"
    },
    {
      icon: BellRing,
      title: "教育時間の確保",
      description: "日々の業務に追われ、人材育成のための時間が取れない"
    },
    {
      icon: DollarSign,
      title: "コスト増加",
      description: "人件費や教育コストの増加が経営を圧迫している"
    }
  ]

  return (
    <section 
      id="problems" 
      className="py-20 bg-surface"
      aria-labelledby="problems-title"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 
            id="problems-title"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            こんな課題はありませんか？
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            多くの企業が直面している人材育成と業務効率化の課題。
            AIの活用で解決への道が開けます。
          </p>
        </div>

        <div 
          ref={sectionRef}
          className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
        >
          {problems.map((problem, index) => (
            <ProblemCard
              key={problem.title}
              {...problem}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
