import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans-kr",
});

// DungGeunMo 폰트를 위한 커스텀 설정
const dungGeunMo = {
  className: "dunggeunmo",
  variable: "--font-dunggeunmo",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "개똥철학 - 위로의 명언",
  description:
    "외로운 당신을 위한 특별한 위로 메시지. 레트로 픽셀 스타일의 개똥철학 사이트에서 랜덤 명언을 받아보세요!",
  keywords: ["개똥철학", "명언", "위로", "레트로", "픽셀", "게임", "철학"],
  authors: [{ name: "개똥철학자" }],
  creator: "개똥철학자",
  publisher: "개똥철학",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "개똥철학 - 위로의 명언",
    description: "외로운 당신을 위한 특별한 위로 메시지",
    url: "https://개똥철학.com",
    siteName: "개똥철학",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/philosophy-icon.png",
        width: 1200,
        height: 630,
        alt: "개똥철학 - 위로의 명언",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "개똥철학 - 위로의 명언",
    description: "외로운 당신을 위한 특별한 위로 메시지",
    images: ["/philosophy-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/philosophy-icon.png",
    shortcut: "/philosophy-icon.png",
    apple: "/philosophy-icon.png",
  },
};

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${ibmPlexSansKR.variable} ${dungGeunMo.variable}`}
    >
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
        <meta name="theme-color" content="#ff6b6b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="개똥철학" />
      </head>
      <body
        className={`${ibmPlexSansKR.className} ${dungGeunMo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
