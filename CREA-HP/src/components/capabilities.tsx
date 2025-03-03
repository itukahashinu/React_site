import { useState, useEffect, useRef } from "react"
import { CapabilityCard } from "./capabilities/CapabilityCard"
import { CAPABILITIES } from "./capabilities/capabilities-data"

export default function Capabilities() {
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
      id="capabilities" 
      className="bg-gray-50 py-20 relative overflow-hidden"
      aria-labelledby="capabilities-title"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%234361ee%27%20fill-opacity%3D%270.03%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 
          id="capabilities-title"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          はたらくんでできること
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
          あらゆる業務シーンで活躍するAIソリューション
        </p>

        <div
          ref={sectionRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {CAPABILITIES.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              {...capability}
              delay={index * 50}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
