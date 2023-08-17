import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences, extracurriculum } from "../constants";
import { SectionWrapper } from "../hoc";

import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { estrela, plusico } from "../assets";

const Experience = () => {
  const [elements, setElements] = useState(experiences);
  const [loadMoreExecuted, setLoadMoreExecuted] = useState(false);

  const loadMore = () => {
    setElements([...elements, ...extracurriculum]);
    setLoadMoreExecuted(true);
  };

  // useEffect(() => {
  //   loadMore();
  // }, [loadMore]);

  const getTimelineElements = () =>
    elements.map((experience, index) => (
      <VerticalTimelineElement
        key={`experience-${index}`}
        contentStyle={{
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(2.5px)",
        }}
        contentArrowStyle={{ borderRight: "7px solid #fafafa" }}
        date={experience.date}
        dateClassName='text-white drop-shadow-[0_0_1px_#000]'
        iconStyle={{ background: "#fafafa" }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.subtitle}
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
            {experience.subtitle}
          </p>
        </div>

        {experience.link && (
          <div className='flex justify-end'>
            <a
              href={experience.link}
              className='hover:underline text-[#168BF6] drop-shadow-[0_0_2px_#000]'>
              Link
            </a>
          </div>
        )}

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
    ));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>
          Minha jornada trilhada até agora
        </p>
        <h2 className={`${styles.sectionHeadText} text-center `}>
          Experiência de trabalho e Acadêmica.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {getTimelineElements()}
          {!loadMoreExecuted && (
            <VerticalTimelineElement
              iconOnClick={loadMore}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={plusico}
                    alt={"load more"}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
              iconStyle={{ background: "#fafafa" }}
              shadowSize='small' // small, medium or large
            />
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
