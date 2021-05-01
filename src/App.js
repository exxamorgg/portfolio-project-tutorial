import './App.css';
import '/Users/magistechnology/portfolio/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Particals from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Knowledge from "./components/Knowledge";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";


function App() {
  return (
    <>
      <Particals
      className="partical-canvas"
      params={{
        particles:{ 
          number:{
            value: 30,
            density:{
              enable: true,
              value_area: 900
            }
          },
          shape:{
            type: "circle",
            stroke: {
              width: 19,
              color: "#f9ab00"
            }
          }
        }
      }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Knowledge />
      <Experience />
      <Portfolio />
      <ContactMe />
    </>
  );
}

export default App;
