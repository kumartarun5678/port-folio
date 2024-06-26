import Layout from "./Components/Layout/layout";
import About from "./Pages/About/About";
import TechStack from "./Pages/TechStack/TechStack";
import Project from "./Pages/Project/Project";
import Educations from "./Pages/Educations/Educations";
import WorkExp from "./Pages/WorkExp/WorkExp";
import Contact from "./Pages/Contact/Contanct";
import Tada from 'react-reveal/Tada'; 
import ScrollToTop from 'react-scroll-to-top';
import Research from "./Pages/Research/Research";
import Course from "./Pages/Course/Course";
import { useTheme } from "./Context/ThemeContext";
import MobileNav from "./Components/MobileNav/MobileNav";
function App(){
  const [Theme] =useTheme();
  return(
    <> 
    <div id={Theme}>
      <MobileNav/>
      <Layout/>
      <div className="container">
          <About/>
          <Educations/>
          <TechStack/>
          <Course/>
          <WorkExp/>
          <Project/>
          <Research/>
          <Contact/>
      </div>
      <div className="footer pb-3 ms-3">
            <Tada>
              <h4 className="text-center">Copy Right &copy; {new Date().getFullYear()} </h4>
            </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}
 
export default App;