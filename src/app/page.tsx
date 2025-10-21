"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { DownloadPDF } from "@/components/DownloadPDF";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-gray-200 px-6 md:px-24 py-16 font-sans">
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-white">Đặng Minh Nhật</h1>
        <p className="text-gray-400 mt-2">Frontend / Fullstack Developer</p>
        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-400">
          <a href="mailto:dangminhnhat10988@gmail.com" className="flex items-center gap-1"><Mail size={16}/> dangminhnhat10988@gmail.com</a>
          <span>|</span>
          <span className="flex items-center gap-1"><Phone size={16}/> 0866 908 220</span>
          <span>|</span>
          <span className="flex items-center gap-1"><MapPin size={16}/> Đồng Nai, Việt Nam</span>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/DangMinhNhat1509" target="_blank" className="hover:text-white transition"><Github size={20}/></a>
          <DownloadPDF />
        </div>
      </motion.header>

      <Section title="🎓 Học vấn">
        <p>Đại học FPT — Kỹ thuật Phần mềm (2021–2025)</p>
        <p className="text-gray-400">Đã hoàn thành đồ án tốt nghiệp, chờ xét tốt nghiệp chính thức.</p>
      </Section>

      <Section title="💼 Kinh nghiệm làm việc">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Gia sư Toán tư duy & Tin học (Online)</strong> — 2023–nay  
            <p className="text-gray-400 ml-4">
              Dạy Toán tư duy & Tin học văn phòng (Word, Excel, PowerPoint) cho học sinh cấp 2–3.  
              Rèn luyện tư duy logic, kỹ năng giải thích & hướng dẫn trực quan.
            </p>
          </li>
          <li>
            <strong>Nhân viên Kinh doanh Tổng hợp – J&T Express</strong>  
            <p className="text-gray-400 ml-4">
              Hỗ trợ lập hồ sơ, hợp đồng doanh nghiệp, sử dụng CRM để quản lý khách hàng.  
              Thống kê doanh thu, báo cáo tuần/tháng, theo dõi khách hàng ngưng – hủy, hỗ trợ kiểm tra báo giá.
            </p>
          </li>
          <li>
            <strong>Thực tập sinh Backend – FPT Software</strong>  
            <p className="text-gray-400 ml-4">
              Tham gia dự án nội bộ viết bằng .NET Core. Phụ trách API CRUD & authentication.  
              Làm việc nhóm qua Git & Jira.  
              🔗 <a href="https://github.com/DangMinhNhat1509/lms-dotnet" target="_blank" className="text-blue-400 hover:underline">github.com/DangMinhNhat1509/lms-dotnet</a>
            </p>
          </li>
        </ul>
      </Section>

      <Section title="🚀 Dự án tiêu biểu">
        <ProjectCard
          title="🎯 ParkMate – Đồ án tốt nghiệp (2025)"
          desc="Frontend Developer | Expo (React Native), React, TypeScript"
          details="Ứng dụng di động & web cho khách hàng khu vui chơi ParkMate. Nạp tiền, mua vé, xem trò chơi & sự kiện."
          link="https://github.com/faiifr0/GSUSE019_ParkMate"
        />
        <ProjectCard
          title="🧩 Web App Quản lý Khu vui chơi"
          desc=".NET Core MVC + SQL Server"
          details="CRUD vé, khu trò chơi, hóa đơn; tập trung xử lý business logic và responsive layout."
        />
        <ProjectCard
          title="💡 DailyFuel – App theo dõi năng lượng"
          desc="React Native (Expo Bare Workflow)"
          details="Theo dõi calo, ghi chép bữa ăn, tính toán TDEE."
          link="https://github.com/DangMinhNhat1509/dailyfuel"
        />
      </Section>

      <Section title="🧰 Kỹ năng">
        <div className="flex flex-wrap gap-2">
          <SkillBadge name="React" />
          <SkillBadge name="React Native (Expo)" />
          <SkillBadge name="TypeScript" />
          <SkillBadge name=".NET Core" />
          <SkillBadge name="Node.js" />
          <SkillBadge name="TailwindCSS" />
          <SkillBadge name="Firebase" />
          <SkillBadge name="SQL Server" />
        </div>
      </Section>

      <Section title="🌟 Mục tiêu nghề nghiệp">
        <p>
          Mong muốn trở thành <strong>Fullstack Developer</strong> hoặc <strong>Frontend Developer</strong>,  
          xây dựng ứng dụng web/mobile hiện đại, dễ mở rộng & có trải nghiệm người dùng tốt.  
          Học thêm về DevOps & CI/CD trong tương lai.
        </p>
      </Section>

      <footer className="text-center text-sm text-gray-600 mt-12">
        © 2025 — Designed by Đặng Minh Nhật | Deployed on Vercel
      </footer>
    </main>
  );
}
