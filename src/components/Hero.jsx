import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 xs:top-[250px] top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00f2ff]' />
          <div className='w-1 sm:h-[26rem] h-96 bg-gradient-to-b blue-gradient to-[#000000]' />
        </div>

        <div className='text-center'>
          <h1
            className={`${styles.heroHeadText} flex justify-center text-white`}>
            Olá Mundo
            <span className='animate-waving-hand'>👋</span>,
          </h1>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Eu Sou{" "}
            <span className='font-black animate-text bg-gradient-to-r from-[#44b778] via-[#36eae3] to-[#a1c0e6] bg-clip-text text-transparent drop-shadow-lg'>
              Angelo
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} text-justify mt-28 drop-shadow-[0_0_2px_#000]`}>
            Sou desenvolvedor fullstack, mais chegado com o front-end e
            criatividades, crio interfaces de usuário, aplicações web, 3D
            assets. Adoro arte, estudar filosofias e sou um geek e gamer nas
            horas vagas.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-20 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-content items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className=' w-3 h-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
