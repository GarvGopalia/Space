import React from 'react';
import "./Destination.css";
import {useState} from "react";
import data from "./DestinationData";

const Destination = () => {
    const [place, setPlace] = useState("Moon");

    return (
        <div className='body-dest'>
            <div className="header">
                <div className="body-h2">
                    <p>01  PICK YOUR DESTINATION</p>
                </div>
            </div>
            <div className="content">
                <div className="dest-img">
                   <img 
                        src={data[place].img} alt={"image of" + place} />
                </div>
                <div className="info">
                    <div className="dest-btns">
                        <button 
                            id='Moon' onClick={() => {
                                setPlace("Moon");
                            }}
                        >
                            MOON
                        </button>
                        <button 
                            id='Mars' onClick={() => {
                                setPlace("Mars");
                            }}
                        >
                            MARS
                        </button>
                        <button 
                            id='Europa' onClick={() => {
                                setPlace("Europa");
                            }}
                        >
                            EUROPA
                        </button>
                        <button 
                            id='Titan' onClick={() => {
                                setPlace("Titan");
                            }}
                        >
                            TITAN
                        </button>
                    </div>
                    <div className="heading">
                        <p>{data[place].title}</p>
                    </div>
                    <div className="dest-desc">
                        <p>{data[place].description}</p>
                        <br />
                        <hr />
                    </div>
                    <div className="details">
                        <div className="dest-dist">
                            <p> AVG. DISTANCE </p>
                            <h5>{data[place].distance}</h5>
                        </div>
                        <div className="dest-time">
                            <p> EST. TRAVEL TIME</p>
                            <h5>{data[place].travel}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;