export type TemplateId = "it" | "teacher" | "dev";

export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  github: string;
  portfolio: string;
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  time: string;
  bullets: string[];
};

export type CvData = {
  template: TemplateId;
  photoUrl: string;
  fullName: string;
  headline: string;
  subtitle: string;
  summary: string;
  quote: string;
  contact: ContactInfo;
  skills: string[];
  strengths: string[];
  education: string;
  certificates: string;
  experiences: Experience[];
  projects: Experience[];
  goal: string;
  keywords: string[];
};
