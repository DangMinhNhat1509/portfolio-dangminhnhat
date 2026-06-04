import Link from "next/link";
import styles from "./cv.module.css";

const features = [
  {
    icon: "▣",
    title: "Mẫu CV chuyên nghiệp",
    desc: "Chọn nhanh các bố cục CV rõ ràng, hiện đại, phù hợp ứng tuyển IT và giáo dục.",
  },
  {
    icon: "✦",
    title: "Dễ chỉnh sửa",
    desc: "Tập trung vào nội dung, kinh nghiệm, kỹ năng và mục tiêu nghề nghiệp.",
  },
  {
    icon: "◈",
    title: "Chuẩn A4",
    desc: "Bố cục được thiết kế theo hướng dễ in, dễ xuất PDF và dễ gửi nhà tuyển dụng.",
  },
  {
    icon: "↗",
    title: "Dùng ngay trên web",
    desc: "Không cần cài thêm phần mềm, mở trình duyệt là có thể tạo CV.",
  },
];

const stats = [
  ["2+", "Phong cách CV chính"],
  ["A4", "Bố cục in ấn"],
  ["Web", "Chỉnh sửa trực tiếp"],
  ["PDF", "Định hướng xuất file"],
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logo}>CV</span>
          <span>CV Studio</span>
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/">Trang chủ</Link>
          <a href="#features">Tính năng</a>
          <a href="#templates">Mẫu CV</a>
          <a href="#guide">Hướng dẫn</a>
        </nav>

        <Link href="/cv-studio" className={styles.navButton}>
          Tạo CV ngay
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Công cụ tạo CV cá nhân</span>
          <h1>
            Tạo CV ấn tượng,
            <br />
            <span>nâng tầm sự nghiệp</span>
          </h1>
          <p>
            Thiết kế CV rõ ràng, đẹp mắt và dễ tùy chỉnh. Phù hợp cho hồ sơ IT
            Support, giáo viên, gia sư, thực tập sinh và các vị trí mới bắt đầu.
          </p>

          <div className={styles.heroActions}>
            <Link href="/cv-studio" className={styles.primaryButton}>
              Tạo CV ngay
              <span>→</span>
            </Link>
            <a href="#guide" className={styles.secondaryButton}>
              Xem hướng dẫn
            </a>
          </div>
        </div>

        <div className={styles.heroPreview}>
          <div className={styles.cvCard}>
            <div className={styles.cvTop}>
              <div className={styles.avatar} />
              <div>
                <div className={styles.lineLarge} />
                <div className={styles.lineSmall} />
              </div>
            </div>
            <div className={styles.cvGrid}>
              <div>
                <div className={styles.blockTitle} />
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.lineShort} />
              </div>
              <div>
                <div className={styles.blockTitle} />
                <div className={styles.line} />
                <div className={styles.lineShort} />
                <div className={styles.line} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={styles.features}>
        {features.map((item) => (
          <article className={styles.featureCard} key={item.title}>
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>

      <section id="templates" className={styles.statsPanel}>
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="guide" className={styles.ctaPanel}>
        <div>
          <span>Sẵn sàng tạo CV của bạn?</span>
          <p>Vào CV Studio để chọn mẫu, chỉnh nội dung và xem trước CV.</p>
        </div>
        <Link href="/cv-studio" className={styles.ctaButton}>
          Mở trang làm CV
          <span>→</span>
        </Link>
      </section>
    </main>
  );
}
