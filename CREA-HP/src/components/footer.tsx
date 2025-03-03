import { FooterSection } from "./footer/FooterSection"
import { SITE_INFO, FOOTER_SECTIONS } from "./footer/footer-data"

export default function Footer() {
  return (
    <footer 
      className="bg-gray-50 text-gray-600 pt-20 pb-6 border-t border-gray-100"
      role="contentinfo"
      aria-label="サイトフッター"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <a 
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-[#4361ee] to-[#6b86ff] bg-clip-text text-transparent mb-4 inline-block"
              aria-label={`${SITE_INFO.name} - トップページへ戻る`}
            >
              {SITE_INFO.name}
            </a>
            <p className="text-gray-500 max-w-xs">
              {SITE_INFO.slogan}
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        <div 
          className="text-center pt-8 border-t border-gray-200 text-gray-500"
        >
          <p>
            <small>&copy; {SITE_INFO.copyright}</small>
          </p>
        </div>
      </div>
    </footer>
  )
}
