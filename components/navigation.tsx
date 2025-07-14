import React from "react";

export const Navigation: React.FC = () => {
  return (
    <nav className="w-full py-6 px-8 bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 flex justify-between items-center">
      <a href="#" className="text-xl font-extrabold tracking-tight text-black mr-4">Jane Doe</a>
      <ul className="flex items-center gap-6">
        <li><a href="#gallery" className="hover:text-black text-gray-500 transition-colors font-medium">Portfolio</a></li>
        <li><a href="#about" className="hover:text-black text-gray-500 transition-colors font-medium">About</a></li>
        <li><a href="#testimonials" className="hover:text-black text-gray-500 transition-colors font-medium">Testimonials</a></li>
        <li><a href="#awards" className="hover:text-black text-gray-500 transition-colors font-medium">Awards</a></li>
        <li><a href="#contact" className="hover:text-black text-gray-500 transition-colors font-medium">Contact</a></li>
      </ul>
    </nav>
  );
};
