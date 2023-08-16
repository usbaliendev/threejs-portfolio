import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import PreLoader from "./components/PreLoader";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
  Footer,
  ScrollToTop,
} from "./components";

const App = () => {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsloading(false);
      }, 1500); // You can adjust the duration as needed
    };
    // Clean up the timeout when the component unmounts
    fakeDataFetch();
  }, []);

  return (
    <>
      {isloading ? (
        <PreLoader />
      ) : (
        <BrowserRouter>
          <div className='relative z-0 '>
            <div className='bg-hero-pattern opacity-80 bg-cover bg-fixed bg-center'>
              <Navbar />
              <ScrollToTop />
              <Hero />
              <About />
              <Tech />
              <Experience />
              <Projects />
              {/* <Feedbacks /> */}
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
