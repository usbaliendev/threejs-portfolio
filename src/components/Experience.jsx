import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { estrela } from "../assets";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(0,0,0,0.75)",
      backdropFilter: "blur(2.5px)",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #0D0D0D" }}
    date={experience.date}
    dateClassName='text-white drop-shadow-[0_0_1px_#000]'
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }>
    <div>
      <h3 className='animate-text bg-gradient-to-r from-[#067ad9] via-[#c2b774] to-[#52df71] bg-clip-text text-transparent text-[24px] font-bold'>
        {experience.title}
      </h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    {experience.points && (
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider text-justify'>
            {point}
          </li>
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>
          Minha jornada trilhada até agora
        </p>
        <h2 className={`${styles.sectionHeadText} text-center `}>
          Experiência de trabalho.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: "#fafafa", color: "#fafafa" }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img src={estrela} className='w-[60%] h-[60%] object-contain' />
              </div>
            }
          />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
