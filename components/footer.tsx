import React from "react";

export const Footer: React.FC = () => (
  <footer className="bg-black py-8 text-white mt-16 text-center w-full">
    <div className="max-w-4xl mx-auto text-sm">
      © {new Date().getFullYear()} Jane Doe. Designed & Built with passion.
    </div>
  </footer>
);
