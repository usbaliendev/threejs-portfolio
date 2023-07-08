import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[225px]  w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-transparent p-[1px] rounded-[20px] shadow-[0px_0px_20px_1px_rgba(22,138,246,0.25)]'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#03030370] border-2 border-[#168bf6] backdrop-blur-[2.5px] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>Introdução</p>
        <h2 className={`${styles.sectionHeadText} text-center `}>
          Visão geral.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] text-justify max-w-3xl leading-[30px]'>
        Sou um desenvolvedor front-end, aplicado e apaixonado por arte e design
        e games. Tenho experiência como desenvolvedor front-end especialmento
        com o framework React, TypeScript , JavaScript e NodeJS estudando agora
        NextJS. Já trabalhei em outras áreas, como contabilidade, operador de
        sistemas, designer e tenho alguns projetos pessoais pequenos de prática,
        sempre em busca de cada vez mais qualificação e certificados. Sou
        proficiente, aprendo rápido e sou autodidata em muitos conhecimentos,
        como por exemplo aprendi Ingles e cheguei no nivel C2 de proeficiência
        sozinho. Consigo me autogerenciar efetivamente durante projetos
        independentes, bem como colaborar como parte de uma equipe produtiva e
        clientes para criar soluções eficientes, bonitas e fáceis de usar que
        resolvem problemas do mundo real. Vamos trabalhar juntos para dar vida
        às suas ideias ou me contrate para seu time!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 gap-x-2 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
