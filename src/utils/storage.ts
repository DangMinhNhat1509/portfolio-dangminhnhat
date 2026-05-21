import type { CvData } from "../types/cv";

export const STORAGE_KEY = "cv-builder-dang-minh-nhat-v2";

export function cloneCv(cv: CvData): CvData {
  return JSON.parse(JSON.stringify(cv));
}

export function loadCv(): CvData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CvData) : null;
  } catch {
    return null;
  }
}

export function saveCv(cv: CvData) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cv));
  } catch {}
}

export function clearCv() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
