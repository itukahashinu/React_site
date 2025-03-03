import { useState, useEffect, useRef } from "react"
import { ProcessStep } from "./process/ProcessStep"
import { PROCESS_STEPS } from "./process/process-data"

export default function Process() {
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
      id="process" 
      className="bg-gray-50 py-20"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto px-6">
        <h2 
          id="process-title"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          導入プロセス
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
          スムーズな導入をサポートします
        </p>

        <div ref={sectionRef} className="relative">
          <div 
            className="hidden md:block absolute top-[80px] left-0 w-full h-0.5 bg-gray-200 z-0"
            role="presentation"
            aria-hidden="true"
          ></div>

          <div 
            className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4"
            role="list"
            aria-label="導入プロセスの各ステップ"
          >
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                delay={index * 100}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
