export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* 메인 헤더 */}
        <div className="text-center mb-24">
          <h1 className="text-6xl font-bold text-black mb-2 tracking-tight">
            Vibe Coding
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            개발자들의 성장과 네트워킹을 위한 공간
          </p>
        </div>

        {/* 서비스 목록 */}
        <div className="space-y-1 mb-24">
          <a
            href="/philosophy"
            className="group block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-black mb-1">
                  개똥철학자
                </h2>
                <p className="text-gray-600 font-light">
                  외로운 당신을 위한 특별한 위로
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                →
              </div>
            </div>
          </a>

          <a
            href="/dream-space"
            className="group block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-black mb-1">
                  최민성의 망상 공간
                </h2>
                <p className="text-gray-600 font-light">
                  꿈과 아이디어가 살아 숨쉬는 곳
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                →
              </div>
            </div>
          </a>

          <a
            href="/daily-color"
            className="group block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-black mb-1">
                  오늘의 컬러
                </h2>
                <p className="text-gray-600 font-light">
                  사주에 따른 행운의 컬러 추천
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                →
              </div>
            </div>
          </a>

          <a
            href="/music-recommendation"
            className="group block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-black mb-1">
                  나만의 음악 추천
                </h2>
                <p className="text-gray-600 font-light">
                  상황과 기분에 맞는 맞춤형 음악 추천
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                →
              </div>
            </div>
          </a>

          <a
            href="/bubble-calculator"
            className="group block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-black mb-1">
                  버블 계산기
                </h2>
                <p className="text-gray-600 font-light">
                  주식시장 버블 상태 분석 및 투자 위험도 평가
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                →
              </div>
            </div>
          </a>

          <a
            href="/fun-machine"
            className="group block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-black mb-1">
                  재미자판기
                </h2>
                <p className="text-gray-600 font-light">
                  온갖 액티비티와 음식을 랜덤으로 추천
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                →
              </div>
            </div>
          </a>

          <a
            href="/plant-recommendation"
            className="group block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-black mb-1">
                  나만의 식물 추천
                </h2>
                <p className="text-gray-600 font-light">
                  집과 어울리는 완벽한 식물 찾기
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                →
              </div>
            </div>
          </a>

          <a
            href="/mbti"
            className="group block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-black mb-1">
                  MBTI 테스트
                </h2>
                <p className="text-gray-600 font-light">
                  당신의 성격 유형을 알아보세요
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                →
              </div>
            </div>
          </a>

          <a
            href="/confusion"
            className="group block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-black mb-1">
                  정신없음
                </h2>
                <p className="text-gray-600 font-light">
                  당신의 혼란스러운 순간들을 표현해보세요
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
                →
              </div>
            </div>
          </a>
        </div>

        {/* 하단 메시지 */}
        <div className="text-center">
          <p className="text-gray-500 font-light text-lg">
            함께 성장하는 개발자 커뮤니티
          </p>
        </div>
      </div>
    </div>
  );
}
