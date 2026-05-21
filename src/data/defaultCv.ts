import type { CvData, TemplateId } from "../types/cv";

export const templateLabels: Record<TemplateId, string> = {
  it: "Mẫu 1 - IT Support / Kỹ thuật",
  teacher: "Mẫu 2 - Giáo viên / Gia sư",
  dev: "Mẫu 3 - Developer / Fullstack Fresher"
};

export const templateDescriptions: Record<TemplateId, string> = {
  it: "Sidebar kỹ thuật, timeline rõ, hợp ứng tuyển IT Support.",
  teacher: "Sáng, mềm, học thuật, hợp giáo viên Tin học/Gia sư.",
  dev: "Dashboard hiện đại, nhiều card dự án, hợp Developer Fresher."
};

export const starterTemplates: Record<TemplateId, CvData> = {
  it: {
    template: "it",
    photoUrl: "https://i.ibb.co/wrBTs6BP/image-1.png",
    fullName: "Đặng Minh Nhật",
    headline: "IT Support Trainee",
    subtitle: "Ứng tuyển vị trí Kỹ thuật IT / IT Support",
    summary:
      "Tốt nghiệp Kỹ thuật phần mềm, có nền tảng CNTT, từng hỗ trợ người dùng sử dụng CRM, xử lý dữ liệu Excel và hướng dẫn Tin học/C++ cho người mới bắt đầu. Phù hợp vị trí IT Support dưới 1 năm kinh nghiệm nhờ khả năng hỏi đúng vấn đề, giải thích dễ hiểu, kiên nhẫn và sẵn sàng học thêm về Windows, Office, máy in, laptop, máy bàn.",
    quote: "Kiên nhẫn hỗ trợ - hỏi đúng vấn đề - xử lý từng bước.",
    contact: {
      phone: "0866 908 220",
      email: "dangminhnhat10988@gmail.com",
      address: "Quảng Phát, Trảng Bom, Đồng Nai",
      github: "github.com/DangMinhNhat1509",
      portfolio: "portfolio-dangminhnhat.vercel.app"
    },
    skills: ["Windows", "Office", "Excel", "CRM", "Google Drive", "PowerPoint", "C++", "C#", "Python"],
    strengths: [
      "Tiếp nhận vấn đề, hỏi rõ lỗi, hướng dẫn người dùng từng bước.",
      "Kiên nhẫn với người dùng không chuyên công nghệ.",
      "Biết ghi nhận thông tin, kiểm tra lại kết quả sau hỗ trợ.",
      "Sẵn sàng học thêm quy trình kỹ thuật thiết bị văn phòng."
    ],
    education: "Đại học FPT\nCử nhân Kỹ thuật phần mềm\n2021 - 2025 | GPA: 6.9/10",
    certificates: "Academic English Writing - Coursera\nĐang học Nghiệp vụ Sư phạm - ĐH Sư phạm Hà Nội 2",
    experiences: [
      {
        id: "jt",
        title: "Nhân viên kinh doanh tổng hợp",
        company: "J&T Express",
        time: "06/2025 - 08/2025",
        bullets: [
          "Hướng dẫn đội ngũ bưu cục sử dụng phần mềm CRM để quản lý khách hàng.",
          "Quản lý thông tin khách hàng, hợp đồng, thanh toán, đối soát và vấn đề đơn hàng.",
          "Làm báo cáo đơn hàng, khách hàng mới và sản lượng thực tế để hỗ trợ vận hành."
        ]
      },
      {
        id: "mentor-it",
        title: "Gia sư Toán & Tin học / Mentor online",
        company: "Offline & FUNiX",
        time: "2019 - Hiện tại",
        bullets: [
          "Dạy Tin học, C++ và Toán cấp 2 từ cơ bản đến nâng cao cho hơn 40 học sinh.",
          "Rèn kỹ năng hỏi lỗi, chia nhỏ vấn đề và kiểm tra kết quả sau hỗ trợ."
        ]
      },
      {
        id: "intern-it",
        title: "Thực tập sinh Công nghệ",
        company: "ICT24H / FPT Software",
        time: "2023",
        bullets: [
          "Tham gia phát triển giao diện phần mềm quản lý nhân sự và hệ thống E-learning.",
          "Làm quen quy trình kiểm tra lỗi, dữ liệu và tư duy phân tích vấn đề kỹ thuật."
        ]
      }
    ],
    projects: [
      {
        id: "crm",
        title: "Hỗ trợ CRM vận hành",
        company: "J&T Express",
        time: "2025",
        bullets: ["Hướng dẫn thao tác, giảm lỗi nhập liệu, hỗ trợ báo cáo vận hành."]
      }
    ],
    goal:
      "Trong 6 tháng, nắm chắc quy trình tiếp nhận lỗi, cài đặt phần mềm, Windows/Office/driver, hỗ trợ thiết bị văn phòng và giao tiếp tốt với người dùng.",
    keywords: ["IT Support", "Kỹ thuật IT", "Windows", "Office", "CRM", "Excel", "Hỗ trợ người dùng", "Laptop", "Máy in"]
  },

  teacher: {
    template: "teacher",
    photoUrl: "https://i.ibb.co/wrBTs6BP/image-1.png",
    fullName: "Đặng Minh Nhật",
    headline: "Giáo viên Tin học - Gia sư Toán tư duy",
    subtitle: "Ứng tuyển Giáo viên Tin học / Gia sư Toán",
    summary:
      "Có nền tảng Kỹ thuật phần mềm và kinh nghiệm dạy Toán, Tin học cho học sinh cấp 2, cấp 3. Biết chia nhỏ kiến thức, giải thích dễ hiểu, theo sát tiến độ và trao đổi với phụ huynh để cải thiện kết quả học tập. Phù hợp vị trí giáo viên Tin học, trợ giảng công nghệ, gia sư Toán hoặc mentor lập trình cơ bản.",
    quote: "Dạy dễ hiểu - hỏi đúng chỗ hổng - giúp học sinh tiến bộ từng giai đoạn.",
    contact: {
      phone: "0866 908 220",
      email: "dangminhnhat10988@gmail.com",
      address: "Trảng Bom, Đồng Nai",
      github: "github.com/DangMinhNhat1509",
      portfolio: "portfolio-dangminhnhat.vercel.app"
    },
    skills: ["Toán THCS", "Tin học", "C++ cơ bản", "Scratch", "Office", "PowerPoint", "Soạn bài", "Luyện đề", "Theo sát học sinh"],
    strengths: [
      "Biết hỏi để xác định học sinh đang hổng phần nào.",
      "Chia bài khó thành từng bước nhỏ, dễ làm theo.",
      "Trao đổi được với phụ huynh về tiến độ và mục tiêu.",
      "Ưu tiên giúp học sinh hiểu bản chất thay vì học vẹt."
    ],
    education: "Đại học FPT\nCử nhân Kỹ thuật phần mềm\n2021 - 2025 | GPA: 6.9/10",
    certificates: "Đang học Nghiệp vụ Sư phạm - ĐH Sư phạm Hà Nội 2\nAcademic English Writing - Coursera",
    experiences: [
      {
        id: "tutor",
        title: "Gia sư Toán & Tin học",
        company: "Dạy trực tiếp và online",
        time: "2019 - Hiện tại",
        bullets: [
          "Dạy Toán cấp 2, Tin học cơ bản, C++ và tư duy lập trình cho học sinh mới bắt đầu.",
          "Hỗ trợ hơn 40 học sinh cải thiện điểm số nhờ lộ trình cá nhân hóa.",
          "Thiết kế bài học theo từng năng lực: mất gốc, củng cố, luyện đề, nâng cao."
        ]
      },
      {
        id: "funix-teacher",
        title: "Mentor online",
        company: "FUNiX",
        time: "2023 - 2024",
        bullets: [
          "Hỗ trợ học viên xử lý lỗi lập trình, hiểu yêu cầu bài tập và hoàn thành sản phẩm.",
          "Rèn kỹ năng phản hồi rõ ràng, hướng dẫn người học tự sửa lỗi."
        ]
      },
      {
        id: "edu-content",
        title: "Hỗ trợ học liệu điện tử",
        company: "Startup nội dung giáo dục",
        time: "01/2025 - Hiện tại",
        bullets: [
          "Quản lý nội dung học liệu, video, file bài học và quy trình sản xuất nội dung giáo dục.",
          "Ứng dụng công cụ AI để hỗ trợ soạn nội dung, kiểm tra tài liệu và tối ưu quy trình."
        ]
      }
    ],
    projects: [
      {
        id: "teaching-plan",
        title: "Lộ trình cá nhân hóa",
        company: "Gia sư Toán/Tin",
        time: "2019 - nay",
        bullets: ["Tạo lộ trình riêng cho học sinh mất gốc, luyện đề và nâng cao."]
      }
    ],
    goal:
      "Trở thành giáo viên Tin học/Gia sư Toán có phương pháp rõ ràng, giúp học sinh hiểu bài, tự tin hơn và có kết quả đo được sau từng giai đoạn.",
    keywords: ["Giáo viên Tin học", "Gia sư Toán", "Toán THCS", "C++", "Scratch", "Tin học văn phòng", "Luyện đề", "Soạn bài"]
  },

  dev: {
    template: "dev",
    photoUrl: "https://i.ibb.co/wrBTs6BP/image-1.png",
    fullName: "Đặng Minh Nhật",
    headline: "Frontend / Fullstack Developer Fresher",
    subtitle: "Ứng tuyển Frontend Developer / Fullstack Fresher",
    summary:
      "Tốt nghiệp Kỹ thuật phần mềm, có nền tảng React, Next.js, TypeScript, C#, Python và cơ sở dữ liệu. Từng tham gia phát triển giao diện, hệ thống E-learning, xử lý dữ liệu học viên và xây dựng sản phẩm web phục vụ nhu cầu thực tế. Mong muốn làm việc ở vị trí Fresher Developer để rèn kỹ năng sản phẩm, API, UI và quy trình phát triển phần mềm.",
    quote: "Build - Learn - Solve Problems - Make Products.",
    contact: {
      phone: "0866 908 220",
      email: "dangminhnhat10988@gmail.com",
      address: "Trảng Bom, Đồng Nai",
      github: "github.com/DangMinhNhat1509",
      portfolio: "portfolio-dangminhnhat.vercel.app"
    },
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "C#", "Python", "SQL", "Git", "REST API", "Tailwind"],
    strengths: [
      "Có tư duy sản phẩm và thích làm công cụ giải quyết vấn đề thực tế.",
      "Biết đọc lỗi, tìm nguyên nhân và chia nhỏ vấn đề khi debug.",
      "Có kinh nghiệm làm việc với giao diện, dữ liệu và học liệu.",
      "Sẵn sàng học framework, quy trình và chuẩn code của công ty."
    ],
    education: "Đại học FPT\nCử nhân Kỹ thuật phần mềm\n2021 - 2025 | GPA: 6.9/10",
    certificates: "Academic English Writing - Coursera\nĐang học Nghiệp vụ Sư phạm",
    experiences: [
      {
        id: "fpt-dev",
        title: "Thực tập sinh Công nghệ",
        company: "FPT Software / ICT24H",
        time: "2023",
        bullets: [
          "Tham gia phát triển giao diện phần mềm quản lý nhân sự và hệ thống E-learning.",
          "Làm quen quy trình frontend, backend, database, debug và API."
        ]
      },
      {
        id: "mentor-dev",
        title: "Mentor lập trình cơ bản",
        company: "FUNiX / Dạy online",
        time: "2019 - Hiện tại",
        bullets: [
          "Hỗ trợ người học C++, tư duy thuật toán cơ bản và cách tự debug lỗi.",
          "Diễn giải vấn đề kỹ thuật theo cách dễ hiểu cho người mới bắt đầu."
        ]
      }
    ],
    projects: [
      {
        id: "cv-builder",
        title: "CV Builder",
        company: "Personal Project",
        time: "2026",
        bullets: [
          "Web CV chỉnh sửa trực tiếp, lưu localStorage, đổi mẫu và xuất PDF A4.",
          "Tách component, data, preview và form để dễ mở rộng."
        ]
      },
      {
        id: "lms",
        title: "LMS .NET",
        company: "Graduation / Learning Project",
        time: "2024",
        bullets: ["Hệ thống quản lý học viên, bài học, dữ liệu và API cơ bản."]
      },
      {
        id: "portfolio",
        title: "Portfolio Web",
        company: "Personal Project",
        time: "2026",
        bullets: ["Giới thiệu bản thân, kỹ năng, dự án và liên hệ ứng tuyển."]
      }
    ],
    goal:
      "Trong 6 tháng, thành thạo hơn React/Next.js, TypeScript, API, Git workflow và quy trình làm sản phẩm thực tế trong team.",
    keywords: ["Frontend", "React", "Next.js", "TypeScript", "REST API", "Git", "SQL", "Fresher Developer", "UI", "Debug"]
  }
};

export const defaultCv = starterTemplates.it;
