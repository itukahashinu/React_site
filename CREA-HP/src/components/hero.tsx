

export default function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative bg-gradient-radial from-surface-light via-surface to-surface">
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 heading-gradient">
            AIで実現する<br className="sm:hidden" />
            業務改善と人材育成
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI技術を活用して、業務効率化と人材のスキルアップを同時に実現。
            日本の企業の生産性向上をサポートします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn btn-primary transform hover:-translate-y-1"
            >
              無料相談を予約する
            </a>
            <a 
              href="#features" 
              className="btn btn-outline transform hover:-translate-y-1"
            >
              サービスの特徴を見る
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
          {[
            { number: "75%", label: "生産性向上" },
            { number: "50%", label: "コスト削減" },
            { number: "90%", label: "従業員満足度" },
            { number: "3倍", label: "業務効率化" },
          ].map(({ number, label }) => (
            <div key={label} className="group">
              <div className="text-3xl font-bold mb-2 text-gradient">
                {number}
              </div>
              <div className="text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <svg
            className="w-6 h-12 text-primary/20 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
