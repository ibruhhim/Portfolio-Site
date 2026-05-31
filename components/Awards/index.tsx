import React from "react";
import AwardCard from "../ui/AwardCard";
import { awardsData } from "@/data/awardsData";
import SectionHeading from "../ui/SectionHeading";

const Awards = () => {
  return (
    <section className="text-sm w-full pb-48 bg-islamic-cream" id="awards">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          arabicTitle="إِنْجَازَات"
          title="Awards & Recognition"
        />
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6">
          {awardsData.map((award, index) => (
            <AwardCard
              key={index}
              title={award.title}
              issuer={award.issuer}
              year={award.year}
              description={award.description}
              icon={award.icon}
              medalType={award.medalType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
