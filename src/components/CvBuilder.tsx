"use client";

import { useEffect, useState } from "react";
import CvPreview from "./CvPreview";
import { defaultCv, starterTemplates, templateDescriptions, templateLabels } from "../data/defaultCv";
import type { ContactInfo, CvData, Experience, TemplateId } from "../types/cv";
import { clearCv, cloneCv, loadCv, saveCv } from "../utils/storage";

const splitLines = (value: string) => value.split("\n").map((x) => x.trim()).filter(Boolean);
const joinLines = (items: string[]) => items.join("\n");

function newExp(): Experience {
  return {
    id: `exp-${Date.now()}`,
    title: "Tên vị trí / dự án",
    company: "Tên công ty / nơi làm",
    time: "Thời gian",
    bullets: ["Mô tả công việc hoặc kết quả nổi bật."]
  };
}

const navItems = [
  "Thông tin cá nhân",
  "Liên hệ",
  "Kỹ năng",
  "Kinh nghiệm",
  "Dự án",
  "Mục tiêu"
];

export default function CvBuilder() {
  const [cv, setCv] = useState<CvData>(() => cloneCv(defaultCv));
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("Đang mở CV...");

  useEffect(() => {
    const saved = loadCv();
    if (saved) {
      setCv(saved.photoUrl?.trim() ? saved : { ...saved, photoUrl: "https://i.ibb.co/wrBTs6BP/image-1.png" });
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveCv(cv);
    setStatus("Đã tự lưu");
    const timer = window.setTimeout(() => setStatus("Mọi thay đổi sẽ tự lưu"), 1200);
    return () => window.clearTimeout(timer);
  }, [cv, ready]);

  const setField = <K extends keyof CvData>(key: K, value: CvData[K]) => {
    setCv((old) => ({ ...old, [key]: value }));
  };

  const setContact = (key: keyof ContactInfo, value: string) => {
    setCv((old) => ({ ...old, contact: { ...old.contact, [key]: value } }));
  };

  const setExp = (
    group: "experiences" | "projects",
    index: number,
    key: keyof Experience,
    value: string | string[]
  ) => {
    setCv((old) => ({
      ...old,
      [group]: old[group].map((item, i) => (i === index ? { ...item, [key]: value } : item))
    }));
  };

  const removeExp = (group: "experiences" | "projects", index: number) => {
    setCv((old) => ({ ...old, [group]: old[group].filter((_, i) => i !== index) }));
  };

  const loadTemplate = (id: TemplateId) => {
    const ok = window.confirm("Nạp mẫu này sẽ thay toàn bộ nội dung hiện tại.");
    if (!ok) return;
    setCv(cloneCv(starterTemplates[id]));
  };

  const reset = () => {
    const ok = window.confirm("Reset toàn bộ dữ liệu đã lưu?");
    if (!ok) return;
    clearCv();
    setCv(cloneCv(defaultCv));
  };

  return (
    <main className="cv-builder-shell">
      <aside className="studio-sidebar">
        <div className="brand-box">
          <div className="brand-logo">CV</div>
          <div>
            <h1>CV Builder 4.0</h1>
            <p>Tạo CV chuyên nghiệp</p>
          </div>
        </div>

        <nav className="studio-nav">
          {navItems.map((item, index) => (
            <a href={`#section-${index}`} key={item}>
              <span>{index + 1}</span>
              {item}
            </a>
          ))}
        </nav>

        <div className="profile-card">
          <div className="mini-avatar">
            {cv.photoUrl.trim() ? <img src={cv.photoUrl.trim()} alt={cv.fullName} /> : <span>N</span>}
          </div>
          <div>
            <b>{cv.fullName}</b>
            <p>{cv.headline}</p>
          </div>
        </div>

        <button className="sidebar-export" onClick={() => window.print()}>
          Xuất PDF / In A4
        </button>
      </aside>

      <section className="studio-main">
        <header className="studio-topbar">
          <div>
            <p className="top-kicker">Đang chỉnh CV</p>
            <h2>{templateLabels[cv.template]}</h2>
          </div>

          <div className="top-controls">
            <span>{status}</span>
            <button className="ghost-btn" onClick={reset}>Reset</button>
            <button className="primary-export" onClick={() => window.print()}>
              Xuất PDF / In A4
            </button>
          </div>
        </header>

        <section className="studio-workspace">
          <aside className="editor-panel-pro">
            <section className="editor-card" id="section-0">
              <div className="section-heading">
                <span>01</span>
                <div>
                  <h2>Thông tin cá nhân</h2>
                  <p>Ảnh, tên, vị trí ứng tuyển và phần giới thiệu.</p>
                </div>
              </div>

              <label>Link ảnh đại diện
                <input value={cv.photoUrl} onChange={(e) => setField("photoUrl", e.target.value)} placeholder="Dán link ảnh vào đây" />
              </label>
              <label>Họ và tên
                <input value={cv.fullName} onChange={(e) => setField("fullName", e.target.value)} />
              </label>
              <label>Vị trí ứng tuyển
                <input value={cv.headline} onChange={(e) => setField("headline", e.target.value)} />
              </label>
              <label>Tiêu đề phụ
                <input value={cv.subtitle} onChange={(e) => setField("subtitle", e.target.value)} />
              </label>
              <label>Câu nhấn mạnh
                <input value={cv.quote} onChange={(e) => setField("quote", e.target.value)} />
              </label>
              <label>Tóm tắt bản thân
                <textarea rows={5} value={cv.summary} onChange={(e) => setField("summary", e.target.value)} />
              </label>
            </section>

            <section className="editor-card" id="section-1">
              <div className="section-heading">
                <span>02</span>
                <div>
                  <h2>Liên hệ</h2>
                  <p>Thông tin nên ngắn, sạch, dễ đọc trên CV.</p>
                </div>
              </div>

              <label>Điện thoại
                <input value={cv.contact.phone} onChange={(e) => setContact("phone", e.target.value)} />
              </label>
              <label>Email
                <input value={cv.contact.email} onChange={(e) => setContact("email", e.target.value)} />
              </label>
              <label>Địa chỉ
                <input value={cv.contact.address} onChange={(e) => setContact("address", e.target.value)} />
              </label>
              <label>Github
                <input value={cv.contact.github} onChange={(e) => setContact("github", e.target.value)} />
              </label>
              <label>Portfolio
                <input value={cv.contact.portfolio} onChange={(e) => setContact("portfolio", e.target.value)} />
              </label>
            </section>

            <section className="editor-card" id="section-2">
              <div className="section-heading">
                <span>03</span>
                <div>
                  <h2>Kỹ năng</h2>
                  <p>Mỗi dòng là một kỹ năng hoặc một điểm mạnh.</p>
                </div>
              </div>

              <label>Kỹ năng
                <textarea rows={5} value={joinLines(cv.skills)} onChange={(e) => setField("skills", splitLines(e.target.value))} />
              </label>
              <label>Điểm mạnh
                <textarea rows={5} value={joinLines(cv.strengths)} onChange={(e) => setField("strengths", splitLines(e.target.value))} />
              </label>
              <label>Học vấn
                <textarea rows={4} value={cv.education} onChange={(e) => setField("education", e.target.value)} />
              </label>
              <label>Chứng chỉ
                <textarea rows={3} value={cv.certificates} onChange={(e) => setField("certificates", e.target.value)} />
              </label>
            </section>

            <section className="editor-card" id="section-3">
              <div className="section-heading with-button">
                <span>04</span>
                <div>
                  <h2>Kinh nghiệm</h2>
                  <p>Nên viết theo kết quả, không chỉ liệt kê nhiệm vụ.</p>
                </div>
                <button onClick={() => setCv((old) => ({ ...old, experiences: [...old.experiences, newExp()] }))}>+ Thêm</button>
              </div>

              {cv.experiences.map((exp, index) => (
                <div className="nested-editor" key={exp.id}>
                  <div className="nested-title">
                    <b>Kinh nghiệm {index + 1}</b>
                    <button onClick={() => removeExp("experiences", index)}>Xóa</button>
                  </div>
                  <label>Vị trí
                    <input value={exp.title} onChange={(e) => setExp("experiences", index, "title", e.target.value)} />
                  </label>
                  <label>Công ty
                    <input value={exp.company} onChange={(e) => setExp("experiences", index, "company", e.target.value)} />
                  </label>
                  <label>Thời gian
                    <input value={exp.time} onChange={(e) => setExp("experiences", index, "time", e.target.value)} />
                  </label>
                  <label>Mô tả, mỗi dòng một ý
                    <textarea rows={4} value={joinLines(exp.bullets)} onChange={(e) => setExp("experiences", index, "bullets", splitLines(e.target.value))} />
                  </label>
                </div>
              ))}
            </section>

            <section className="editor-card" id="section-4">
              <div className="section-heading with-button">
                <span>05</span>
                <div>
                  <h2>Dự án</h2>
                  <p>Developer nên có dự án; IT/Giáo viên có thể để hoạt động nổi bật.</p>
                </div>
                <button onClick={() => setCv((old) => ({ ...old, projects: [...old.projects, newExp()] }))}>+ Thêm</button>
              </div>

              {cv.projects.map((exp, index) => (
                <div className="nested-editor" key={exp.id}>
                  <div className="nested-title">
                    <b>Dự án {index + 1}</b>
                    <button onClick={() => removeExp("projects", index)}>Xóa</button>
                  </div>
                  <label>Tên dự án
                    <input value={exp.title} onChange={(e) => setExp("projects", index, "title", e.target.value)} />
                  </label>
                  <label>Công nghệ / nhóm
                    <input value={exp.company} onChange={(e) => setExp("projects", index, "company", e.target.value)} />
                  </label>
                  <label>Thời gian
                    <input value={exp.time} onChange={(e) => setExp("projects", index, "time", e.target.value)} />
                  </label>
                  <label>Mô tả
                    <textarea rows={4} value={joinLines(exp.bullets)} onChange={(e) => setExp("projects", index, "bullets", splitLines(e.target.value))} />
                  </label>
                </div>
              ))}
            </section>

            <section className="editor-card" id="section-5">
              <div className="section-heading">
                <span>06</span>
                <div>
                  <h2>Mục tiêu & từ khóa</h2>
                  <p>Dùng để tối ưu CV theo vị trí ứng tuyển.</p>
                </div>
              </div>

              <label>Mục tiêu
                <textarea rows={3} value={cv.goal} onChange={(e) => setField("goal", e.target.value)} />
              </label>
              <label>Từ khóa, mỗi dòng một từ
                <textarea rows={4} value={joinLines(cv.keywords)} onChange={(e) => setField("keywords", splitLines(e.target.value))} />
              </label>
            </section>
          </aside>

          <section className="preview-stage">
            <div className="template-toolbar">
              <div>
                <p>Chọn mẫu CV</p>
                <h3>3 phong cách khác nhau</h3>
              </div>

              <div className="template-cards">
                {(Object.keys(templateLabels) as TemplateId[]).map((id) => (
                  <button
                    key={id}
                    className={cv.template === id ? "template-preview-card active" : "template-preview-card"}
                    onClick={() => setField("template", id)}
                  >
                    <span className={`mini-template mini-template-${id}`}>
                      <i />
                      <b />
                      <em />
                    </span>
                    <strong>{templateLabels[id].replace("Mẫu ", "")}</strong>
                    <small>{templateDescriptions[id]}</small>
                    <button
                      type="button"
                      className="load-template"
                      onClick={(event) => {
                        event.stopPropagation();
                        loadTemplate(id);
                      }}
                    >
                      Nạp nội dung
                    </button>
                  </button>
                ))}
              </div>
            </div>

            <div className="pdf-guide">
              <b>Xuất PDF chuẩn:</b>
              <span>A4</span>
              <span>Scale 100%</span>
              <span>Background graphics</span>
              <span>Margin None/Default</span>
            </div>

            <div className="paper-viewport">
              <CvPreview cv={cv} />
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
