import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
              🧠 성격 분석 도구 모음
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              다양한 심리 테스트로 당신의 성격을 알아보세요!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* MBTI 테스트 카드 */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  MBTI 성격 유형 검사
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  4개의 현실적인 질문으로 16가지 성격 유형을 분석합니다.
                </p>
                <Link
                  href="/mbti"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  테스트 시작하기 →
                </Link>
              </div>

              {/* 추가 테스트 카드들 (향후 확장용) */}
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 opacity-50">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  직업 성향 테스트
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  당신에게 맞는 직업을 찾아보세요. (준비 중)
                </p>
                <button
                  disabled
                  className="inline-block bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
                >
                  준비 중...
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 opacity-50">
                <div className="text-4xl mb-4">💕</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  연애 스타일 테스트
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  당신의 연애 스타일을 알아보세요. (준비 중)
                </p>
                <button
                  disabled
                  className="inline-block bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold cursor-not-allowed"
                >
                  준비 중...
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                더 많은 테스트가 곧 추가될 예정입니다! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
