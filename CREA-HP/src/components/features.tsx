import { useState, useEffect, useRef } from "react"
import { Brain, Bot, BarChart, UserCheck } from "lucide-react"
import { FeatureCard } from "./features/FeatureCard"

export default function Features() {
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

  const features = [
    {
      icon: Brain,
      title: "AIによる業務効率化",
      description: "AIが単純作業を自動化し、人材を付加価値の高い業務に集中させることができます。"
    },
    {
      icon: Bot,
      title: "カスタムAIアシスタント",
      description: "あなたの業務に特化した独自のAIアシスタントが、24時間体制でサポートします。"
    },
    {
      icon: BarChart,
      title: "データ駆動の意思決定",
      description: "AIが分析した業務データをもとに、より効果的な経営判断が可能になります。"
    },
    {
      icon: UserCheck,
      title: "スキル向上支援",
      description: "AIが従業員一人一人のスキルレベルに合わせた最適な学習プランを提供します。"
    }
  ]

  return (
    <section 
      id="features" 
      className="py-20 bg-surface-light"
      aria-labelledby="features-title"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 
            id="features-title"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            はたらくんの特徴
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            AI技術を活用した革新的なソリューションで、
            あなたの会社の業務改善をサポートします。
          </p>
        </div>

        <div 
          ref={sectionRef}
          className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
