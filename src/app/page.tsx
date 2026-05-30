"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  MonitorCog,
  Phone,
  Send,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

const projects = [
  {
    title: "Math Word Studio",
    type: "Education Tool",
    desc: "Công cụ soạn nội dung Toán, công thức, hình vẽ, mẫu bài và xuất tài liệu.",
    stack: ["React", "Vite", "Editor", "PDF"],
  },
  {
    title: "Portfolio Website",
    type: "Web App",
    desc: "Website cá nhân giới thiệu năng lực, dự án, kinh nghiệm, CV và liên hệ.",
    stack: ["Next.js", "TypeScript", "CSS"],
  },
  {
    title: "CV Builder",
    type: "Productivity",
    desc: "Bộ tạo CV nhiều mẫu, xem trước, chỉnh nội dung và in/lưu PDF.",
    stack: ["Next.js", "PDF", "Template"],
  },
  {
    title: "IT Support Toolkit",
    type: "Guide",
    desc: "Checklist xử lý lỗi máy tính, mạng, phần mềm, tài khoản và thiết bị.",
    stack: ["Windows", "Network", "Office"],
  },
  {
    title: "Content Workflow",
    type: "AI Workflow",
    desc: "Quy trình tạo thumbnail, kiểm tra, xuất và đăng video số lượng lớn.",
    stack: ["AI Tools", "YouTube", "Facebook"],
  },
  {
    title: "Study Notes App",
    type: "Learning App",
    desc: "Ứng dụng ghi chú học tập, phân loại chủ đề, trạng thái và tiến độ.",
    stack: ["React", "Firebase", "UI"],
  },
];

const experiences = [
  {
    time: "2025 - Nay",
    role: "Nội dung số / AI Workflow",
    place: "YouTube, Facebook, Affiliate Content",
    bullets: [
      "Tạo thumbnail, kiểm tra, xuất và đăng video số lượng lớn.",
      "Xây dựng quy trình nội dung bằng AI tools để giảm thao tác thủ công.",
      "Theo dõi báo cáo công việc hằng ngày và tối ưu quy trình đăng tải.",
    ],
  },
  {
    time: "2022 - Nay",
    role: "Gia sư Toán / Tin học",
    place: "Online & Offline",
    bullets: [
      "Dạy Toán cấp 2, ôn thi chuyển cấp và Tin học cơ bản.",
      "Theo dõi năng lực học sinh, giao bài, nhận xét sau buổi học.",
      "Xây dựng cách giảng dễ hiểu, chia nhỏ vấn đề và sửa lỗi tư duy.",
    ],
  },
  {
    time: "2021 - 2025",
    role: "Sinh viên Kỹ thuật phần mềm",
    place: "Đại học FPT",
    bullets: [
      "Học nền tảng lập trình, cơ sở dữ liệu, web app và quy trình phần mềm.",
      "Thực hành xây dựng sản phẩm web, làm việc nhóm và quản lý task.",
      "Định hướng kết hợp web, IT Support và giáo dục công nghệ.",
    ],
  },
];

const skillGroups = [
  {
    title: "Lập trình",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "C#", "C++"],
  },
  {
    title: "Framework",
    icon: MonitorCog,
    skills: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "IT Support",
    icon: Wrench,
    skills: ["Windows", "Network", "Hardware", "Printer", "Driver", "Office"],
  },
  {
    title: "Giảng dạy",
    icon: GraduationCap,
    skills: ["Toán THCS", "Tin học", "Luyện đề", "Soạn bài", "Theo sát học sinh"],
  },
  {
    title: "Công cụ",
    icon: BriefcaseBusiness,
    skills: ["Git", "GitHub", "VS Code", "Figma", "AI Tools", "CRM"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home">
          <span>DN</span>
          Đặng Minh Nhật
        </a>

        <nav>
          <a href="#about">Giới thiệu</a>
          <a href="#projects">Dự án</a>
          <a href="#experience">Kinh nghiệm</a>
          <a href="#skills">Kỹ năng</a>
          <a href="#cv">CV</a>
          <a href="#contact">Liên hệ</a>
        </nav>

        <a className="navCta" href="#contact">
          Liên hệ tôi
        </a>
      </header>

      <section id="home" className="hero section">
        <div className="heroText">
          <p className="eyebrow">Xin chào! Tôi là</p>
          <h1>
            Đặng Minh <span>Nhật</span>
          </h1>
          <h2>IT Support / Web Developer</h2>
          <p className="lead">
            Tôi xây dựng ứng dụng web hiện đại, hỗ trợ người dùng xử lý vấn đề
            kỹ thuật và ứng dụng công nghệ vào dạy học.
          </p>

          <div className="heroActions">
            <a className="btn primary" href="#projects">
              Xem dự án của tôi <ArrowRight size={18} />
            </a>
            <button className="btn ghost" type="button" onClick={() => window.print()}>
              Tải CV <Download size={18} />
            </button>
          </div>

          <div className="socials">
            <a href="https://github.com/DangMinhNhat1509" aria-label="Github">
              <Github size={18} />
            </a>
            <a href="mailto:dangminhnhat10988@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="#contact" aria-label="Contact">
              <Send size={18} />
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="yellowGlow" />
          <div className="portrait">
            <div className="portraitInner">DN</div>
          </div>
          <div className="floatCard top">
            <Star size={18} />
            <span>Portfolio mới</span>
          </div>
          <div className="floatCard bottom">
            <span>Full Stack</span>
            <b>Developer</b>
          </div>
        </div>
      </section>

      <section className="stats">
        {[
          ["+2", "Năm kinh nghiệm"],
          ["15+", "Dự án / bài thực hành"],
          ["10+", "Công nghệ sử dụng"],
          ["100%", "Tinh thần học hỏi"],
        ].map(([value, label]) => (
          <article key={label}>
            <b>{value}</b>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section id="about" className="section about">
        <div className="sectionHead">
          <p className="eyebrow">Giới thiệu</p>
          <h2>
            Tôi tập trung vào <span>web, hỗ trợ kỹ thuật</span> và giáo dục.
          </h2>
        </div>

        <div className="aboutGrid">
          <div className="aboutPhoto">DN</div>
          <div className="aboutContent">
            <h3>Đặng Minh Nhật</h3>
            <p>
              Tôi có nền tảng kỹ thuật phần mềm, kinh nghiệm giảng dạy Toán/Tin
              học và đang phát triển theo hướng kết hợp IT Support, Web
              Development và công nghệ giáo dục.
            </p>
            <p>
              Điểm mạnh của tôi là biết chia nhỏ vấn đề, giải thích dễ hiểu,
              chịu khó học công cụ mới và xây dựng quy trình làm việc thực tế.
            </p>

            <div className="facts">
              <span>Email: dangminhnhat10988@gmail.com</span>
              <span>GitHub: DangMinhNhat1509</span>
              <span>Định hướng: IT Support / Web Developer</span>
              <span>Khu vực: Việt Nam</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionHead row">
          <div>
            <p className="eyebrow">Dự án</p>
            <h2>
              Dự án <span>nổi bật</span>
            </h2>
          </div>
          <div className="filters">
            <span className="active">Tất cả</span>
            <span>Web App</span>
            <span>Tool</span>
            <span>CV</span>
            <span>Giáo dục</span>
          </div>
        </div>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className={`projectImage img${(index % 3) + 1}`}>
                <span>{project.type}</span>
              </div>
              <div className="projectBody">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.desc}</span>
                <div className="tags">
                  {project.stack.map((item) => (
                    <i key={item}>{item}</i>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="caseStudy">
          <div className="caseIcon">
            <Sparkles size={54} />
          </div>
          <div>
            <p className="eyebrow">Case study nổi bật</p>
            <h3>Math Word Studio - công cụ hỗ trợ soạn bài Toán</h3>
            <div className="caseCols">
              <div>
                <b>Bài toán</b>
                <p>Soạn đề Toán có công thức, hình vẽ và bố cục đẹp mất thời gian.</p>
              </div>
              <div>
                <b>Giải pháp</b>
                <p>Tạo editor web có mẫu bài, công thức nhanh và xuất tài liệu.</p>
              </div>
              <div>
                <b>Công nghệ</b>
                <p>React, Vite, CSS, dữ liệu mẫu và workflow xuất tài liệu.</p>
              </div>
              <div>
                <b>Kết quả</b>
                <p>Gom quy trình soạn bài vào một nơi, dễ mở rộng về sau.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Kinh nghiệm</p>
          <h2>
            Kinh nghiệm <span>làm việc</span>
          </h2>
        </div>

        <div className="timeline">
          {experiences.map((item) => (
            <article className="timelineItem" key={item.role}>
              <div className="dot" />
              <div className="timelineCard">
                <time>{item.time}</time>
                <h3>{item.role}</h3>
                <p>{item.place}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="sectionHead">
          <p className="eyebrow">Kỹ năng</p>
          <h2>
            Kỹ năng của <span>tôi</span>
          </h2>
        </div>

        <div className="skillGrid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skillCard" key={group.title}>
                <div className="skillTitle">
                  <Icon size={24} />
                  <h3>{group.title}</h3>
                </div>
                <div className="tags">
                  {group.skills.map((skill) => (
                    <i key={skill}>{skill}</i>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="cv" className="section">
        <div className="sectionHead">
          <p className="eyebrow">CV / Resume</p>
          <h2>
            CV mẫu <span>vàng đen</span>
          </h2>
        </div>

        <div className="cvWrap">
          <article className="cvSheet">
            <aside>
              <div className="cvAvatar">DN</div>
              <h3>Đặng Minh Nhật</h3>
              <p>IT Support / Web Developer</p>

              <div className="cvBlock">
                <b>Liên hệ</b>
                <span>dangminhnhat10988@gmail.com</span>
                <span>github.com/DangMinhNhat1509</span>
                <span>Việt Nam</span>
              </div>

              <div className="cvBlock">
                <b>Kỹ năng chính</b>
                {["JavaScript", "React", "Next.js", "IT Support", "Teaching"].map(
                  (item) => (
                    <span key={item}>{item}</span>
                  )
                )}
              </div>
            </aside>

            <div className="cvMain">
              <section>
                <h3>Mục tiêu nghề nghiệp</h3>
                <p>
                  Phát triển ở vị trí IT Support / Web Developer, kết hợp kỹ năng
                  hỗ trợ người dùng, xây dựng web app và ứng dụng công nghệ vào
                  giáo dục.
                </p>
              </section>

              <section>
                <h3>Kinh nghiệm</h3>
                {experiences.map((item) => (
                  <div className="cvJob" key={item.role}>
                    <b>{item.role}</b>
                    <span>{item.place} · {item.time}</span>
                    <p>{item.bullets[0]}</p>
                  </div>
                ))}
              </section>

              <section>
                <h3>Dự án</h3>
                {projects.slice(0, 3).map((item) => (
                  <div className="cvJob" key={item.title}>
                    <b>{item.title}</b>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </section>
            </div>
          </article>

          <div className="cvActions">
            <h3>Tải xuống CV</h3>
            <p>Bấm nút dưới đây rồi chọn Save as PDF trong trình duyệt.</p>
            <button className="btn primary" type="button" onClick={() => window.print()}>
              Tải CV / In PDF <Download size={18} />
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Liên hệ</p>
          <h2>
            Liên hệ <span>với tôi</span>
          </h2>
          <p className="lead">
            Bạn có thể liên hệ qua email, GitHub hoặc gửi thông tin qua form mẫu.
          </p>

          <div className="contactList">
            <div><Mail size={20} /><span>dangminhnhat10988@gmail.com</span></div>
            <div><Github size={20} /><span>github.com/DangMinhNhat1509</span></div>
            <div><Phone size={20} /><span>Cập nhật khi cần</span></div>
            <div><MapPin size={20} /><span>Việt Nam</span></div>
          </div>
        </div>

        <form className="contactForm">
          <label>Họ và tên<input placeholder="Nhập họ tên" /></label>
          <label>Email<input placeholder="Nhập email" /></label>
          <label>Nội dung<textarea placeholder="Nhập nội dung tin nhắn" rows={6} /></label>
          <button className="btn primary" type="button">
            Gửi tin nhắn <Send size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}
