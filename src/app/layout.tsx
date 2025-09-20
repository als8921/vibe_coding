import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Sans_KR,
  Press_Start_2P,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-kr",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start-2p",
});

// DungGeunMo 폰트를 위한 커스텀 설정
const dungGeunMo = {
  className: "dunggeunmo",
  variable: "--font-dunggeunmo",
};

export const metadata: Metadata = {
  title: "성격 분석 도구 모음",
  description: "다양한 심리 테스트로 당신의 성격을 알아보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DungGeunMo&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/neodgm.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSansKR.variable} ${pressStart2P.variable} ${dungGeunMo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
