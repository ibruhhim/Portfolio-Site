import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { cn } from '@/utils/cn';
import gridData from '@/data/gridData';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridData.map(
            ({title, desc, id, className, img, imgClass}) => (
        <BentoGridItem 
            key={id}
            id={id}
            title={title}
            description={desc}
            className={cn("bg-black hover:bg-gray-900 text-white", className)}
            img={img}
            imgClass={imgClass}
            />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
