import React from 'react';
import "../Destination/Destination.css";
import marsImage from '../../assets/destination/image-mars.png';
import { Link } from 'react-router-dom';

const Mars = () => {
    return (
        <div className='body-dest'>
            <div className="header">
                <div className="body-h2">
                    <p>01  PICK YOUR DESTINATION</p>
                </div>
            </div>
            <div className="content">
                <div className="dest-img">
                   <img src={marsImage} alt="not found" /> 
                </div>
                <div className="info">
                    <div className="dest-btns">
                        <button className='moon'><Link to="/moon" className='link'>MOON</Link></button>
                        <button className='mars'><Link to="/mars" className='link'>MARS</Link></button>
                        <button className='europa'><Link to="/europa" className='link'>EUROPA</Link></button>
                        <button className='titan'><Link to="/titan" className='link'>TITAN</Link></button>
                    </div>
                    <div className="heading">
                        <p>MARS</p>
                    </div>
                    <div className="dest-desc">
                        <p> Don’t forget to pack your hiking boots. You’ll need them to <br />
                            tackle Olympus Mons, the tallest planetary mountain in   <br /> 
                            our solar system. It’s two and a half times the size of <br />
                             Everest!
                        </p>
                        <br />
                        <hr />
                    </div>
                    <div className="details">
                        <div className="dest-dist">
                            <p> AVG. DISTANCE </p>
                            <h5>225 mil. km</h5>
                        </div>
                        <div className="dest-time">
                            <p> EST. TRAVEL TIME</p>
                            <h5>9 months</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mars;