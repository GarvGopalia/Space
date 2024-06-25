import React from 'react';
import "./Destination.css";
import moonImage from '../../assets/destination/image-moon.png';
import { Link } from 'react-router-dom';

const Destination = () => {

    return (
        <div className='body-dest'>
            <div className="header">
                <div className="body-h2">
                    <p>01  PICK YOUR DESTINATION</p>
                </div>
            </div>
            <div className="content">
                <div className="dest-img">
                   <img src={moonImage} alt="not found" /> 
                </div>
                <div className="info">
                    <div className="dest-btns">
                        <button className='moon'><Link to="/moon" className='link'>MOON</Link></button>
                        <button className='mars'><Link to="/mars" className='link'>MARS</Link></button>
                        <button className='europa'><Link to="/europa" className='link'>EUROPA</Link></button>
                        <button className='titan'><Link to="/titan" className='link'>TITAN</Link></button>
                    </div>
                    <div className="heading">
                        <p>MOON</p>
                    </div>
                    <div className="dest-desc">
                        <p> See our planet as you’ve never seen it before. A perfect <br />
                            relaxing trip away to help regain perspective and come <br /> 
                            back refreshed. While you’re there, take in some history <br />
                            by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                        <br />
                        <hr />
                    </div>
                    <div className="details">
                        <div className="dest-dist">
                            <p> AVG. DISTANCE </p>
                            <h5>384,400 KM</h5>
                        </div>
                        <div className="dest-time">
                            <p> EST. TRAVEL TIME</p>
                            <h5>3 DAYS</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;