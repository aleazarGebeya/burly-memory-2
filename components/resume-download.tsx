import React from "react";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon } from "lucide-react";

export const ResumeDownload: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-r from-gray-100 to-white flex justify-center animate-fade-in">
      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg shadow-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
      >
        <DownloadIcon size={20} /> Download Resume
      </a>
    </section>
  );
};
