import React from 'react';
import "../Destination/Destination.css";
import europaImage from '../../assets/destination/image-europa.png';
import { Link } from 'react-router-dom';

const Europa = () => {
    return (
        <div className='body-dest'>
            <div className="header">
                <div className="body-h2">
                    <p>01  PICK YOUR DESTINATION</p>
                </div>
            </div>
            <div className="content">
                <div className="dest-img">
                   <img src={europaImage} alt="not found" /> 
                </div>
                <div className="info">
                    <div className="dest-btns">
                        <button className='moon'><Link to="/moon" className='link'>MOON</Link></button>
                        <button className='mars'><Link to="/mars" className='link'>MARS</Link></button>
                        <button className='europa'><Link to="/europa" className='link'>EUROPA</Link></button>
                        <button className='titan'><Link to="/titan" className='link'>TITAN</Link></button>
                    </div>
                    <div className="heading">
                        <p>EUROPA</p>
                    </div>
                    <div className="dest-desc">
                        <p> The smallest of the four Galilean moons orbiting Jupiter,  <br />
                        Europa is a winter lover’s dream. With an icy surface, it’s   <br /> 
                        perfect for a bit of ice skating, curling, hockey, or simple  <br />
                        relaxation in your snug wintery cabin.
                        </p>
                        <br />
                        <hr />
                    </div>
                    <div className="details">
                        <div className="dest-dist">
                            <p> AVG. DISTANCE </p>
                            <h5>628 mil. km</h5>
                        </div>
                        <div className="dest-time">
                            <p> EST. TRAVEL TIME</p>
                            <h5>3 years</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Europa;