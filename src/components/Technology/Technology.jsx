import React, {useState}from 'react';
import "./Technology.css";
import techData from './TechnologyData';

const Technology = () => {
    const [tech, setTech] = useState("Vehicle")
    return (
        <div className='body-tech'>
            <p className='tech-head'>
                <span className='tech-head-span'>03</span> &nbsp; SPACE LAUNCH 101
            </p>
            <div className="tech-content-container">
                <div className="tech-content">
                    <div className="tech-button">
                        <button className='tech-btn'
                            id='Vehicle' onClick={() => {
                                setTech("Vehicle")
                            }}>
                                1
                        </button>
                        <button className='tech-btn'
                            id='Capsule' onClick={() => {
                                setTech("Capsule")
                            }}>
                                2
                        </button>
                        <button className='tech-btn'
                            id='Port' onClick={() => {
                                setTech("Port")
                            }}>
                                3
                        </button>
                    </div>
                    <div className="tech-details">
                        <h3 className='tech-name'>{techData[tech].name}</h3>
                        <h1 className='tech-title'>{techData[tech].title}</h1>
                        <p className='tech-description'>{techData[tech].description}</p>
                    </div>
                </div>
                <div className="techimage">
                    <img className='image' src={techData[tech].image} alt={"Image of" + tech} />
                </div>
            </div>
        </div>
    )
}

export default Technology;