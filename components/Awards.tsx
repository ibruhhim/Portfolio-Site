import React from "react";
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";

const awardsData = [
  {
    title: "Dean's List Scholar",
    issuer: "University of Toronto",
    year: "Oct 2024",
    description:
      "The Dean's List Scholar Award honors students who achieve exceptional academic performance and consistently high GPAs, placing them among the top of their class.",
    icon: <FaTrophy className="text-blue-500 text-4xl mb-3 mx-auto" />
  },
  {
    title: "Ontario Scholar Award",
    issuer: "TL Kennedy Secondary School",
    year: "Jun 2023",
    description:
      "The Ontario Scholar Award is exclusively granted to high-achieving graduates who have demonstrated exceptional academic excellence during their educational journey.",
    icon: <FaMedal className="text-pink-400 text-4xl mb-3 mx-auto" />
  },
  {
    title: "Entrance Award Of Distinction",
    issuer: "University of Toronto",
    year: "May 2023",
    description:
      "Awarded to students with a passion for learning and a commitment to excellence, designed for the brightest minds entering the University of Toronto.",
    icon: <FaAward className="text-indigo-400 text-4xl mb-3 mx-auto" />
  }
];

const Awards = () => {
  return (
    <section className="text-sm w-full pb-48" id="awards">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold p-12">Awards & Recognition</h2>
        <div className="flex justify-center items-center gap-12">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="bg-gray-900 flex flex-col gap-2 text-white shadow-md rounded-2xl p-6 hover:shadow-xl transition max-w-1/5"
            >
              {award.icon}
              <h3 className="text-xl font-semibold">{award.title}</h3>
              <p className="text-gray-100 italic">
                {award.issuer} • {award.year}
              </p>
              <p className="mt-3 text-gray-300">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
