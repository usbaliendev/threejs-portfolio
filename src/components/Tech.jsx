import { TechCircles } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* <ul className='grid grid-cols-6 gap-2 px-1'> */}
      <ul className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className={`w-28 h-28 hover:${technology.name}`}
            key={technology.name}>
            <TechCircles technology={technology} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SectionWrapper(Tech, "");
