import type { Metadata } from "next";
import "./globals.css";
import FloatingCvButton from "@/components/FloatingCvButton";

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
      <body suppressHydrationWarning>{children}        <FloatingCvButton />
      </body>
    </html>
  );
}