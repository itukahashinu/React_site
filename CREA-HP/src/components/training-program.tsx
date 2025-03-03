import { useState, useEffect, useRef } from "react"
import { TrainingFeature } from "./training-program/TrainingFeature"
import { SubsidyInfo } from "./training-program/SubsidyInfo"
import { CurriculumSection } from "./training-program/CurriculumSection"
import { TRAINING_FEATURES } from "./training-program/training-data"

export default function TrainingProgram() {
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

  return (
    <section 
      id="training" 
      className="py-20" 
      ref={sectionRef}
      aria-labelledby="training-title"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 
            id="training-title"
            className="text-3xl md:text-4xl font-bold text-[#4361ee] mb-4"
          >
            助成金を活用したAI研修プログラム
          </h2>
          <p className="text-xl text-gray-600">短期間で効果的なAIスキルの習得</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {TRAINING_FEATURES.map((feature, index) => (
            <TrainingFeature
              key={feature.title}
              {...feature}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="mb-12">
          <SubsidyInfo isVisible={isVisible} />
        </div>

        <CurriculumSection isVisible={isVisible} />
      </div>
    </section>
  )
}
