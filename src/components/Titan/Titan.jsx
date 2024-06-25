import React from 'react';
import "../Destination/Destination.css";
import titanImage from '../../assets/destination/image-titan.png';
import { Link } from 'react-router-dom';

const Titan = () => {
    return (
        <div className='body-dest'>
            <div className="header">
                <div className="body-h2">
                    <p>01  PICK YOUR DESTINATION</p>
                </div>
            </div>
            <div className="content">
                <div className="dest-img">
                   <img src={titanImage} alt="not found" /> 
                </div>
                <div className="info">
                    <div className="dest-btns">
                        <button className='moon'><Link to="/moon" className='link'>MOON</Link></button>
                        <button className='mars'><Link to="/mars" className='link'>MARS</Link></button>
                        <button className='europa'><Link to="/europa" className='link'>EUROPA</Link></button>
                        <button className='titan'><Link to="/titan" className='link'>TITAN</Link></button>
                    </div>
                    <div className="heading">
                        <p>TITAN</p>
                    </div>
                    <div className="dest-desc">
                        <p> The only moon known to have a dense atmosphere other   <br />
                        than Earth, Titan is a home away from home (just a few   <br /> 
                            hundred degrees colder!). As a bonus, you get striking <br />
                            views of the Rings of Saturn.
                        </p>
                        <br />
                        <hr />
                    </div>
                    <div className="details">
                        <div className="dest-dist">
                            <p> AVG. DISTANCE </p>
                            <h5>1.6 BIL. KM</h5>
                        </div>
                        <div className="dest-time">
                            <p> EST. TRAVEL TIME</p>
                            <h5>7 YEARS</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Titan;