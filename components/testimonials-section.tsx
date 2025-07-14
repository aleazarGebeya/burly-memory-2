import React from "react";

export interface Testimonial {
  author: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="w-full bg-gradient-to-b from-slate-100 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow px-6 py-8 flex flex-col items-center">
              <img src={testi.avatar} alt={testi.author} className="w-20 h-20 object-cover rounded-full shadow mb-4" />
              <p className="text-gray-700 italic mb-4">“{testi.content}”</p>
              <p className="font-semibold text-black">{testi.author}</p>
              <span className="text-sm text-gray-500">{testi.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
