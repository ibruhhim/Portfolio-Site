import React from "react";

type CardProps = {
  desc: string;
  url: string;
  title: string;
  img: string;
  tech: string[];
};

export default function Card({ desc, url, title, img, tech }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 h-[500px] w-80 flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-pink-300 transition-all group">
      <div className="w-full h-48 overflow-hidden bg-gray-100">
        <img
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          src={img}
          alt={title}
        />
      </div>
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="font-bold text-xl text-black group-hover:text-pink-600 transition-colors">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{desc}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => {
            const colors = [
              "bg-pink-50 border-pink-200 text-pink-700",
              "bg-purple-50 border-purple-200 text-purple-700",
              "bg-violet-50 border-violet-200 text-violet-700",
            ];
            return (
              <span
                key={i}
                className={`px-3 py-1 text-xs rounded-full border font-medium ${colors[i % colors.length]}`}
              >
                {t}
              </span>
            );
          })}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto px-6 py-3 rounded-lg font-semibold w-full text-center bg-purple-600 hover:bg-purple-700 text-white text-sm transition-all shadow-md hover:shadow-lg"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
