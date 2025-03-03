import { useState, FormEvent } from "react"
import { CONTACT_INFO } from "./contact-data"

interface ContactFormProps {
  isVisible: boolean
}

export function ContactForm({ isVisible }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    
    // フォームの送信をシミュレート
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 現段階では直接メーラーを開く
    window.location.href = `mailto:${CONTACT_INFO.email}`
    setStatus("success")
  }

  return (
    <div
      className={`bg-white/30 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/30 shadow-xl transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: "200ms" }}
    >
      <div className="text-left mb-6">
        <p className="mb-1">{CONTACT_INFO.name}</p>
        <p className="mb-1">{CONTACT_INFO.email}</p>
        <p>{CONTACT_INFO.status}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361ee]/50"
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361ee]/50"
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 bg-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4361ee]/50 resize-none"
            disabled={status === "submitting"}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-[#4361ee] hover:bg-white/90 font-bold rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 disabled:opacity-50 disabled:hover:transform-none"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "送信中..." : "お問い合わせ"}
        </button>
      </form>
    </div>
  )
}
