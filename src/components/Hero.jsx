import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#5cd1ff]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b glitch-gradient to-[#000000]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá Mundo 👋, <br className='sm:block' />
            {/* Eu Sou <span className='text-[#0C73E9]'>Angelo</span>{" "} */}
            Eu Sou{" "}
            <span className='animate-text bg-gradient-to-r from-[#0c73e9] via-[#08CC92] to-[#C905FF] bg-clip-text text-transparent'>
              Angelo
            </span>
          </h1>
          <p className={`${styles.heroSubText} text-justify`}>
            Sou desenvolvedor fullstack, mais chegado com o front-end e
            criatividades, crio interfaces de usuário, aplicações web, 3D
            assets. Adoro arte e estudar filosofias. Um geek e gamer nas horas
            vagas
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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
