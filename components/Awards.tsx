import React from "react";
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";
import AwardCard from "./ui/AwardCard";

const awardsData = [
  {
    title: "Dean's List Scholar",
    issuer: "University of Toronto",
    year: "Oct 2024",
    description:
      "The Dean's List Scholar Award honors students who achieve exceptional academic performance and consistently high GPAs, placing them among the top of their class.",
    icon: <FaTrophy className="text-purple-500 text-4xl mb-3 mx-auto" />
  },
  {
    title: "Ontario Scholar Award",
    issuer: "TL Kennedy Secondary School",
    year: "Jun 2023",
    description:
      "The Ontario Scholar Award is exclusively granted to high-achieving graduates who have demonstrated exceptional academic excellence during their educational journey.",
    icon: <FaMedal className="text-purple-600 text-4xl mb-3 mx-auto" />
  },
  {
    title: "Entrance Award Of Distinction",
    issuer: "University of Toronto",
    year: "May 2023",
    description:
      "Awarded to students with a passion for learning and a commitment to excellence, designed for the brightest minds entering the University of Toronto.",
    icon: <FaAward className="text-purple-700 text-4xl mb-3 mx-auto" />
  }
];

const Awards = () => {
  return (
    <section className="text-sm w-full pb-48" id="awards" >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold p-12 text-black">Awards & Recognition</h2>
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6">
          {awardsData.map((award, index) => (
            <AwardCard
              key={index}
              title={award.title}
              issuer={award.issuer}
              year={award.year}
              description={award.description}
              icon={award.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
