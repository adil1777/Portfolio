import './App.css';
import Layout from './components/Layout/Layout';
import MobileNav from './components/MobileNav/MobileNav';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import TechStack from './pages/TechStack/TechStack';
import WorkExp from './pages/WorkExp/WorkExp';
import ScrollToTop from "react-scroll-up-to-top";


function App() {
  return (
    <>
      <MobileNav/>
      <Layout/>
      <div className="container">
        <About/>
        <Education/>
        <TechStack/>
        <Projects/>
        <WorkExp/>
        <Contact/>
      </div>
      <ScrollToTop 
        color="red"
        style={{backgroundColor:"#138781" , borderRadius:"70px"}}
      smooth />
     
    </>
  );
}

export default App;
