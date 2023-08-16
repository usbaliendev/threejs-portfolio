import { BrowserRouter } from "react-router-dom";

import PreLoader from "./components/PreLoader";

const App = () => {
  return (
    <BrowserRouter>
      <PreLoader />
    </BrowserRouter>
  );
};

export default App;
