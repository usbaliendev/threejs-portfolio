import { BrowserRouter } from "react-router-dom";

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
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative z-20  bg-cover bg-no-repeat bg-center'>
          <div className='relative z-40'>
            <Navbar />
          </div>
          <Hero />
          <About />
          <Tech />
          <Experience />
          <Projects />
          {/* <Feedbacks /> */}
          <Contact />
        </div>
        <StarsCanvas />
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
