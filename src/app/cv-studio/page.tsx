"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./cv-studio.module.css";

type TabKey = "quick" | "content" | "templates" | "design";
type TemplateKey =
  | "navy"
  | "yellow"
  | "minimal"
  | "classic"
  | "modernBlue"
  | "teacher"
  | "techGrid"
  | "executive"
  | "creativePurple"
  | "emerald"
  | "orange"
  | "slate"
  | "monochrome"
  | "compact"
  | "rose"
  | "cyan"
  | "brown"
  | "blackGold"
  | "lavender"
  | "atsSimple";

type AvatarShape = "circle" | "rounded" | "square" | "portrait";
type SectionKey =
  | "summary"
  | "experience"
  | "skills"
  | "education"
  | "projects"
  | "certificates";

type Profile = {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  website: string;
};

type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

type Project = {
  id: string;
  name: string;
  desc: string;
};

type CVData = {
  profile: Profile;
  summary: string;
  experience: Experience[];
  education: string;
  skills: string[];
  projects: Project[];
  certificates: string[];
};

const STORAGE_KEY = "cv-studio-v1";

const initialCv: CVData = {
  profile: {
    name: "Nguyễn Văn A",
    role: "IT Support / Giáo viên Tin học",
    location: "Đồng Nai, Việt Nam",
    phone: "0123 456 789",
    email: "email@example.com",
    website: "portfolio.example.com",
  },
  summary:
    "Ứng viên định hướng IT Support, có nền tảng tin học, khả năng hướng dẫn người dùng và kinh nghiệm giảng dạy trực tuyến.",
  experience: [
    {
      id: "exp-1",
      title: "Gia sư Toán online",
      company: "Dạy học cá nhân",
      period: "2025 - Hiện tại",
      bullets: [
        "Dạy Toán lớp 7, 8 và ôn thi chuyển cấp.",
        "Soạn đề, chữa bài, theo dõi tiến độ học sinh.",
        "Giao tiếp với phụ huynh sau từng buổi học.",
      ],
    },
    {
      id: "exp-2",
      title: "Dự án CV / Web cá nhân",
      company: "Portfolio cá nhân",
      period: "2026",
      bullets: [
        "Xây dựng trang portfolio và công cụ tạo CV.",
        "Tối ưu bố cục giao diện, nội dung và trải nghiệm.",
      ],
    },
  ],
  education:
    "Nghiệp vụ sư phạm Tin học THCS/THPT\nĐịnh hướng giảng dạy và ứng dụng công nghệ giáo dục.",
  skills: [
    "IT Support",
    "Tin học văn phòng",
    "Giảng dạy Toán",
    "React / Web cơ bản",
  ],
  projects: [
    {
      id: "project-1",
      name: "Math Word Studio",
      desc: "Công cụ hỗ trợ soạn nội dung Toán học, công thức, hình học và tài liệu học tập.",
    },
  ],
  certificates: ["Chứng chỉ / khóa học liên quan đến Tin học và giảng dạy"],
};

const templateMeta: Record<
  TemplateKey,
  { name: string; desc: string; note: string }
> = {
  navy: {
    name: "Navy Pro",
    desc: "Sidebar xanh đậm, chuyên nghiệp",
    note: "Hợp IT Support, văn phòng, kỹ thuật.",
  },
  yellow: {
    name: "Yellow IT",
    desc: "Đen vàng nổi bật",
    note: "Hợp CV kỹ thuật, support, fresher IT.",
  },
  minimal: {
    name: "Minimal A4",
    desc: "Tối giản, dễ in",
    note: "Hợp gửi nhiều công ty, dễ đọc, ít rủi ro.",
  },
  classic: {
    name: "Classic Serif",
    desc: "Truyền thống, nghiêm túc",
    note: "Hợp giáo dục, hành chính, ứng tuyển phổ thông.",
  },
  modernBlue: {
    name: "Modern Blue",
    desc: "Hiện đại, sạch, màu xanh",
    note: "Hợp văn phòng, IT, vận hành.",
  },
  teacher: {
    name: "Teacher Soft",
    desc: "Nhẹ nhàng cho giáo viên/gia sư",
    note: "Hợp hồ sơ giáo dục, trợ giảng, trung tâm.",
  },
  techGrid: {
    name: "Tech Grid",
    desc: "Cảm giác công nghệ",
    note: "Hợp portfolio, web, IT support.",
  },
  executive: {
    name: "Executive",
    desc: "Cứng cáp, cao cấp",
    note: "Hợp CV chuyên nghiệp, kinh nghiệm rõ.",
  },
  creativePurple: {
    name: "Creative Purple",
    desc: "Sáng tạo nhưng vẫn gọn",
    note: "Hợp content, thiết kế nhẹ, marketing.",
  },
  emerald: {
    name: "Emerald Clean",
    desc: "Xanh ngọc sạch sẽ",
    note: "Hợp giáo dục, vận hành, dịch vụ.",
  },
  orange: {
    name: "Orange Startup",
    desc: "Năng động, trẻ",
    note: "Hợp startup, fresher, thực tập.",
  },
  slate: {
    name: "Slate Sidebar",
    desc: "Sidebar xám than",
    note: "Hợp CV có nhiều kỹ năng và dự án.",
  },
  monochrome: {
    name: "Monochrome ATS",
    desc: "Đen trắng dễ qua ATS",
    note: "Hợp nộp online, in trắng đen.",
  },
  compact: {
    name: "Compact Pro",
    desc: "Gọn nhiều nội dung",
    note: "Hợp CV có nhiều kinh nghiệm, muốn tiết kiệm trang.",
  },
  rose: {
    name: "Rose Elegant",
    desc: "Thanh lịch, mềm hơn",
    note: "Hợp hành chính, giáo dục, dịch vụ.",
  },
  cyan: {
    name: "Cyan Data",
    desc: "Sáng, rõ, kiểu data/IT",
    note: "Hợp kỹ thuật, phân tích, tin học.",
  },
  brown: {
    name: "Brown Classic",
    desc: "Ấm, cổ điển",
    note: "Hợp giáo viên, gia sư, văn phòng.",
  },
  blackGold: {
    name: "Black Gold",
    desc: "Đen vàng cao cấp",
    note: "Hợp CV muốn nổi bật mạnh.",
  },
  lavender: {
    name: "Lavender Soft",
    desc: "Tím nhạt nhẹ nhàng",
    note: "Hợp fresher, giáo dục, trợ lý.",
  },
  atsSimple: {
    name: "ATS Simple",
    desc: "Một cột cực dễ đọc",
    note: "Hợp nộp hệ thống tuyển dụng tự động.",
  },
};


const avatarShapeMeta: Record<AvatarShape, { name: string; desc: string }> = {
  circle: { name: "Tròn", desc: "Ảnh đại diện tròn" },
  rounded: { name: "Bo góc", desc: "Ảnh vuông bo mềm" },
  square: { name: "Vuông", desc: "Ảnh vuông rõ khối" },
  portrait: { name: "Chữ nhật", desc: "Ảnh chân dung dọc" },
};

const templateClassMap: Record<TemplateKey, string> = {
  navy: styles.navyTemplate,
  yellow: styles.yellowTemplate,
  minimal: styles.minimalTemplate,
  classic: styles.classicTemplate,
  modernBlue: styles.modernBlueTemplate,
  teacher: styles.teacherTemplate,
  techGrid: styles.techGridTemplate,
  executive: styles.executiveTemplate,
  creativePurple: styles.creativePurpleTemplate,
  emerald: styles.emeraldTemplate,
  orange: styles.orangeTemplate,
  slate: styles.slateTemplate,
  monochrome: styles.monochromeTemplate,
  compact: styles.compactTemplate,
  rose: styles.roseTemplate,
  cyan: styles.cyanTemplate,
  brown: styles.brownTemplate,
  blackGold: styles.blackGoldTemplate,
  lavender: styles.lavenderTemplate,
  atsSimple: styles.atsSimpleTemplate,
};

const avatarShapeClassMap: Record<AvatarShape, string> = {
  circle: styles.avatarCircle,
  rounded: styles.avatarRounded,
  square: styles.avatarSquare,
  portrait: styles.avatarPortrait,
};

const sectionLabels: Record<SectionKey, string> = {
  summary: "Giới thiệu",
  experience: "Kinh nghiệm",
  skills: "Kỹ năng",
  education: "Học vấn",
  projects: "Dự án",
  certificates: "Chứng chỉ",
};

function makeId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function cleanLines(text: string) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function detectSection(line: string): SectionKey | null {
  const text = normalizeText(line).replace(/[:：]/g, "");

  if (/(gioi thieu|muc tieu|tom tat|summary)/.test(text)) return "summary";
  if (/(kinh nghiem|experience|viec lam|cong viec)/.test(text))
    return "experience";
  if (/(ky nang|skill)/.test(text)) return "skills";
  if (/(hoc van|education|bang cap)/.test(text)) return "education";
  if (/(du an|project)/.test(text)) return "projects";
  if (/(chung chi|certificate|giai thuong)/.test(text))
    return "certificates";

  return null;
}

function readValue(line: string, labels: string[]) {
  const normalized = normalizeText(line);
  const matched = labels.find((label) => normalized.startsWith(label));

  if (!matched) return "";

  const index = line.indexOf(":");
  if (index >= 0) return line.slice(index + 1).trim();

  return line.replace(new RegExp(matched, "i"), "").trim();
}

function parseBullets(text: string) {
  return cleanLines(text).map((line) => line.replace(/^[-•*]\s*/, "").trim());
}

function parseExperience(lines: string[]): Experience[] {
  const jobs: Experience[] = [];
  let current: Experience | null = null;

  lines.forEach((rawLine) => {
    const isBullet = /^[-•*]\s+/.test(rawLine);
    const line = rawLine.replace(/^[-•*]\s*/, "").trim();

    if (!line) return;

    if (isBullet) {
      if (!current) {
        current = {
          id: makeId("exp"),
          title: "Kinh nghiệm",
          company: "",
          period: "",
          bullets: [],
        };
        jobs.push(current);
      }

      current.bullets.push(line);
      return;
    }

    const looksLikePeriod = /\b(20\d{2}|19\d{2}|nay|hiện tại|present)\b/i.test(
      line,
    );

    if (looksLikePeriod && current && !current.period) {
      current.period = line;
      return;
    }

    current = {
      id: makeId("exp"),
      title: line,
      company: "",
      period: "",
      bullets: [],
    };
    jobs.push(current);
  });

  return jobs.length ? jobs : initialCv.experience;
}

function parseProjects(lines: string[]): Project[] {
  if (!lines.length) return initialCv.projects;

  const projects: Project[] = [];
  let current: Project | null = null;

  lines.forEach((rawLine) => {
    const isBullet = /^[-•*]\s+/.test(rawLine);
    const line = rawLine.replace(/^[-•*]\s*/, "").trim();

    if (!line) return;

    if (!current || !isBullet) {
      current = {
        id: makeId("project"),
        name: line,
        desc: "",
      };
      projects.push(current);
      return;
    }

    current.desc = current.desc ? `${current.desc} ${line}` : line;
  });

  return projects;
}

function parseQuickText(text: string, currentCv: CVData): CVData {
  const lines = cleanLines(text);
  const buckets: Partial<Record<SectionKey, string[]>> = {};
  let activeSection: SectionKey | null = null;
  const profile: Partial<Profile> = {};

  lines.forEach((line, index) => {
    const section = detectSection(line);

    if (section) {
      activeSection = section;
      if (!buckets[section]) buckets[section] = [];
      return;
    }

    const name = readValue(line, ["ho ten", "ten", "name"]);
    const role = readValue(line, ["vi tri", "chuc danh", "role"]);
    const phone = readValue(line, ["dien thoai", "sdt", "phone"]);
    const email = readValue(line, ["email", "mail"]);
    const location = readValue(line, ["dia chi", "location", "noi o"]);
    const website = readValue(line, ["website", "portfolio", "linkedin"]);

    if (name) profile.name = name;
    if (role) profile.role = role;
    if (phone) profile.phone = phone;
    if (email) profile.email = email;
    if (location) profile.location = location;
    if (website) profile.website = website;

    if (!activeSection && index === 0 && !name && line.length < 60) {
      profile.name = line;
      return;
    }

    if (activeSection) {
      buckets[activeSection] = [...(buckets[activeSection] || []), line];
    }
  });

  return {
    ...currentCv,
    profile: {
      ...currentCv.profile,
      ...profile,
    },
    summary: buckets.summary?.length
      ? buckets.summary.join(" ")
      : currentCv.summary,
    experience: buckets.experience?.length
      ? parseExperience(buckets.experience)
      : currentCv.experience,
    education: buckets.education?.length
      ? buckets.education.join("\n")
      : currentCv.education,
    skills: buckets.skills?.length
      ? parseBullets(buckets.skills.join("\n"))
      : currentCv.skills,
    projects: buckets.projects?.length
      ? parseProjects(buckets.projects)
      : currentCv.projects,
    certificates: buckets.certificates?.length
      ? parseBullets(buckets.certificates.join("\n"))
      : currentCv.certificates,
  };
}

export default function CVStudioPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("quick");
  const [cv, setCv] = useState<CVData>(initialCv);
  const [template, setTemplate] = useState<TemplateKey>("navy");
  const [quickText, setQuickText] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#315cff");
  const [fontScale, setFontScale] = useState(1);
  const [spacing, setSpacing] = useState(24);
  const [avatarShape, setAvatarShape] = useState<AvatarShape>("circle");
  const [sectionOrder, setSectionOrder] = useState<SectionKey[]>([
    "summary",
    "experience",
    "skills",
    "education",
    "projects",
    "certificates",
  ]);
  const [dragging, setDragging] = useState<SectionKey | null>(null);
  const [saveStatus, setSaveStatus] = useState("Chưa lưu");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as {
        cv?: CVData;
        template?: TemplateKey;
        primaryColor?: string;
        fontScale?: number;
        spacing?: number;
        sectionOrder?: SectionKey[];
        avatarShape?: AvatarShape;
      };

      if (parsed.cv) setCv(parsed.cv);
      if (parsed.template) setTemplate(parsed.template);
      if (parsed.primaryColor) setPrimaryColor(parsed.primaryColor);
      if (parsed.fontScale) setFontScale(parsed.fontScale);
      if (parsed.spacing) setSpacing(parsed.spacing);
      if (parsed.sectionOrder) setSectionOrder(parsed.sectionOrder);
      if (parsed.avatarShape) setAvatarShape(parsed.avatarShape);
      setSaveStatus("Đã tải bản nháp");
    } catch {
      setSaveStatus("Không đọc được bản nháp cũ");
    }
  }, []);

  const templateClass = templateClassMap[template] || styles.navyTemplate;
  const avatarShapeClass = avatarShapeClassMap[avatarShape] || styles.avatarCircle;

  const paperStyle = {
    "--cv-accent": primaryColor,
    "--cv-font-scale": fontScale,
    "--cv-section-gap": `${spacing}px`,
  } as CSSProperties;

  const completionScore = useMemo(() => {
    let score = 0;
    if (cv.profile.name) score += 15;
    if (cv.profile.role) score += 10;
    if (cv.summary) score += 15;
    if (cv.experience.length) score += 20;
    if (cv.skills.length) score += 15;
    if (cv.education) score += 10;
    if (cv.projects.length) score += 10;
    if (cv.certificates.length) score += 5;
    return score;
  }, [cv]);

  function saveDraft() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cv,
        template,
        primaryColor,
        fontScale,
        spacing,
        sectionOrder,
        avatarShape,
      }),
    );
    setSaveStatus("Đã lưu nháp");
  }

  function applyQuickText() {
    if (!quickText.trim()) {
      setSaveStatus("Bạn chưa dán nội dung");
      return;
    }

    setCv((current) => parseQuickText(quickText, current));
    setActiveTab("content");
    setSaveStatus("Đã nhận diện nội dung");
  }

  function updateProfile(key: keyof Profile, value: string) {
    setCv((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [key]: value,
      },
    }));
    setSaveStatus("Có thay đổi chưa lưu");
  }

  function updateExperience(
    id: string,
    key: keyof Omit<Experience, "id">,
    value: string | string[],
  ) {
    setCv((current) => ({
      ...current,
      experience: current.experience.map((item) =>
        item.id === id ? { ...item, [key]: value } : item,
      ),
    }));
    setSaveStatus("Có thay đổi chưa lưu");
  }

  function addExperience() {
    setCv((current) => ({
      ...current,
      experience: [
        ...current.experience,
        {
          id: makeId("exp"),
          title: "Vị trí mới",
          company: "Tên đơn vị",
          period: "Thời gian",
          bullets: ["Mô tả đóng góp chính."],
        },
      ],
    }));
  }

  function removeExperience(id: string) {
    setCv((current) => ({
      ...current,
      experience: current.experience.filter((item) => item.id !== id),
    }));
  }

  function addProject() {
    setCv((current) => ({
      ...current,
      projects: [
        ...current.projects,
        {
          id: makeId("project"),
          name: "Dự án mới",
          desc: "Mô tả ngắn về dự án.",
        },
      ],
    }));
  }

  function updateProject(id: string, key: keyof Omit<Project, "id">, value: string) {
    setCv((current) => ({
      ...current,
      projects: current.projects.map((project) =>
        project.id === id ? { ...project, [key]: value } : project,
      ),
    }));
    setSaveStatus("Có thay đổi chưa lưu");
  }

  function removeProject(id: string) {
    setCv((current) => ({
      ...current,
      projects: current.projects.filter((project) => project.id !== id),
    }));
  }

  function moveSection(from: SectionKey, to: SectionKey) {
    setSectionOrder((current) => {
      const next = [...current];
      const fromIndex = next.indexOf(from);
      const toIndex = next.indexOf(to);

      if (fromIndex < 0 || toIndex < 0) return current;

      next.splice(fromIndex, 1);
      next.splice(toIndex, 0, from);
      return next;
    });
    setSaveStatus("Có thay đổi chưa lưu");
  }

  function shiftSection(section: SectionKey, direction: "up" | "down") {
    setSectionOrder((current) => {
      const index = current.indexOf(section);
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex >= current.length) return current;

      const next = [...current];
      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      return next;
    });
  }

  function renderCvSection(section: SectionKey): ReactNode {
    if (section === "summary") {
      return (
        <section>
          <h2>Giới thiệu</h2>
          <p>{cv.summary}</p>
        </section>
      );
    }

    if (section === "experience") {
      return (
        <section>
          <h2>Kinh nghiệm làm việc</h2>
          {cv.experience.map((job) => (
            <div className={styles.cvJob} key={job.id}>
              <h3>{job.title}</h3>
              <span>
                {job.company}
                {job.company && job.period ? " · " : ""}
                {job.period}
              </span>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      );
    }

    if (section === "skills") {
      return (
        <section>
          <h2>Kỹ năng</h2>
          <div className={styles.skillTags}>
            {cv.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>
      );
    }

    if (section === "education") {
      return (
        <section>
          <h2>Học vấn</h2>
          {cv.education.split("\n").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </section>
      );
    }

    if (section === "projects") {
      return (
        <section>
          <h2>Dự án nổi bật</h2>
          {cv.projects.map((project) => (
            <div className={styles.cvJob} key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </section>
      );
    }

    return (
      <section>
        <h2>Chứng chỉ</h2>
        <ul>
          {cv.certificates.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }

  function renderTabContent() {
    if (activeTab === "quick") {
      return (
        <div className={styles.tabContent}>
          <div className={styles.panelTitle}>
            <span>Nhập nhanh từ Word / văn bản</span>
            <small>Dán nội dung CV, app sẽ tự chia về đúng mục.</small>
          </div>

          <textarea
            className={styles.quickTextarea}
            value={quickText}
            onChange={(event) => setQuickText(event.target.value)}
            placeholder={`Ví dụ:

HỌ TÊN: Nguyễn Văn A
VỊ TRÍ: IT Support

GIỚI THIỆU
Tôi có nền tảng tin học và kinh nghiệm hỗ trợ người dùng.

KINH NGHIỆM
Gia sư Toán online
2025 - Hiện tại
- Dạy Toán lớp 7, 8
- Soạn đề, chữa bài

KỸ NĂNG
- IT Support
- Tin học văn phòng
- Giảng dạy`}
          />

          <div className={styles.rowActions}>
            <button type="button" className={styles.primaryButton} onClick={applyQuickText}>
              Tự nhận diện nội dung
            </button>
            <button
              type="button"
              className={styles.ghostButton}
              onClick={() => setQuickText("")}
            >
              Xóa ô nhập
            </button>
          </div>

          <div className={styles.hintBox}>
            <strong>Cách dùng nhanh:</strong>
            <p>
              Copy nội dung từ Word rồi dán vào đây. Các tiêu đề như Kinh nghiệm,
              Học vấn, Kỹ năng, Dự án sẽ được tự nhận diện.
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === "templates") {
      return (
        <div className={styles.tabContent}>
          <div className={styles.panelTitle}>
            <span>Chọn mẫu CV</span>
            <small>Đổi mẫu nhưng giữ nguyên nội dung đã nhập.</small>
          </div>

          <div className={styles.templateList}>
            {(Object.keys(templateMeta) as TemplateKey[]).map((key) => (
              <button
                type="button"
                className={`${styles.templateCard} ${
                  template === key ? styles.templateActive : ""
                }`}
                data-template={key}
                key={key}
                onClick={() => setTemplate(key)}
              >
                <b>{templateMeta[key].name}</b>
                <span>{templateMeta[key].desc}</span>
                <small>{templateMeta[key].note}</small>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "design") {
      return (
        <div className={styles.tabContent}>
          <div className={styles.panelTitle}>
            <span>Thiết kế & thứ tự mục</span>
            <small>Kéo thả để đổi thứ tự hiển thị trong CV.</small>
          </div>

          <label className={styles.field}>
            <span>Màu chủ đạo</span>
            <div className={styles.colorPicker}>
              {["#315cff", "#111827", "#f5b82e", "#0f766e", "#dc2626"].map(
                (color) => (
                  <button
                    type="button"
                    key={color}
                    style={{ background: color }}
                    className={primaryColor === color ? styles.colorActive : ""}
                    onClick={() => setPrimaryColor(color)}
                    aria-label={`Chọn màu ${color}`}
                  />
                ),
              )}
            </div>
          </label>

          <label className={styles.field}>
            <span>Khung ảnh đại diện</span>
            <div className={styles.shapeGrid}>
              {(Object.keys(avatarShapeMeta) as AvatarShape[]).map((shape) => (
                <button
                  type="button"
                  className={`${styles.shapeButton} ${
                    avatarShape === shape ? styles.shapeActive : ""
                  }`}
                  key={shape}
                  onClick={() => setAvatarShape(shape)}
                >
                  <i className={`${styles.shapePreview} ${avatarShapeClassMap[shape]}`} />
                  <b>{avatarShapeMeta[shape].name}</b>
                  <small>{avatarShapeMeta[shape].desc}</small>
                </button>
              ))}
            </div>
          </label>

          <label className={styles.field}>
            <span>Cỡ chữ</span>
            <input
              type="range"
              min="0.9"
              max="1.12"
              step="0.01"
              value={fontScale}
              onChange={(event) => setFontScale(Number(event.target.value))}
            />
          </label>

          <label className={styles.field}>
            <span>Khoảng cách giữa mục</span>
            <input
              type="range"
              min="14"
              max="36"
              step="1"
              value={spacing}
              onChange={(event) => setSpacing(Number(event.target.value))}
            />
          </label>

          <div className={styles.orderList}>
            {sectionOrder.map((section) => (
              <div
                className={styles.orderItem}
                draggable
                key={section}
                onDragStart={() => setDragging(section)}
                onDragOver={(event) => event.preventDefault()}
                onDrop={() => {
                  if (dragging) moveSection(dragging, section);
                  setDragging(null);
                }}
              >
                <span>☰</span>
                <b>{sectionLabels[section]}</b>
                <div>
                  <button type="button" onClick={() => shiftSection(section, "up")}>
                    ↑
                  </button>
                  <button type="button" onClick={() => shiftSection(section, "down")}>
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className={styles.tabContent}>
        <div className={styles.panelTitle}>
          <span>Chỉnh nội dung</span>
          <small>Sửa trực tiếp từng mục, preview sẽ đổi ngay.</small>
        </div>

        <div className={styles.formGrid}>
          <label className={styles.field}>
            <span>Họ tên</span>
            <input
              value={cv.profile.name}
              onChange={(event) => updateProfile("name", event.target.value)}
            />
          </label>

          <label className={styles.field}>
            <span>Vị trí ứng tuyển</span>
            <input
              value={cv.profile.role}
              onChange={(event) => updateProfile("role", event.target.value)}
            />
          </label>

          <label className={styles.field}>
            <span>Địa chỉ</span>
            <input
              value={cv.profile.location}
              onChange={(event) => updateProfile("location", event.target.value)}
            />
          </label>

          <label className={styles.field}>
            <span>Số điện thoại</span>
            <input
              value={cv.profile.phone}
              onChange={(event) => updateProfile("phone", event.target.value)}
            />
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input
              value={cv.profile.email}
              onChange={(event) => updateProfile("email", event.target.value)}
            />
          </label>

          <label className={styles.field}>
            <span>Website / LinkedIn</span>
            <input
              value={cv.profile.website}
              onChange={(event) => updateProfile("website", event.target.value)}
            />
          </label>
        </div>

        <label className={styles.field}>
          <span>Giới thiệu</span>
          <textarea
            value={cv.summary}
            onChange={(event) =>
              setCv((current) => ({ ...current, summary: event.target.value }))
            }
          />
        </label>

        <div className={styles.editGroup}>
          <div className={styles.groupHeader}>
            <strong>Kinh nghiệm</strong>
            <button type="button" onClick={addExperience}>
              + Thêm
            </button>
          </div>

          {cv.experience.map((job) => (
            <div className={styles.editCard} key={job.id}>
              <input
                value={job.title}
                onChange={(event) =>
                  updateExperience(job.id, "title", event.target.value)
                }
                placeholder="Tên vị trí"
              />
              <input
                value={job.company}
                onChange={(event) =>
                  updateExperience(job.id, "company", event.target.value)
                }
                placeholder="Công ty / đơn vị"
              />
              <input
                value={job.period}
                onChange={(event) =>
                  updateExperience(job.id, "period", event.target.value)
                }
                placeholder="Thời gian"
              />
              <textarea
                value={job.bullets.join("\n")}
                onChange={(event) =>
                  updateExperience(
                    job.id,
                    "bullets",
                    parseBullets(event.target.value),
                  )
                }
                placeholder="Mỗi dòng là một gạch đầu dòng"
              />
              <button
                type="button"
                className={styles.dangerButton}
                onClick={() => removeExperience(job.id)}
              >
                Xóa kinh nghiệm này
              </button>
            </div>
          ))}
        </div>

        <label className={styles.field}>
          <span>Kỹ năng, mỗi dòng một kỹ năng</span>
          <textarea
            value={cv.skills.join("\n")}
            onChange={(event) =>
              setCv((current) => ({
                ...current,
                skills: parseBullets(event.target.value),
              }))
            }
          />
        </label>

        <label className={styles.field}>
          <span>Học vấn</span>
          <textarea
            value={cv.education}
            onChange={(event) =>
              setCv((current) => ({ ...current, education: event.target.value }))
            }
          />
        </label>

        <div className={styles.editGroup}>
          <div className={styles.groupHeader}>
            <strong>Dự án</strong>
            <button type="button" onClick={addProject}>
              + Thêm
            </button>
          </div>

          {cv.projects.map((project) => (
            <div className={styles.editCard} key={project.id}>
              <input
                value={project.name}
                onChange={(event) =>
                  updateProject(project.id, "name", event.target.value)
                }
                placeholder="Tên dự án"
              />
              <textarea
                value={project.desc}
                onChange={(event) =>
                  updateProject(project.id, "desc", event.target.value)
                }
                placeholder="Mô tả dự án"
              />
              <button
                type="button"
                className={styles.dangerButton}
                onClick={() => removeProject(project.id)}
              >
                Xóa dự án này
              </button>
            </div>
          ))}
        </div>

        <label className={styles.field}>
          <span>Chứng chỉ, mỗi dòng một mục</span>
          <textarea
            value={cv.certificates.join("\n")}
            onChange={(event) =>
              setCv((current) => ({
                ...current,
                certificates: parseBullets(event.target.value),
              }))
            }
          />
        </label>
      </div>
    );
  }

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.brand}>
          <span>CV</span>
          CV Studio
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Trang chủ</Link>
          <Link href="/cv">Giới thiệu CV</Link>
          <a href="#editor">Chỉnh sửa</a>
          <a href="#preview">Xem trước</a>
        </nav>

        <div className={styles.actions}>
          <span>{saveStatus}</span>
          <button type="button" className={styles.ghostButton} onClick={saveDraft}>
            Lưu nháp
          </button>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => window.print()}
          >
            Tải PDF
          </button>
        </div>
      </header>

      <section className={styles.workspace}>
        <aside className={styles.editorPanel} id="editor">
          <div className={styles.tabs}>
            {[
              ["quick", "Nhập nhanh"],
              ["content", "Nội dung"],
              ["templates", "Mẫu CV"],
              ["design", "Thiết kế"],
            ].map(([key, label]) => (
              <button
                type="button"
                className={activeTab === key ? styles.activeTab : ""}
                key={key}
                onClick={() => setActiveTab(key as TabKey)}
              >
                {label}
              </button>
            ))}
          </div>

          {renderTabContent()}
        </aside>

        <section className={styles.previewArea} id="preview">
          <div className={styles.previewHeader}>
            <div>
              <span>Xem trước CV</span>
              <small>
                Mẫu: {templateMeta[template].name} · Hoàn thiện {completionScore}%
              </small>
            </div>

            <div>
              <button type="button" onClick={saveDraft}>
                Lưu
              </button>
              <button type="button" onClick={() => window.print()}>
                In / PDF
              </button>
            </div>
          </div>

          <article
            className={`${styles.cvPaper} ${templateClass}`}
            style={paperStyle}
          >
            <div className={styles.cvHeader}>
              <div className={`${styles.avatar} ${avatarShapeClass}`} />
              <div>
                <h1>{cv.profile.name}</h1>
                <p>{cv.profile.role}</p>
                <ul>
                  {[cv.profile.location, cv.profile.phone, cv.profile.email, cv.profile.website]
                    .filter(Boolean)
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>

            <div className={styles.cvBody}>
              {sectionOrder.map((section) => (
                <div className={styles.cvSection} key={section}>
                  {renderCvSection(section)}
                </div>
              ))}
            </div>
          </article>
        </section>

        <aside className={styles.helperPanel}>
          <div className={styles.panelTitle}>
            <span>Luồng dùng nhanh</span>
            <small>Làm CV theo 4 bước</small>
          </div>

          <ol className={styles.steps}>
            <li>Dán nội dung từ Word vào tab Nhập nhanh.</li>
            <li>Bấm Tự nhận diện nội dung.</li>
            <li>Sửa lại từng mục ở tab Nội dung.</li>
            <li>Chọn mẫu, chỉnh màu rồi lưu hoặc xuất PDF.</li>
          </ol>

          <div className={styles.scoreCard}>
            <span>Mức hoàn thiện</span>
            <strong>{completionScore}%</strong>
            <i>
              <b style={{ width: `${completionScore}%` }} />
            </i>
          </div>

          <div className={styles.hintBox}>
            <strong>Gợi ý:</strong>
            <p>
              Bản này ưu tiên nhập nhanh và chỉnh dễ. Upload file Word thật sẽ
              làm sau khi phần parser ổn định.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
