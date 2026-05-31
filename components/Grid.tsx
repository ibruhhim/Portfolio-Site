import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { cn } from '@/utils/cn';
import gridData from '@/data/gridData';
import SectionHeading from './ui/SectionHeading';

const Grid = () => {
  return (
    <section id="about" className="w-full bg-islamic-cream py-12 md:py-16">
      <SectionHeading
        arabicTitle="عَنِّي"
        title="A Little About Me"
        description="Who I am, what I build, and how to reach me."
      />
      <BentoGrid>
        {gridData.map(
            ({title, desc, id, className, img, imgClass}) => (
        <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={desc}
            className={cn(
              "bg-emerald-950 hover:bg-emerald-900 border border-amber-300/20 text-white",
              className
            )}
            img={img}
            imgClass={imgClass}
            />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
