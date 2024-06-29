import React from 'react';
import "./Crew.css";
import crewData from './CrewData';
import {useState} from "react";

const Crew = () => {
    const [crew, setCrew] = useState("Commander");
    return (
        <div className='body-crew'>
            <p className='crew-head'>
                <span className='crew-head-span'>02</span> &nbsp; MEET THE CREW
            </p>
            <div className="crew-content-container">
                <div className="crew-content">
                    <div className="crew-details">
                        <h3 className='crew-title'>{crewData[crew].title}</h3>
                        <h1 className='crew-name'>{crewData[crew].name}</h1>
                        <p className='crew-description'>{crewData[crew].description}</p>
                    </div>
                    <div className="crew-button">
                        <button className='crew-btn' 
                            id='Commander' onClick={() => {
                                setCrew("Commander");
                            }}
                        ></button>
                        <button className='crew-btn'
                            id='Specialist' onClick={() => {
                                setCrew("Specialist");
                            }}
                        ></button>
                        <button className='crew-btn'
                            id='Pilot' onClick={() => {
                                setCrew("Pilot");
                            }}
                        ></button>
                        <button className='crew-btn'
                            id='Engineer' onClick={() => {
                                setCrew("Engineer");
                            }}
                        ></button>
                    </div>
                </div>
                <div className="crew-img">
                    <img 
                        src={crewData[crew].image} alt={"Image of" + setCrew} />
                </div>
            </div>
        </div>
    )
}

export default Crew;