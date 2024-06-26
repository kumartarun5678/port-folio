import react from 'react';
import { useTheme } from '../../Context/ThemeContext';
import Typewriter from 'typewriter-effect';
import Fade from "react-reveal/Fade";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import './Home.css'
import Resume from '../../Assets/Docs/Tarun_resume.pdf'
const Home =() =>{
    const [theme, setTheme] = useTheme();
    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };
    return(
        <>
            <div className="container-fluid home-container" id='home'>
            <div className="theme-btn" onClick={handleTheme}>
                {theme === "light" ? (
                    <BsFillMoonStarsFill size={30} />
                ) : (
                    <BsFillSunFill size={30} />
                )}
            </div>
                <div className="container home-content">
                    <Fade right>
                        <h2>Hi I'm Tarun's</h2>
                        <h1>
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer!', 
                                        'MERN Stack Developer!',
                                            'Artificial Intelligence!',
                                            'Machine Learning!',
                                            'Data Science!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </h1>
                    </Fade>
                    <Fade buttom>
                    <div className="home-buttons">
                        <button className='btn btn-hire'>Hire Me</button>
                        <a className='btn btn-cv' href={Resume} download="Tarun_resume.pdf" >My Resume</a>
                    </div>
                    </Fade>
                </div>
            </div>
        </>
    );
}
export default Home;