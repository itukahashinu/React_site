import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-surface-light/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16">
          <a 
            href="/" 
            className="text-xl font-bold text-gradient"
            aria-label="CREAのロゴ - トップページへ戻る"
          >
            CREA
          </a>

          <ul className="hidden md:flex space-x-8">
            {[
              { href: "#features", label: "特徴" },
              { href: "#capabilities", label: "機能" },
              { href: "#case-studies", label: "導入事例" },
              { href: "#training", label: "研修プログラム" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-gray-600 hover:text-primary transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="hidden md:inline-flex btn btn-primary"
            >
              お問い合わせ
            </a>
            <button
              type="button"
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="メニューを開く"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
