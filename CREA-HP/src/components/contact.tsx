import { useState, useEffect, useRef } from "react"
import { ContactForm } from "./contact/ContactForm"
import { CONTACT_MESSAGES } from "./contact/contact-data"

export default function Contact() {
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
      id="contact"
      className="bg-gradient-to-r from-[#4361ee] to-[#6b86ff] text-white py-20 relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2720%27%20height%3D%2720%27%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%20fill-rule%3D%27evenodd%27%3E%3Ccircle%20cx%3D%273%27%20cy%3D%273%27%20r%3D%273%27%2F%3E%3Ccircle%20cx%3D%2713%27%20cy%3D%2713%27%20r%3D%273%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={sectionRef}
          className="max-w-2xl mx-auto"
        >
          <div 
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 
              id="contact-title"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {CONTACT_MESSAGES.title}
            </h2>
            <p className="text-xl">
              {CONTACT_MESSAGES.subtitle}
            </p>
          </div>

          <ContactForm isVisible={isVisible} />
        </div>
      </div>
    </section>
  )
}
