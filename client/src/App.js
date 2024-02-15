import "./App.css";
import Layout from "./components/Layout/Layout";
import MobileNav from "./components/MobileNav/MobileNav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import {Zoom} from "react-awesome-reveal";

function App() {
  return (
    <>
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <Education />
        <TechStack />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
      {/* =============== Footer ===================== */}
      <div className="footer pb-3 ms-3">
      <Zoom>
        <h4 className="text-center">
          MOHD ADIL &copy;2023ADIL. All Rights Reserved
        </h4>
        </Zoom>
      </div>

      <ScrollToTop
        color="red"
        style={{ backgroundColor: "#138781", borderRadius: "70px" }}
        smooth
      />
    </>
  );
}

export default App;
