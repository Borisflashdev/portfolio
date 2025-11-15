import './App.css';

import AboutMe from "./comonents/AboutMe/AboutMe.tsx";
import Terminal from "./comonents/Terminal/Terminal.tsx";
import Help from "./comonents/Help/Help.tsx";
import Portfolio from "./comonents/Portfolio/Portfolio.tsx";

function App() {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
          <div className="main main-container flex flex-col md:flex-row">
              <div className="">
                  <AboutMe/>
              </div>
              <div className="flex flex-col flex-1 w-full md:w-2/4 pb-20">
                  <Portfolio/>
                  <Terminal/>
                  <Help/>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
