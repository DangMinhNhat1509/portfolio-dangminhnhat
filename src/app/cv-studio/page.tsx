import Link from "next/link";
import styles from "./cv-studio.module.css";

const sections = [
  ["Thông tin cá nhân", "Điền họ tên, vị trí, liên hệ"],
  ["Kinh nghiệm làm việc", "Thêm công việc, số liệu, đóng góp"],
  ["Học vấn", "Trường học, chuyên ngành, thời gian"],
  ["Kỹ năng", "IT Support, giảng dạy, công cụ"],
  ["Dự án", "Portfolio, CV web, Math Word Studio"],
  ["Chứng chỉ", "Tin học, sư phạm, khóa học"],
  ["Giải thưởng", "Thành tích nổi bật"],
];

const templates = ["Navy Pro", "Yellow IT", "Minimal A4"];

const skills = [
  ["IT Support", "82%"],
  ["Tin học văn phòng", "88%"],
  ["Giảng dạy Toán", "86%"],
  ["React / Web cơ bản", "74%"],
];

export default function CVStudioPage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.brand}>
          <span>CV</span>
          CV Studio
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Trang chủ</Link>
          <a href="#templates">Mẫu CV</a>
          <a href="#editor">Chỉnh sửa</a>
          <a href="#preview">Xem trước</a>
        </nav>

        <div className={styles.actions}>
          <button type="button" className={styles.ghostButton}>
            Lưu nháp
          </button>
          <button type="button" className={styles.primaryButton}>
            Tải PDF
          </button>
        </div>
      </header>

      <section className={styles.workspace}>
        <aside className={styles.sidebar} id="editor">
          <div className={styles.tabs}>
            <button type="button" className={styles.activeTab}>
              Nội dung
            </button>
            <button type="button">Mẫu CV</button>
            <button type="button">Thiết kế</button>
          </div>

          <div className={styles.panelTitle}>
            <span>Trình chỉnh sửa</span>
            <small>Chọn mục cần hoàn thiện</small>
          </div>

          <div className={styles.sectionList}>
            {sections.map(([title, desc]) => (
              <button type="button" className={styles.sectionItem} key={title}>
                <span className={styles.sectionIcon}>□</span>
                <span>
                  <strong>{title}</strong>
                  <small>{desc}</small>
                </span>
                <b>›</b>
              </button>
            ))}
          </div>

          <button type="button" className={styles.addButton}>
            + Thêm mục khác
          </button>
        </aside>

        <section className={styles.previewArea} id="preview">
          <div className={styles.previewHeader}>
            <div>
              <span>Xem trước CV</span>
              <small>Bố cục A4 sạch, dễ đọc</small>
            </div>
            <div>
              <button type="button">Xem trước</button>
              <button type="button">Xuất PDF</button>
            </div>
          </div>

          <article className={styles.cvPaper}>
            <div className={styles.cvHero}>
              <div className={styles.avatar} />
              <div>
                <h1>Nguyễn Văn A</h1>
                <p>IT Support / Giáo viên Tin học</p>
                <ul>
                  <li>Đồng Nai, Việt Nam</li>
                  <li>0123 456 789</li>
                  <li>email@example.com</li>
                </ul>
              </div>
            </div>

            <div className={styles.cvBody}>
              <div className={styles.cvLeft}>
                <section>
                  <h2>Giới thiệu</h2>
                  <p>
                    Ứng viên định hướng IT Support, có nền tảng tin học, khả
                    năng hướng dẫn người dùng và kinh nghiệm giảng dạy trực
                    tuyến.
                  </p>
                </section>

                <section>
                  <h2>Kỹ năng</h2>
                  {skills.map(([name, value]) => (
                    <div className={styles.skill} key={name}>
                      <div>
                        <span>{name}</span>
                        <small>{value}</small>
                      </div>
                      <i>
                        <b style={{ width: value }} />
                      </i>
                    </div>
                  ))}
                </section>

                <section>
                  <h2>Học vấn</h2>
                  <p>
                    Nghiệp vụ sư phạm Tin học THCS/THPT
                    <br />
                    Định hướng giảng dạy và ứng dụng công nghệ giáo dục.
                  </p>
                </section>
              </div>

              <div className={styles.cvRight}>
                <section>
                  <h2>Kinh nghiệm làm việc</h2>
                  <div className={styles.job}>
                    <h3>Gia sư Toán online</h3>
                    <span>2025 - Hiện tại</span>
                    <ul>
                      <li>Dạy Toán lớp 7, 8 và ôn thi chuyển cấp.</li>
                      <li>Soạn đề, chữa bài, theo dõi tiến độ học sinh.</li>
                      <li>Giao tiếp với phụ huynh sau từng buổi học.</li>
                    </ul>
                  </div>

                  <div className={styles.job}>
                    <h3>Dự án CV / Web cá nhân</h3>
                    <span>2026</span>
                    <ul>
                      <li>Xây dựng trang portfolio và công cụ tạo CV.</li>
                      <li>Tối ưu bố cục giao diện, nội dung và trải nghiệm.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2>Dự án nổi bật</h2>
                  <p>
                    Math Word Studio: công cụ hỗ trợ soạn nội dung Toán học,
                    công thức, hình học và tài liệu học tập.
                  </p>
                </section>
              </div>
            </div>
          </article>
        </section>

        <aside className={styles.templatePanel} id="templates">
          <div className={styles.panelTitle}>
            <span>Mẫu CV</span>
            <small>Chọn phong cách phù hợp</small>
          </div>

          {templates.map((name, index) => (
            <button
              type="button"
              className={`${styles.templateCard} ${index === 0 ? styles.selectedTemplate : ""}`}
              key={name}
            >
              <span>{name}</span>
              <small>{index === 0 ? "Đang chọn" : "Có thể dùng"}</small>
            </button>
          ))}

          <div className={styles.designBox}>
            <span>Màu chủ đạo</span>
            <div className={styles.colorDots}>
              <i />
              <i />
              <i />
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
