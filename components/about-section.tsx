import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=320&h=320&fit=crop&auto=format"
          alt="Professional portrait of the designer"
          className="rounded-full w-40 h-40 object-cover shadow-xl border-4 border-white mb-6 md:mb-0"
          loading="lazy"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hi, I'm Jane Doe, a multidisciplinary designer and developer passionate about crafting stunning digital experiences. With over 7 years of experience, I've collaborated with agencies, startups, and global brands to turn ideas into memorable products.
        </p>
        <p className="text-gray-600">
          I specialize in UI/UX design, web development, and creative strategy. Whether working solo or in a team, my focus is always on user-centric outcomes with a relentless attention to detail.
        </p>
      </div>
    </section>
  );
};
