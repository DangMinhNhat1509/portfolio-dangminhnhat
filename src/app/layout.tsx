import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Đặng Minh Nhật",
  description: "Portfolio và CV Studio của Đặng Minh Nhật",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
