import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import IMG1 from '../../assets/images/imageproject.jpeg'
import IMG2 from '../../assets/images/imageproject-2.jpeg'
import IMG3 from '../../assets/images/TicTacToe.jpeg'
import IMG4 from '../../assets/images/proxyServer2.jpeg'
import IMG5 from '../../assets/images/dataTransfer.jpeg'
import IMG6 from '../../assets/images/Stress-Meter.jpeg'
import IMG7 from '../../assets/images/Universe.jpg'
import IMG8 from '../../assets/images/codeVisualizer.jpg'

const Project = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(
            () => setLetterClass('text-animate-hover'), 
            3000
          );
      }, [])
      
    return (
        <>
            <div className='container project-page'>
                <div className='text-zone-p'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className='divi'>
                         <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG8} alt=''/>
                            </div>
                            <h3>Visual DOM Representation (VDR) </h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/CodeVisualizerVDR' className='btn' target='blank'>Github</a>
                            </div>
                        </article>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG7} alt=''/>
                            </div>
                            <h3>Pet Universe</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/anniecee/petuniverse' className='btn' target='blank'>Github</a>
                                <a href='https://sites.google.com/view/cmpt362-petuniverse?usp=sharing' className='btn' target='blank'>Info</a>
                            </div>
                        </article>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG6} alt=''/>
                            </div>
                            <h3>Stress Meter - Mobile Application</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/Stress-Meter' className='btn' target='blank'>Github</a>
                            </div>
                        </article>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG4} alt=''/>
                            </div>
                            <h3>Web & Web Proxy</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/Web-Server' className='btn' target='blank'>Github</a>
                            </div>
                        </article>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG5} alt=''/>
                            </div>
                            <h3>Pipelined Reliable Transfer Protocol</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/Pipelined-Reliable-Transfer-Protocol' className='btn' target='blank'>Github</a>
                            </div>
                        </article>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG3} alt=''/>
                            </div>
                            <h3>Tic-Tac-Toe</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/Tic-Tac-Toe' className='btn' target='blank'>Github</a>
                            </div>
                    </article>
                        <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG2} alt=''/>
                            </div>
                            <h3>Memory Lane App</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://csil-git1.cs.surrey.sfu.ca/it-just-works/cmpt-276' className='btn' target='blank'>Github</a>
                            </div>
                    </article>
                    <article className='portfolio-item'>
                            <div className='portfolio-item-image'>
                                <img src={IMG1} alt=''/>
                            </div>
                            <h3>Database Project</h3>
                            <div className='portfolio-item-cta'>
                                <a href='https://github.com/karanjhand/ClinicDatabase' className='btn' target='blank'>Github</a>
                            </div>
                    </article>
                    </div>
                
                </div>
                
                
            <Loader type='pacman'/>
        </>
    )
}

export default Project

