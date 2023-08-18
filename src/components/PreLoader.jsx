import Lottie, { useLottie } from "lottie-react";

import greekloading from "../assets/greek-animation.json";

const PreLoader = () => {
  return (
    <div>
      <div className='preloader w-screen h-screen bg-black z-50 text-white fixed top-0 left-0 flex flex-col justify-center items-center'>
        <Lottie
          animationData={greekloading}
          loop={true}
          autoPlay={true}
          style={{ color: "#ffffff", height: "75px", width: "75px" }}
        />
        <span className='text-white mt-4'>Loading...</span>
      </div>
    </div>
  );
};

export default PreLoader;
