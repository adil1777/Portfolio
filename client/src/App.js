import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import TechStack from './pages/TechStack/TechStack';
import WorkExp from './pages/WorkExp/WorkExp';

function App() {
  return (
    <>
      <Layout/>
      <div className="container">
        <About/>
        <Education/>
        <TechStack/>
        <Projects/>
        <WorkExp/>
      </div>
     
    </>
  );
}

export default App;
