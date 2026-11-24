import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YAVUZYİĞİT AI Prodüksiyon Stüdyosu",
  description: "Gayrimenkul projeleri için yapay zekâ destekli video prodüksiyon stüdyosu.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
