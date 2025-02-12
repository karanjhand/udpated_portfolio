import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FaAngular, FaCss3, FaGitAlt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'
import Loader from 'react-loaders'
import { FaUsers } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa'

const About = () => {
    
    const[letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(
            () => setLetterClass('text-animate-hover'), 
            3000
          );
      }, [])

    return ( 
        <>

            <div className='about container'>
                <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                            letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                                idx={15}
                            />
                        </h1>
                        <p> <b>
                            Innovative, task-driven professional with experience in making mobile phone apps and websites. 
                            Currently pursuing computer science degree at SFU. Proficient in developing and
                            maintaining databases, creating user interfaces, writing, and testing codes and 
                            troubleshooting simple/complex issues through ingenious innovation.
                            </b>
                        </p>
                        

                        <div className='division-a'>
                            <article className='education'>
                                <div className='text-center'>
                                    <FaAward className = 'about-icon'/>
                                </div>
                                <h3>Education</h3>
                                <div className='edu text-center'>
                                    <div>
                                    <h4>Simon Fraser University </h4>
                                    <h5>Bachelors of Science: Computer Science (2022 - Present)</h5>
                                    </div>
                                    <div>
                                    <h4>Langara College </h4>
                                    <h5>Associates of Science: Computer Science (2018 - 2020)</h5>
                                    </div>
                                </div>
                            </article>
                            
                            <article className='education'>
                                <div className='text-center'>
                                    <FaUsers className = 'about-icon'/>
                                </div>
                                <h3>Experience</h3>
                                <div className='edu text-center'>
                                <div>
                                        <h4>IT Technician </h4>
                                        <h5> Simon Fraser University</h5>
                                        <h5>(January 2023 - Present)</h5>
                                    </div>
                                    <div>
                                        <h4>Software Developer Co-op</h4>
                                        <h5>Natural Resources Canada (Department: National Forest Information System)</h5>
                                        <h5>(May 2023 - December 2023)</h5>
                                    </div>
                                    
                                    <div>
                                    <h4>Team Lead (Technical Support) </h4>
                                    <h5>24-7Intouch</h5>
                                    <h5>(July 2021 - December 2021)</h5>
                                    </div>
                                    <div>
                                    <h4>Technical Support Customer Advisor (Tier 2) </h4>
                                    <h5>24-7Intouch</h5>
                                    <h5>(August 2020 - June 2021)</h5>
                                    </div>
                                </div>
                            </article>
                        </div>
                        
                    </div>



                    <div className='stage-cube-cont'>
                        <div className='cubespinner'>
                            <div className='face1'>
                                {/* <FontAwesomeIcon icon={FaAngular} color='#DD0031'/> */}
                                <FaAngular className='Angular'/>
                            </div>
                            <div className='face2'>
                                {/* <FontAwesomeIcon icon={FaHtml5} color='#F06529'/> */}
                                <FaHtml5/>
                            </div>
                            <div className='face3'>
                                {/* <FontAwesomeIcon icon={FaCss3} color='#28A4D9'/> */}
                                <FaCss3/>
                            </div>
                            <div className='face4'>
                                {/* <FontAwesomeIcon icon={FaReact} color='#5ED4F4'/> */}
                                <FaReact/>
                            </div>
                            <div className='face5'>
                                {/* <FontAwesomeIcon icon={FaJsSquare} color='#EfD81D'/> */}
                                <FaJsSquare/>
                            </div>
                            <div className='face6'>
                                {/* <FontAwesomeIcon icon={FaGitAlt} color='#Ec4D28'/> */}
                                <FaGitAlt/>
                            </div>
                        </div>

                    </div>

                    <div className='yo'>
                    </div>
                

            </div>
        
            {/* <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p> 
                        Innovative, task-driven professional with experience in making mobile phone apps and websites. 
                        Currently pursuing a computer science degree at SFU. Proficient in developing and
                         maintaining cloud databases, creating user interfaces, writing, and testing codes and 
                         troubleshooting simple/complex issues through ingenious innovation.
                    </p>
                    

                    <div className='division-a'>
                        <article className='education'>
                            <FaAward className = 'about-icon'/>
                            <h3>Education</h3>
                            <div className='edu'>
                                <h4>Langara College </h4>
                                <h4>(2018 - 2021)</h4>
                                <h4>Simon Fraser University </h4>
                                <h4>(2021 - present)</h4>
                            </div>
                        </article>

                        <article className='education'>
                            <FaUsers className = 'about-icon'/>
                            <h3>Experience</h3>
                            <div className='edu'>
                                <h4>Team Lead (Technical Support) </h4>
                                <h4>24-7Intouch (2021 - 2021)</h4>
                                <h4>Technical Support Customer Advisor (Level 2) </h4>
                                <h4>24-7Intouch (2020 - 2021</h4>
                            </div>
                        </article>
                    </div>
                    
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EfD81D'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#Ec4D28'/>
                        </div>
                    </div>

                </div>

            </div> */}
            
            <Loader type='pacman'/>
        </>
    )
}

export default About