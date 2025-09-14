export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 메인 헤더 */}
          <div className="text-center mb-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
              <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-6">
                🎯 바이브 코딩 부스
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
                개발자들의 성장과 네트워킹을 위한 공간
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* 소개 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* 왼쪽: 비전 */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="text-4xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                우리의 비전
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                바이브 코딩 부스는 개발자들이 함께 성장하고, 지식을 공유하며,
                새로운 아이디어를 나누는 공간입니다. 혼자서는 해결하기 어려운
                문제들을 함께 해결해 나가며, 서로에게 영감을 주는 커뮤니티를
                만들어가고 있습니다.
              </p>
            </div>

            {/* 오른쪽: 활동 */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="text-4xl mb-6">💡</div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                주요 활동
              </h2>
              <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-purple-500 mr-3">•</span>
                  코드 리뷰 및 피드백
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-3">•</span>
                  기술 스터디 및 워크샵
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-3">•</span>
                  프로젝트 협업
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-3">•</span>
                  개발자 네트워킹
                </li>
              </ul>
            </div>
          </div>

          {/* 특징 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 mb-4">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  협업 중심
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  함께 문제를 해결하고 성장합니다
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-6 mb-4">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  지식 공유
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  서로의 경험과 노하우를 나눕니다
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 mb-4">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  지속적 성장
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  끊임없이 학습하고 발전합니다
                </p>
              </div>
            </div>
          </div>

          {/* 하단 메시지 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                함께 성장하는 개발자 커뮤니티
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                바이브 코딩 부스에서 당신의 개발 여정을 시작해보세요! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
