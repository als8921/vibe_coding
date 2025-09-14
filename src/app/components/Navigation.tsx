"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
          >
            🧠 성격 분석 도구
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                pathname === "/"
                  ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
              }`}
            >
              홈
            </Link>
            <Link
              href="/mbti"
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                pathname.startsWith("/mbti")
                  ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
              }`}
            >
              MBTI 테스트
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
