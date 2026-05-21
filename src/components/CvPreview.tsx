import type { CvData, Experience } from "../types/cv";

function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <span key={`${line}-${index}`}>
          {line}
          {index < text.split("\n").length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

function Photo({ cv }: { cv: CvData }) {
  return (
    <div className="cv-photo">
      {cv.photoUrl.trim() ? <img src={cv.photoUrl.trim()} alt={cv.fullName} /> : <span>Ảnh</span>}
    </div>
  );
}

function ContactList({ cv }: { cv: CvData }) {
  return (
    <div className="contact-list">
      <p><b>Phone</b><span>{cv.contact.phone}</span></p>
      <p><b>Email</b><span>{cv.contact.email}</span></p>
      <p><b>Địa chỉ</b><span>{cv.contact.address}</span></p>
      <p><b>Github</b><span>{cv.contact.github}</span></p>
      <p><b>Portfolio</b><span>{cv.contact.portfolio}</span></p>
    </div>
  );
}

function SkillPills({ items }: { items: string[] }) {
  return (
    <div className="skill-pills">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}

function ExperienceBlock({ title, items }: { title: string; items: Experience[] }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {items.map((item) => (
        <article className="exp-item" key={item.id}>
          <div className="exp-head">
            <div>
              <h3>{item.title}</h3>
              <p>{item.company}</p>
            </div>
            <time>{item.time}</time>
          </div>
          <ul>
            {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </article>
      ))}
    </section>
  );
}

function MiniSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mini-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ItTemplate({ cv }: { cv: CvData }) {
  return (
    <article className="cv-paper cv-it">
      <aside className="it-side">
        <Photo cv={cv} />
        <h1>{cv.fullName}</h1>
        <p className="side-role">{cv.headline}</p>
        <ContactList cv={cv} />

        <MiniSection title="Kỹ năng">
          <SkillPills items={cv.skills} />
        </MiniSection>

        <MiniSection title="Điểm mạnh">
          <ul className="clean-list">{cv.strengths.map((x) => <li key={x}>{x}</li>)}</ul>
        </MiniSection>

        <MiniSection title="Học vấn">
          <p><Lines text={cv.education} /></p>
        </MiniSection>

        <MiniSection title="Chứng chỉ">
          <p><Lines text={cv.certificates} /></p>
        </MiniSection>
      </aside>

      <main className="it-main">
        <div className="it-label">{cv.subtitle}</div>
        <p className="big-quote">“{cv.quote}”</p>
        <p className="summary">{cv.summary}</p>

        <div className="it-metrics">
          <div><b>01</b><span>Hỗ trợ người dùng</span></div>
          <div><b>02</b><span>CRM / Excel / Office</span></div>
          <div><b>03</b><span>Sẵn sàng học kỹ thuật</span></div>
        </div>

        <ExperienceBlock title="Kinh nghiệm làm việc" items={cv.experiences} />

        <section className="bottom-card-row">
          <div className="soft-card">
            <h3>Mục tiêu 6 tháng</h3>
            <p>{cv.goal}</p>
          </div>
          <div className="soft-card">
            <h3>Từ khóa</h3>
            <p>{cv.keywords.join(" • ")}</p>
          </div>
        </section>
      </main>
    </article>
  );
}

function TeacherTemplate({ cv }: { cv: CvData }) {
  return (
    <article className="cv-paper cv-teacher">
      <header className="teacher-hero">
        <Photo cv={cv} />
        <div>
          <p className="teacher-tag">{cv.subtitle}</p>
          <h1>{cv.fullName}</h1>
          <h2>{cv.headline}</h2>
          <p className="teacher-quote">“{cv.quote}”</p>
        </div>
      </header>

      <section className="teacher-contact">
        <span>{cv.contact.phone}</span>
        <span>{cv.contact.email}</span>
        <span>{cv.contact.address}</span>
        <span>{cv.contact.github}</span>
      </section>

      <main className="teacher-grid">
        <aside className="teacher-side">
          <MiniSection title="Chuyên môn">
            <SkillPills items={cv.skills} />
          </MiniSection>

          <MiniSection title="Phương pháp dạy">
            <ul className="check-list">{cv.strengths.map((x) => <li key={x}>{x}</li>)}</ul>
          </MiniSection>

          <MiniSection title="Học vấn">
            <p><Lines text={cv.education} /></p>
          </MiniSection>

          <MiniSection title="Chứng chỉ">
            <p><Lines text={cv.certificates} /></p>
          </MiniSection>
        </aside>

        <section className="teacher-main">
          <section className="intro-card">
            <h2>Giới thiệu</h2>
            <p>{cv.summary}</p>
          </section>

          <ExperienceBlock title="Kinh nghiệm giảng dạy" items={cv.experiences} />

          <section className="teaching-icons">
            <div><b>Kiên nhẫn</b><span>Không bỏ qua chỗ hổng kiến thức.</span></div>
            <div><b>Dễ hiểu</b><span>Chia nhỏ bài học thành từng bước.</span></div>
            <div><b>Theo sát</b><span>Có mục tiêu và phản hồi rõ ràng.</span></div>
          </section>

          <div className="goal-strip">{cv.goal}</div>
        </section>
      </main>
    </article>
  );
}

function DevTemplate({ cv }: { cv: CvData }) {
  return (
    <article className="cv-paper cv-dev">
      <header className="dev-hero">
        <div className="dev-left">
          <Photo cv={cv} />
          <div>
            <p>{cv.subtitle}</p>
            <h1>{cv.fullName}</h1>
            <h2>{cv.headline}</h2>
            <span>{cv.quote}</span>
          </div>
        </div>
        <ContactList cv={cv} />
      </header>

      <main className="dev-grid">
        <aside className="dev-side">
          <MiniSection title="Tech stack">
            <SkillPills items={cv.skills} />
          </MiniSection>

          <MiniSection title="Kỹ năng mềm">
            <ul className="clean-list">{cv.strengths.map((x) => <li key={x}>{x}</li>)}</ul>
          </MiniSection>

          <MiniSection title="Học vấn">
            <p><Lines text={cv.education} /></p>
          </MiniSection>

          <MiniSection title="Chứng chỉ">
            <p><Lines text={cv.certificates} /></p>
          </MiniSection>
        </aside>

        <section className="dev-main">
          <section className="dev-card intro-card">
            <h2>Giới thiệu</h2>
            <p>{cv.summary}</p>
          </section>

          <ExperienceBlock title="Kinh nghiệm" items={cv.experiences} />
          <ExperienceBlock title="Dự án nổi bật" items={cv.projects} />

          <section className="dev-bottom">
            <div className="dev-card">
              <h3>Mục tiêu 6 tháng</h3>
              <p>{cv.goal}</p>
            </div>
            <div className="dev-card">
              <h3>Từ khóa</h3>
              <p>{cv.keywords.join(" • ")}</p>
            </div>
          </section>
        </section>
      </main>
    </article>
  );
}

export default function CvPreview({ cv }: { cv: CvData }) {
  if (cv.template === "teacher") return <TeacherTemplate cv={cv} />;
  if (cv.template === "dev") return <DevTemplate cv={cv} />;
  return <ItTemplate cv={cv} />;
}
