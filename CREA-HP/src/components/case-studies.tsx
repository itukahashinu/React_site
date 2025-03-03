import { useState, useEffect, useRef } from "react"
import { CaseStudyCard } from "./case-studies/CaseStudyCard"
import { CASE_STUDIES } from "./case-studies/case-studies-data"

export default function CaseStudies() {
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
      id="case-studies" 
      className="py-20 bg-gray-50"
      aria-labelledby="case-studies-title"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 
          id="case-studies-title"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          導入事例
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
          実際の企業様での導入効果をご紹介します
        </p>

        <div
          ref={sectionRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard
              key={study.title}
              {...study}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
