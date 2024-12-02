import { gridItems } from '@/data/items'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bento-grid'

const About = () => {
  return (
    <section>
        <BentoGrid>   
            {gridItems.map(({id, title, description, img, imgClassName, titleClassName, spareImg, className})=>(
                <BentoGridItem
                key={id}
                title={title}
                description={description}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                ClassName={className}
                >
                </BentoGridItem>
            ))}
        </BentoGrid>
    </section>
  )
}

export default About