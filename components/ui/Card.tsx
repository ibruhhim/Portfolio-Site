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
    <div className="bg-gray-100 h-96 w-80 flex flex-col rounded-xl overflow-hidden gap-4 shadow-xl text-lg p-4">
      <div className="w-full h-2/5 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={img}
          alt={title}
        />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm font-light">{desc}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded-full bg-white border border-gray-400"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto px-4 py-2 rounded-md border font-semibold w-fit border-black bg-white text-black text-sm"
      >
        Learn More
      </a>
    </div>
  );
}
