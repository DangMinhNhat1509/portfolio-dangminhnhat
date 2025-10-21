"use client";
import { FileDown } from "lucide-react";

export function DownloadPDF() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-1 border border-gray-600 px-3 py-1 rounded-md hover:bg-gray-800 transition"
    >
      <FileDown size={16}/> Tải PDF
    </button>
  );
}
