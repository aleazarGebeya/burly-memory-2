import React from "react";

export interface Award {
  id: number;
  name: string;
  year: string;
  description: string;
}

interface AwardsSectionProps {
  awards: Award[];
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  return (
    <section className="w-full bg-gradient-to-t from-slate-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Awards & Honors</h2>
        <ul className="divide-y divide-slate-200">
          {awards.map((award) => (
            <li key={award.id} className="py-6 flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-1/4">
                <span className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full">{award.year}</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-lg font-bold mb-1">{award.name}</h3>
                <p className="text-sm text-gray-600">{award.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
