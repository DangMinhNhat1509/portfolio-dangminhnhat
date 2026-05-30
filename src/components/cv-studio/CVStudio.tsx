"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Code2,
  Copy,
  Database,
  Download,
  Eye,
  EyeOff,
  FileText,
  Folder,
  Github,
  GraduationCap,
  GripVertical,
  Home,
  Languages,
  LayoutTemplate,
  Mail,
  MapPin,
  Monitor,
  Paintbrush,
  Pencil,
  Phone,
  Plus,
  RotateCcw,
  Save,
  Search,
  Settings,
  Sparkles,
  Star,
  Target,
  Trash2,
  User,
  Wrench,
  X,
} from "lucide-react";

type IconName =
  | "User"
  | "Target"
  | "Briefcase"
  | "Folder"
  | "Code2"
  | "GraduationCap"
  | "Award"
  | "Mail"
  | "Phone"
  | "MapPin"
  | "Github"
  | "BookOpen"
  | "Star"
  | "Wrench"
  | "Database"
  | "Monitor"
  | "Languages"
  | "Building2"
  | "Calendar"
  | "FileText";

type SectionType = "text" | "timeline" | "list" | "skills";

type CVItem = {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  description: string;
  bullets: string[];
};

type CVSection = {
  id: string;
  title: string;
  icon: IconName;
  type: SectionType;
  visible: boolean;
  content?: string;
  items?: CVItem[];
};

type CVStyle = {
  templateId: string;
  primaryColor: string;
  fontSize: number;
  headingSize: number;
  lineHeight: number;
  sectionGap: number;
  sidebarWidth: number;
  showIcons: boolean;
  rounded: boolean;
  compactBullets: boolean;
  maxBulletLines: number;
  skillView: "tags" | "bars" | "list";
};

type CVData = {
  profile: {
    name: string;
    role: string;
    slogan: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    initials: string;
  };
  style: CVStyle;
  sections: CVSection[];
};

const STORAGE_KEY = "cv-studio-data-v1";

const iconMap = {
  User,
  Target,
  Briefcase,
  Folder,
  Code2,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  BookOpen,
  Star,
  Wrench,
  Database,
  Monitor,
  Languages,
  Building2,
  Calendar,
  FileText,
};

const iconOptions: IconName[] = [
  "User",
  "Target",
  "Briefcase",
  "Folder",
  "Code2",
  "GraduationCap",
  "Award",
  "Mail",
  "Phone",
  "MapPin",
  "Github",
  "BookOpen",
  "Star",
  "Wrench",
  "Database",
  "Monitor",
  "Languages",
  "Building2",
  "Calendar",
  "FileText",
];

const templates = [
  {
    id: "yellow-black",
    name: "IT Support (Vàng đen)",
    category: "IT Support",
    description: "Nổi bật, mạnh, phù hợp CV IT Support / Technical Support.",
    color: "#facc15",
    className: "tplYellow",
  },
  {
    id: "navy-pro",
    name: "Chuyên nghiệp (Navy)",
    category: "Professional",
    description: "Cân đối, sạch, hợp nhân sự văn phòng và developer.",
    color: "#0f2f5f",
    className: "tplNavy",
  },
  {
    id: "minimal",
    name: "Tối giản (Minimal)",
    category: "Minimal",
    description: "Trắng, ít màu, tập trung vào nội dung và dễ đọc.",
    color: "#111827",
    className: "tplMinimal",
  },
  {
    id: "tutor-green",
    name: "Giáo viên (Tutor)",
    category: "Education",
    description: "Mềm, thân thiện, phù hợp gia sư / giáo viên / giáo dục.",
    color: "#10b981",
    className: "tplTutor",
  },
  {
    id: "developer-purple",
    name: "Fresher Developer",
    category: "Developer",
    description: "Hiện đại, trẻ, hợp ứng viên công nghệ mới ra trường.",
    color: "#7c3aed",
    className: "tplPurple",
  },
];

const palette = [
  "#facc15",
  "#f59e0b",
  "#0f2f5f",
  "#111827",
  "#10b981",
  "#06b6d4",
  "#3b82f6",
  "#7c3aed",
  "#ec4899",
];

function uid(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function IconView({
  name,
  size = 18,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name] ?? FileText;
  return <Icon className={className} size={size} />;
}

function createDefaultCV(templateId = "yellow-black"): CVData {
  const template = templates.find((item) => item.id === templateId) ?? templates[0];

  return {
    profile: {
      name: "ĐẶNG MINH NHẬT",
      role: "IT SUPPORT / WEB DEVELOPER",
      slogan: "Tận tâm hỗ trợ - Giải pháp hiệu quả - Học hỏi không ngừng",
      email: "dangminhnhat10988@gmail.com",
      phone: "Cập nhật khi cần",
      location: "Việt Nam",
      github: "github.com/DangMinhNhat1509",
      initials: "DN",
    },
    style: {
      templateId,
      primaryColor: template.color,
      fontSize: 11,
      headingSize: 18,
      lineHeight: 1.35,
      sectionGap: 16,
      sidebarWidth: 32,
      showIcons: true,
      rounded: true,
      compactBullets: false,
      maxBulletLines: 2,
      skillView: "bars",
    },
    sections: [
      {
        id: "summary",
        title: "Mục tiêu nghề nghiệp",
        icon: "Target",
        type: "text",
        visible: true,
        content:
          "Phát triển ở vị trí IT Support / Web Developer, kết hợp kỹ năng hỗ trợ người dùng, xây dựng web app và ứng dụng công nghệ vào giáo dục. Tôi mong muốn tạo ra giải pháp thực tế, dễ dùng và có giá trị cho người dùng cuối.",
      },
      {
        id: "experience",
        title: "Kinh nghiệm làm việc",
        icon: "Briefcase",
        type: "timeline",
        visible: true,
        items: [
          {
            id: uid("exp"),
            title: "Nội dung số / AI Workflow",
            subtitle: "YouTube, Facebook, Affiliate Content",
            time: "2025 - Nay",
            description:
              "Tham gia quy trình sản xuất nội dung số và tối ưu thao tác bằng công cụ AI.",
            bullets: [
              "Tạo thumbnail, kiểm tra, xuất và đăng video số lượng lớn.",
              "Xây dựng quy trình nội dung bằng AI tools để giảm thao tác thủ công.",
              "Theo dõi báo cáo công việc hằng ngày và tối ưu quy trình đăng tải.",
            ],
          },
          {
            id: uid("exp"),
            title: "Gia sư Toán / Tin học",
            subtitle: "Online & Offline",
            time: "2022 - Nay",
            description:
              "Dạy học sinh cấp 2, ôn thi chuyển cấp và hướng dẫn Tin học cơ bản.",
            bullets: [
              "Dạy Toán cấp 2, ôn thi chuyển cấp và Tin học cơ bản.",
              "Theo dõi năng lực học sinh, giao bài và nhận xét sau buổi học.",
              "Xây dựng cách giảng dễ hiểu, chia nhỏ vấn đề và sửa lỗi tư duy.",
            ],
          },
        ],
      },
      {
        id: "projects",
        title: "Dự án tiêu biểu",
        icon: "Folder",
        type: "list",
        visible: true,
        items: [
          {
            id: uid("project"),
            title: "Math Word Studio",
            subtitle: "React / Vite / Editor",
            time: "2026",
            description:
              "Công cụ hỗ trợ soạn nội dung Toán, công thức, hình vẽ, mẫu bài và xuất tài liệu.",
            bullets: [
              "Thiết kế giao diện soạn bài phục vụ giáo viên/gia sư.",
              "Tập trung vào công thức, mẫu bài, hình vẽ và trải nghiệm nhập liệu.",
            ],
          },
          {
            id: uid("project"),
            title: "Portfolio Website",
            subtitle: "Next.js / TypeScript / CSS",
            time: "2026",
            description:
              "Website cá nhân giới thiệu năng lực, dự án, kinh nghiệm, CV và thông tin liên hệ.",
            bullets: [
              "Xây dựng giao diện dark yellow/black hiện đại.",
              "Tổ chức nội dung theo dự án, kinh nghiệm, kỹ năng và CV.",
            ],
          },
        ],
      },
      {
        id: "skills",
        title: "Kỹ năng",
        icon: "Code2",
        type: "skills",
        visible: true,
        items: [
          {
            id: uid("skill"),
            title: "Lập trình",
            subtitle: "",
            time: "",
            description: "",
            bullets: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js"],
          },
          {
            id: uid("skill"),
            title: "IT Support",
            subtitle: "",
            time: "",
            description: "",
            bullets: ["Windows", "Network", "Hardware", "Printer", "Office"],
          },
          {
            id: uid("skill"),
            title: "Giảng dạy",
            subtitle: "",
            time: "",
            description: "",
            bullets: ["Toán THCS", "Tin học", "Luyện đề", "Soạn bài"],
          },
        ],
      },
      {
        id: "education",
        title: "Học vấn",
        icon: "GraduationCap",
        type: "list",
        visible: true,
        items: [
          {
            id: uid("edu"),
            title: "Kỹ thuật phần mềm",
            subtitle: "Đại học FPT",
            time: "2021 - 2025",
            description:
              "Nền tảng lập trình, cơ sở dữ liệu, web app và quy trình phần mềm.",
            bullets: [],
          },
          {
            id: uid("edu"),
            title: "Nghiệp vụ Sư phạm Tin học THCS/THPT",
            subtitle: "Đang học",
            time: "Hiện tại",
            description:
              "Định hướng kết hợp công nghệ, giáo dục và xây dựng học liệu số.",
            bullets: [],
          },
        ],
      },
      {
        id: "certifications",
        title: "Chứng chỉ",
        icon: "Award",
        type: "list",
        visible: true,
        items: [
          {
            id: uid("cert"),
            title: "Microsoft Office / Tin học văn phòng",
            subtitle: "Kỹ năng ứng dụng",
            time: "",
            description: "Sử dụng công cụ văn phòng phục vụ công việc và giảng dạy.",
            bullets: [],
          },
        ],
      },
    ],
  };
}

function getTemplate(id: string) {
  return templates.find((item) => item.id === id) ?? templates[0];
}

function CVStudioShell({
  active,
  children,
}: {
  active: "templates" | "builder";
  children: React.ReactNode;
}) {
  return (
    <div className="cvStudioApp">
      <aside className="cvStudioSidebar">
        <Link href="/" className="cvStudioLogo">
          <span>CV</span>
          <b>CV Studio</b>
          <small>Beta</small>
        </Link>

        <nav className="cvStudioMenu">
          <Link className={active === "templates" ? "active" : ""} href="/cv/templates">
            <LayoutTemplate size={19} />
            Kho mẫu
          </Link>
          <Link className={active === "builder" ? "active" : ""} href="/cv/builder">
            <Pencil size={19} />
            Trình chỉnh sửa
          </Link>
          <a href="#saved">
            <Save size={19} />
            CV đã lưu
          </a>
          <a href="#icons">
            <Sparkles size={19} />
            Biểu tượng
          </a>
          <a href="#settings">
            <Settings size={19} />
            Cài đặt
          </a>
        </nav>

        <div className="cvProBox">
          <b>Nâng cấp sau</b>
          <p>Hiện tại bản này dùng localStorage và in PDF bằng trình duyệt.</p>
        </div>
      </aside>

      <div className="cvStudioMain">{children}</div>
    </div>
  );
}

function MiniResume({ templateId }: { templateId: string }) {
  const template = getTemplate(templateId);

  return (
    <div className={`miniResume ${template.className}`}>
      <div className="miniSide">
        <span />
        <i />
        <i />
        <i />
      </div>
      <div className="miniBody">
        <b />
        <strong />
        <em />
        <small />
        <small />
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export function CVTemplatesPage() {
  return (
    <CVStudioShell active="templates">
      <header className="cvStudioTopbar">
        <div className="cvSearch">
          <Search size={18} />
          <span>Tìm mẫu CV, ngành nghề, phong cách...</span>
          <kbd>⌘K</kbd>
        </div>
        <Link href="/cv/builder" className="cvTopBtn">
          Mở trình chỉnh sửa
        </Link>
      </header>

      <main className="cvTemplatesPage">
        <div className="cvPageTitle">
          <p>Kho mẫu CV</p>
          <h1>Chọn mẫu CV phù hợp ✨</h1>
          <span>
            5 mẫu đầu tiên đã sẵn sàng: IT Support, Navy chuyên nghiệp, Minimal,
            Tutor và Developer.
          </span>
        </div>

        <div className="cvFilterRow">
          {["Tất cả", "IT Support", "Developer", "Giáo viên", "Tối giản", "Chuyên nghiệp"].map(
            (item, index) => (
              <button className={index === 0 ? "active" : ""} key={item}>
                {item}
              </button>
            )
          )}
        </div>

        <div className="cvTemplateGrid">
          {templates.map((template, index) => (
            <article className="cvTemplateCard" key={template.id}>
              {index === 0 ? <span className="recommendBadge">Đề xuất</span> : null}
              <MiniResume templateId={template.id} />
              <div className="cvTemplateInfo">
                <div>
                  <p>{template.category}</p>
                  <h3>{template.name}</h3>
                  <span>{template.description}</span>
                </div>
                <div className="cvTemplateActions">
                  <Link href={`/cv/builder?template=${template.id}`} className="cvBtn ghost">
                    <Eye size={16} />
                    Xem trước
                  </Link>
                  <Link href={`/cv/builder?template=${template.id}`} className="cvBtn primary">
                    Dùng mẫu này
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="cvRecentBox" id="saved">
          <div>
            <h2>Mẫu đã dùng gần đây</h2>
            <p>Phần này hiện là demo. Sau này có thể lưu nhiều CV riêng.</p>
          </div>
          <div className="cvRecentList">
            {templates.slice(0, 3).map((template) => (
              <Link href={`/cv/builder?template=${template.id}`} key={template.id}>
                <MiniResume templateId={template.id} />
                <span>{template.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </CVStudioShell>
  );
}

export function CVBuilderPage({ initialTemplate }: { initialTemplate: string }) {
  const [cv, setCv] = useState<CVData>(() => createDefaultCV(initialTemplate));
  const [selectedSectionId, setSelectedSectionId] = useState("experience");
  const [iconTarget, setIconTarget] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState("Chưa lưu");

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const saved = JSON.parse(raw) as CVData;
      const nextTemplate = getTemplate(initialTemplate);
      setCv({
        ...saved,
        style: {
          ...saved.style,
          templateId: initialTemplate,
          primaryColor: nextTemplate.color,
        },
      });
    } catch {
      setCv(createDefaultCV(initialTemplate));
    }
  }, [initialTemplate]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cv));
    setSavedAt("Đã lưu tự động");
  }, [cv]);

  const selectedSection = useMemo(
    () => cv.sections.find((section) => section.id === selectedSectionId) ?? cv.sections[0],
    [cv.sections, selectedSectionId]
  );

  function updateProfile<K extends keyof CVData["profile"]>(
    key: K,
    value: CVData["profile"][K]
  ) {
    setCv((current) => ({
      ...current,
      profile: { ...current.profile, [key]: value },
    }));
  }

  function updateStyle(patch: Partial<CVStyle>) {
    setCv((current) => ({
      ...current,
      style: { ...current.style, ...patch },
    }));
  }

  function applyTemplate(templateId: string) {
    const template = getTemplate(templateId);
    updateStyle({
      templateId,
      primaryColor: template.color,
    });
  }

  function updateSection(sectionId: string, patch: Partial<CVSection>) {
    setCv((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === sectionId ? { ...section, ...patch } : section
      ),
    }));
  }

  function moveSection(sectionId: string, direction: -1 | 1) {
    setCv((current) => {
      const index = current.sections.findIndex((section) => section.id === sectionId);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= current.sections.length) return current;

      const sections = [...current.sections];
      const [item] = sections.splice(index, 1);
      sections.splice(target, 0, item);

      return { ...current, sections };
    });
  }

  function addSection() {
    const newSection: CVSection = {
      id: uid("section"),
      title: "Section mới",
      icon: "FileText",
      type: "text",
      visible: true,
      content: "Nhập nội dung section mới tại đây.",
    };

    setCv((current) => ({
      ...current,
      sections: [...current.sections, newSection],
    }));
    setSelectedSectionId(newSection.id);
  }

  function deleteSection(sectionId: string) {
    setCv((current) => {
      if (current.sections.length <= 1) return current;
      const next = current.sections.filter((section) => section.id !== sectionId);
      setSelectedSectionId(next[0]?.id ?? "summary");
      return { ...current, sections: next };
    });
  }

  function updateItem(sectionId: string, itemId: string, patch: Partial<CVItem>) {
    setCv((current) => ({
      ...current,
      sections: current.sections.map((section) => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          items: section.items?.map((item) =>
            item.id === itemId ? { ...item, ...patch } : item
          ),
        };
      }),
    }));
  }

  function addItem(sectionId: string) {
    setCv((current) => ({
      ...current,
      sections: current.sections.map((section) => {
        if (section.id !== sectionId) return section;

        const isSkills = section.type === "skills";
        const item: CVItem = {
          id: uid("item"),
          title: isSkills ? "Nhóm kỹ năng mới" : "Tiêu đề mới",
          subtitle: "",
          time: "",
          description: isSkills ? "" : "Mô tả ngắn cho mục này.",
          bullets: isSkills ? ["Kỹ năng mới"] : ["Gạch đầu dòng mới"],
        };

        return { ...section, items: [...(section.items ?? []), item] };
      }),
    }));
  }

  function deleteItem(sectionId: string, itemId: string) {
    setCv((current) => ({
      ...current,
      sections: current.sections.map((section) => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          items: section.items?.filter((item) => item.id !== itemId),
        };
      }),
    }));
  }

  function updateBullet(
    sectionId: string,
    itemId: string,
    bulletIndex: number,
    value: string
  ) {
    setCv((current) => ({
      ...current,
      sections: current.sections.map((section) => {
        if (section.id !== sectionId) return section;

        return {
          ...section,
          items: section.items?.map((item) => {
            if (item.id !== itemId) return item;
            const bullets = [...item.bullets];
            bullets[bulletIndex] = value;
            return { ...item, bullets };
          }),
        };
      }),
    }));
  }

  function addBullet(sectionId: string, itemId: string) {
    setCv((current) => ({
      ...current,
      sections: current.sections.map((section) => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          items: section.items?.map((item) =>
            item.id === itemId
              ? { ...item, bullets: [...item.bullets, "Gạch đầu dòng mới"] }
              : item
          ),
        };
      }),
    }));
  }

  function deleteBullet(sectionId: string, itemId: string, bulletIndex: number) {
    setCv((current) => ({
      ...current,
      sections: current.sections.map((section) => {
        if (section.id !== sectionId) return section;
        return {
          ...section,
          items: section.items?.map((item) => {
            if (item.id !== itemId) return item;
            return {
              ...item,
              bullets: item.bullets.filter((_, index) => index !== bulletIndex),
            };
          }),
        };
      }),
    }));
  }

  function resetData() {
    const confirmed = window.confirm("Khôi phục dữ liệu mẫu? Nội dung hiện tại sẽ bị thay thế.");
    if (!confirmed) return;
    setCv(createDefaultCV(cv.style.templateId));
  }

  function printCV() {
    window.print();
  }

  return (
    <CVStudioShell active="builder">
      <header className="cvBuilderTop">
        <div className="cvBuilderCrumb">
          <Link href="/cv/templates">
            <ArrowLeft size={18} />
            Kho mẫu
          </Link>
          <span>/</span>
          <b>{getTemplate(cv.style.templateId).name}</b>
          <small>{savedAt}</small>
        </div>

        <div className="cvBuilderActions">
          <button className="cvBtn ghost" onClick={resetData} type="button">
            <RotateCcw size={16} />
            Khôi phục mẫu
          </button>
          <button className="cvBtn ghost" type="button">
            <Save size={16} />
            Lưu nháp
          </button>
          <button className="cvBtn primary" onClick={printCV} type="button">
            <Download size={16} />
            Tải PDF
          </button>
        </div>
      </header>

      <main className="cvBuilderWorkspace">
        <section className="cvEditorPanel">
          <div className="panelTitle">
            <div>
              <h2>Nội dung CV</h2>
              <p>Thêm, xóa, ẩn/hiện, đổi thứ tự và sửa nội dung.</p>
            </div>
            <button onClick={addSection} type="button">
              <Plus size={16} />
              Thêm mục
            </button>
          </div>

          <details className="cvAccordion" open>
            <summary>
              <User size={18} />
              Thông tin cá nhân
            </summary>
            <div className="formGrid">
              <label>
                Họ tên
                <input value={cv.profile.name} onChange={(e) => updateProfile("name", e.target.value)} />
              </label>
              <label>
                Vai trò
                <input value={cv.profile.role} onChange={(e) => updateProfile("role", e.target.value)} />
              </label>
              <label className="full">
                Slogan
                <input value={cv.profile.slogan} onChange={(e) => updateProfile("slogan", e.target.value)} />
              </label>
              <label>
                Email
                <input value={cv.profile.email} onChange={(e) => updateProfile("email", e.target.value)} />
              </label>
              <label>
                Điện thoại
                <input value={cv.profile.phone} onChange={(e) => updateProfile("phone", e.target.value)} />
              </label>
              <label>
                Địa chỉ
                <input value={cv.profile.location} onChange={(e) => updateProfile("location", e.target.value)} />
              </label>
              <label>
                GitHub
                <input value={cv.profile.github} onChange={(e) => updateProfile("github", e.target.value)} />
              </label>
            </div>
          </details>

          <div className="sectionList">
            {cv.sections.map((section, index) => (
              <button
                className={selectedSectionId === section.id ? "sectionRow active" : "sectionRow"}
                key={section.id}
                onClick={() => setSelectedSectionId(section.id)}
                type="button"
              >
                <GripVertical size={16} />
                <IconView name={section.icon} />
                <span>{section.title}</span>
                <i>{section.visible ? <Eye size={16} /> : <EyeOff size={16} />}</i>
                <small onClick={(event) => { event.stopPropagation(); moveSection(section.id, -1); }}>
                  <ChevronUp size={15} />
                </small>
                <small onClick={(event) => { event.stopPropagation(); moveSection(section.id, 1); }}>
                  <ChevronDown size={15} />
                </small>
                <small onClick={(event) => { event.stopPropagation(); updateSection(section.id, { visible: !section.visible }); }}>
                  {section.visible ? "Ẩn" : "Hiện"}
                </small>
                {index > 0 ? (
                  <small className="danger" onClick={(event) => { event.stopPropagation(); deleteSection(section.id); }}>
                    <Trash2 size={15} />
                  </small>
                ) : null}
              </button>
            ))}
          </div>

          {selectedSection ? (
            <div className="sectionEditor">
              <div className="sectionEditorHead">
                <h3>Chỉnh sửa section</h3>
                <button type="button" onClick={() => setIconTarget(selectedSection.id)}>
                  <Sparkles size={16} />
                  Đổi icon
                </button>
              </div>

              <div className="formGrid">
                <label>
                  Tên section
                  <input
                    value={selectedSection.title}
                    onChange={(e) => updateSection(selectedSection.id, { title: e.target.value })}
                  />
                </label>
                <label>
                  Kiểu section
                  <select
                    value={selectedSection.type}
                    onChange={(e) =>
                      updateSection(selectedSection.id, {
                        type: e.target.value as SectionType,
                        items:
                          e.target.value === "text"
                            ? undefined
                            : selectedSection.items ?? [],
                        content:
                          e.target.value === "text"
                            ? selectedSection.content ?? ""
                            : selectedSection.content,
                      })
                    }
                  >
                    <option value="text">Text</option>
                    <option value="timeline">Timeline</option>
                    <option value="list">List</option>
                    <option value="skills">Kỹ năng</option>
                  </select>
                </label>
              </div>

              {selectedSection.type === "text" ? (
                <label className="fullLabel">
                  Nội dung
                  <textarea
                    rows={7}
                    value={selectedSection.content ?? ""}
                    onChange={(e) => updateSection(selectedSection.id, { content: e.target.value })}
                  />
                </label>
              ) : (
                <div className="itemEditorList">
                  {(selectedSection.items ?? []).map((item) => (
                    <article className="itemEditor" key={item.id}>
                      <div className="itemEditorTop">
                        <b>{item.title || "Mục chưa đặt tên"}</b>
                        <div>
                          <button type="button" onClick={() => updateItem(selectedSection.id, item.id, { ...item })}>
                            <Copy size={15} />
                          </button>
                          <button type="button" onClick={() => deleteItem(selectedSection.id, item.id)}>
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>

                      <div className="formGrid">
                        <label>
                          Tiêu đề
                          <input value={item.title} onChange={(e) => updateItem(selectedSection.id, item.id, { title: e.target.value })} />
                        </label>
                        <label>
                          Phụ đề / Công ty
                          <input value={item.subtitle} onChange={(e) => updateItem(selectedSection.id, item.id, { subtitle: e.target.value })} />
                        </label>
                        <label>
                          Thời gian
                          <input value={item.time} onChange={(e) => updateItem(selectedSection.id, item.id, { time: e.target.value })} />
                        </label>
                        <label className="full">
                          Mô tả
                          <textarea rows={3} value={item.description} onChange={(e) => updateItem(selectedSection.id, item.id, { description: e.target.value })} />
                        </label>
                      </div>

                      <div className="bulletEditor">
                        <div className="bulletTitle">
                          <span>{selectedSection.type === "skills" ? "Kỹ năng" : "Gạch đầu dòng"}</span>
                          <button type="button" onClick={() => addBullet(selectedSection.id, item.id)}>
                            <Plus size={15} />
                            Thêm
                          </button>
                        </div>

                        {item.bullets.map((bullet, bulletIndex) => (
                          <div className="bulletInput" key={`${item.id}-${bulletIndex}`}>
                            <input
                              value={bullet}
                              onChange={(e) =>
                                updateBullet(selectedSection.id, item.id, bulletIndex, e.target.value)
                              }
                            />
                            <button
                              type="button"
                              onClick={() => deleteBullet(selectedSection.id, item.id, bulletIndex)}
                            >
                              <X size={15} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}

                  <button className="addItemBtn" type="button" onClick={() => addItem(selectedSection.id)}>
                    <Plus size={16} />
                    Thêm item
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </section>

        <section className="cvCanvas">
          <div className="cvCanvasToolbar">
            <span>Preview cập nhật theo thời gian thực</span>
            <div>
              <button type="button">-</button>
              <b>100%</b>
              <button type="button">+</button>
            </div>
          </div>
          <CVPreview cv={cv} />
        </section>

        <section className="cvDesignPanel">
          <div className="panelTitle">
            <div>
              <h2>Thiết kế</h2>
              <p>Chỉnh khi CV bị dài, xuống dòng hoặc mất cân đối.</p>
            </div>
          </div>

          <label>
            Mẫu CV
            <select value={cv.style.templateId} onChange={(e) => applyTemplate(e.target.value)}>
              {templates.map((template) => (
                <option value={template.id} key={template.id}>
                  {template.name}
                </option>
              ))}
            </select>
          </label>

          <StyleRange label="Cỡ chữ" value={cv.style.fontSize} min={9} max={14} onChange={(value) => updateStyle({ fontSize: value })} suffix="px" />
          <StyleRange label="Cỡ tiêu đề" value={cv.style.headingSize} min={14} max={26} onChange={(value) => updateStyle({ headingSize: value })} suffix="px" />
          <StyleRange label="Line-height" value={cv.style.lineHeight} min={1.1} max={1.8} step={0.05} onChange={(value) => updateStyle({ lineHeight: value })} />
          <StyleRange label="Khoảng cách section" value={cv.style.sectionGap} min={6} max={34} onChange={(value) => updateStyle({ sectionGap: value })} suffix="px" />
          <StyleRange label="Tỉ lệ sidebar" value={cv.style.sidebarWidth} min={24} max={42} onChange={(value) => updateStyle({ sidebarWidth: value })} suffix="%" />

          <div className="styleGroup">
            <b>Màu chính</b>
            <div className="colorGrid">
              {palette.map((color) => (
                <button
                  className={cv.style.primaryColor === color ? "active" : ""}
                  key={color}
                  type="button"
                  style={{ background: color }}
                  onClick={() => updateStyle({ primaryColor: color })}
                >
                  {cv.style.primaryColor === color ? <Check size={16} /> : null}
                </button>
              ))}
            </div>
          </div>

          <label>
            Dạng kỹ năng
            <select value={cv.style.skillView} onChange={(e) => updateStyle({ skillView: e.target.value as CVStyle["skillView"] })}>
              <option value="bars">Thanh level</option>
              <option value="tags">Tag</option>
              <option value="list">List</option>
            </select>
          </label>

          <div className="toggleList">
            <button className={cv.style.showIcons ? "on" : ""} type="button" onClick={() => updateStyle({ showIcons: !cv.style.showIcons })}>
              Bật icon
            </button>
            <button className={cv.style.rounded ? "on" : ""} type="button" onClick={() => updateStyle({ rounded: !cv.style.rounded })}>
              Bo góc
            </button>
            <button className={cv.style.compactBullets ? "on" : ""} type="button" onClick={() => updateStyle({ compactBullets: !cv.style.compactBullets })}>
              Rút gọn bullet
            </button>
          </div>

          {cv.style.compactBullets ? (
            <StyleRange label="Số dòng mỗi bullet" value={cv.style.maxBulletLines} min={1} max={4} onChange={(value) => updateStyle({ maxBulletLines: value })} />
          ) : null}
        </section>
      </main>

      {iconTarget ? (
        <IconPicker
          onClose={() => setIconTarget(null)}
          onPick={(icon) => {
            updateSection(iconTarget, { icon });
            setIconTarget(null);
          }}
        />
      ) : null}
    </CVStudioShell>
  );
}

function StyleRange({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="styleRange">
      <span>
        {label}
        <b>{value}{suffix}</b>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function IconPicker({
  onClose,
  onPick,
}: {
  onClose: () => void;
  onPick: (icon: IconName) => void;
}) {
  const [keyword, setKeyword] = useState("");

  const filtered = iconOptions.filter((icon) =>
    icon.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="iconModal">
      <div className="iconDialog">
        <div className="iconDialogHead">
          <div>
            <h2>Kho biểu tượng</h2>
            <p>Chọn icon cho section đang chỉnh.</p>
          </div>
          <button type="button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="iconSearch">
          <Search size={17} />
          <input placeholder="Tìm icon..." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </div>

        <div className="iconGrid">
          {filtered.map((icon) => (
            <button key={icon} type="button" onClick={() => onPick(icon)}>
              <IconView name={icon} size={26} />
              <span>{icon}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function CVPreview({ cv }: { cv: CVData }) {
  const template = getTemplate(cv.style.templateId);
  const hasSidebar = cv.style.templateId !== "minimal";
  const sidebarSections = cv.sections.filter(
    (section) =>
      section.visible && ["skills", "certifications"].includes(section.id)
  );
  const mainSections = hasSidebar
    ? cv.sections.filter(
        (section) =>
          section.visible && !["skills", "certifications"].includes(section.id)
      )
    : cv.sections.filter((section) => section.visible);

  const style = {
    "--cv-accent": cv.style.primaryColor,
    "--cv-font-size": `${cv.style.fontSize}px`,
    "--cv-heading-size": `${cv.style.headingSize}px`,
    "--cv-line-height": cv.style.lineHeight,
    "--cv-section-gap": `${cv.style.sectionGap}px`,
    "--cv-sidebar-width": `${cv.style.sidebarWidth}%`,
    "--cv-radius": cv.style.rounded ? "18px" : "0px",
    "--cv-bullet-lines": cv.style.maxBulletLines,
  } as CSSProperties;

  return (
    <article
      className={`cvPreviewPage cvPrintTarget ${template.className} ${
        hasSidebar ? "hasSidebar" : "noSidebar"
      } ${cv.style.compactBullets ? "compactBullets" : ""}`}
      style={style}
    >
      {hasSidebar ? (
        <aside className="cvPreviewSidebar">
          <div className="previewAvatar">{cv.profile.initials}</div>
          <h2>{cv.profile.name}</h2>
          <p>{cv.profile.role}</p>

          <div className="previewBlock">
            <h3>Thông tin liên hệ</h3>
            <PreviewContact icon="Mail" text={cv.profile.email} showIcon={cv.style.showIcons} />
            <PreviewContact icon="Phone" text={cv.profile.phone} showIcon={cv.style.showIcons} />
            <PreviewContact icon="MapPin" text={cv.profile.location} showIcon={cv.style.showIcons} />
            <PreviewContact icon="Github" text={cv.profile.github} showIcon={cv.style.showIcons} />
          </div>

          {sidebarSections.map((section) => (
            <PreviewSection
              cv={cv}
              section={section}
              sidebar
              key={section.id}
            />
          ))}
        </aside>
      ) : null}

      <main className="cvPreviewMain">
        <header className="previewHeader">
          {!hasSidebar ? (
            <>
              <div className="previewAvatar">{cv.profile.initials}</div>
              <div>
                <h1>{cv.profile.name}</h1>
                <p>{cv.profile.role}</p>
                <span>{cv.profile.slogan}</span>
              </div>
            </>
          ) : (
            <>
              <h1>{cv.profile.name}</h1>
              <p>{cv.profile.role}</p>
              <span>{cv.profile.slogan}</span>
            </>
          )}
        </header>

        {!hasSidebar ? (
          <div className="previewContactLine">
            <PreviewContact icon="Mail" text={cv.profile.email} showIcon={cv.style.showIcons} />
            <PreviewContact icon="Phone" text={cv.profile.phone} showIcon={cv.style.showIcons} />
            <PreviewContact icon="MapPin" text={cv.profile.location} showIcon={cv.style.showIcons} />
            <PreviewContact icon="Github" text={cv.profile.github} showIcon={cv.style.showIcons} />
          </div>
        ) : null}

        {mainSections.map((section) => (
          <PreviewSection cv={cv} section={section} key={section.id} />
        ))}
      </main>
    </article>
  );
}

function PreviewContact({
  icon,
  text,
  showIcon,
}: {
  icon: IconName;
  text: string;
  showIcon: boolean;
}) {
  return (
    <div className="previewContact">
      {showIcon ? <IconView name={icon} size={12} /> : null}
      <span>{text}</span>
    </div>
  );
}

function PreviewSection({
  cv,
  section,
  sidebar = false,
}: {
  cv: CVData;
  section: CVSection;
  sidebar?: boolean;
}) {
  return (
    <section className={sidebar ? "previewSection sidebarSection" : "previewSection"}>
      <h3>
        {cv.style.showIcons ? <IconView name={section.icon} size={15} /> : null}
        {section.title}
      </h3>

      {section.type === "text" ? <p>{section.content}</p> : null}

      {section.type === "skills" ? (
        <div className={`previewSkills skillView-${cv.style.skillView}`}>
          {(section.items ?? []).map((group, groupIndex) => (
            <div className="skillGroup" key={group.id}>
              <b>{group.title}</b>
              <div>
                {group.bullets.map((skill, skillIndex) =>
                  cv.style.skillView === "bars" ? (
                    <span className="skillBar" key={skill}>
                      <i>{skill}</i>
                      <em>
                        <small
                          style={{
                            width: `${92 - ((groupIndex + skillIndex) % 4) * 9}%`,
                          }}
                        />
                      </em>
                    </span>
                  ) : (
                    <span className="skillTag" key={skill}>
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {section.type !== "text" && section.type !== "skills" ? (
        <div className={section.type === "timeline" ? "previewTimeline" : "previewList"}>
          {(section.items ?? []).map((item) => (
            <article className="previewItem" key={item.id}>
              <div className="previewItemHead">
                <div>
                  <b>{item.title}</b>
                  {item.subtitle ? <span>{item.subtitle}</span> : null}
                </div>
                {item.time ? <time>{item.time}</time> : null}
              </div>

              {item.description ? <p>{item.description}</p> : null}

              {item.bullets.length ? (
                <ul>
                  {item.bullets.map((bullet) => (
                    <li className="cvBullet" key={bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
