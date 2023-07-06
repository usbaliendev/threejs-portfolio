/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='animate-text bg-gradient-to-b w-full glitch-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className='wddDd rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt='web-dev' className='w-16 h-16 object-contain' />
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
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'>
        Sou um desenvolvedor de software aplicado e em constante aprendizado,
        com experiência em desenvolvimento com o framework React de mais de 1
        ano, TypeScript e JavaScript e experiência em estruturas como React,
        Node.js e Três.js. Eu aprendo e colaboro de perto com as equipes e
        clientes para criar soluções eficientes, bonitas e fáceis de usar que
        resolvem problemas do mundo real. Vamos trabalhar juntos para dar vida
        às suas ideias ou me contrate para seu time!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
