import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-20 right-5 z-20'>
      <button
        type='button'
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-transparent hover:animate-twatterfall hover:bg-gradient-to-b hover:drop-shadow-none focus:drop-shadow-none active:drop-shadow-none from-[#067ad9] via-[#0a4235] to-[#52df71] inline-flex items-center rounded-full p-1 text-white shadow-sm transition-opacity drop-shadow-[0_0_2px_#000]`}>
        <BsFillArrowUpCircleFill className='h-10 w-10' aria-hidden='true' />
      </button>
    </div>
  );
};

export default ScrollToTop;
