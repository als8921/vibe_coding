import type { Metadata } from "next";

export const metadata: Metadata = {
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
  return <>{children}</>;
}
