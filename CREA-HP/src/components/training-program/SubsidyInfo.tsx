interface SubsidyInfoProps {
  isVisible: boolean
}

export function SubsidyInfo({ isVisible }: SubsidyInfoProps) {
  return (
    <div 
      className={`bg-gradient-to-r from-[#4361ee] to-[#6b86ff] text-white rounded-xl p-8 relative overflow-hidden transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: "200ms" }}
      role="region"
      aria-label="助成金に関する情報"
    >
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2720%27%20height%3D%2720%27%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%20fill-rule%3D%27evenodd%27%3E%3Ccircle%20cx%3D%273%27%20cy%3D%273%27%20r%3D%273%27%2F%3E%3Ccircle%20cx%3D%2713%27%20cy%3D%2713%27%20r%3D%273%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"
        aria-hidden="true"
      ></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-4">
          中小企業の場合、研修費用の最大75%を助成金で補助！
        </h3>
        <p className="mb-6">
          企業の負担を抑えながら、従業員のスキル向上を実現。コストを理由に研修導入をためらっていた企業様にも最適。
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <h4 className="text-xl font-bold mb-3">人材開発支援助成金とは</h4>
          <p>
            人材開発支援助成金は、事業主等が雇用する労働者に対して、職務に関連した専門的な知識及び技能を習得させるための職業訓練等を計画に沿って実施した場合等に、訓練経費や訓練期間中の賃金の一部等を助成する制度です。
          </p>
        </div>
      </div>
    </div>
  )
}
