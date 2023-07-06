import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, link, linkgif } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  desc,
  tags,
  image,
  src_link,
  proj_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary w-full p-5 rounded-[20px] sm:w-[360px]'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project-img'
            className='w-full h-full object-cover rounded-[20px]'
          />

          <div className='absolute inset-0 flex items-end flex-col m-3 gap-1.5 card-img_hover'>
            <div
              onClick={() => window.open(src_link, "blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

            <div
              onClick={() => window.open(proj_link, "blank")}
              className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={linkgif}
                alt='project live'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-justify'>{desc}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              {" "}
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>Meus projetos</p>
        <h2 className={`${styles.sectionHeadText} text-center `}>Coding.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-2-3x1 leading-[30px] text-justify'>
          Os seguintes projetos destacam minhas habilidades e experiência por
          meio de exemplos reais do meu trabalho. Cada projeto é brevemente
          descrito, com links para repositórios de código e demonstrações ao
          vivo. Isso reflete minha capacidade de resolver problemas complexos,
          trabalhar com diferentes tecnologias e gerenciar projetos de forma
          eficaz.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
