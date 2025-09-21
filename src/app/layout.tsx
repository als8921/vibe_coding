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

// DungGeunMo 폰트를 위한 커스텀 설정 - _document.js에서 로드되지 않으므로 경고 발생
// eslint-disable-next-line @next/next/no-page-custom-font
const dungGeunMo = {
  className: "dunggeunmo",
  variable: "--font-dunggeunmo",
};

export const metadata: Metadata = {
  title: "Vibe Coding",
  description: "멋쟁이사자처럼 바이브 코딩 부스",
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
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
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
