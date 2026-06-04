"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./FloatingCvButton.module.css";

export default function FloatingCvButton() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <Link href="/cv" className={styles.button} aria-label="Mở trang tạo CV">
      <span>CV</span>
      Tạo CV
    </Link>
  );
}
