import type { Metadata } from "next";
import { Noto_Sans_Tamil, Noto_Serif_Tamil, Inter } from "next/font/google";
import "./globals.css";

const notoSansTamil = Noto_Sans_Tamil({
  weight: ["400", "500", "600"],
  subsets: ["tamil"],
  variable: "--font-noto-sans-tamil",
});

const notoSerifTamil = Noto_Serif_Tamil({
  weight: ["400", "600", "700"],
  subsets: ["tamil"],
  variable: "--font-noto-serif-tamil",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "கர்பகுடி – ஓசூர் | உங்கள் வீட்டிலும் குட்டி காலடிச் சத்தம் கேட்கட்டும்",
  description:
    "கர்பகுடி கருத்தரித்தல் மையம் – ஓசூர். 15+ ஆண்டு அனுபவம், 15,000+ குடும்பங்களின் நம்பிக்கை. இலவச ஆலோசனை பெற இப்போதே அழைக்கவும்.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ta"
      className={`${notoSansTamil.variable} ${notoSerifTamil.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
