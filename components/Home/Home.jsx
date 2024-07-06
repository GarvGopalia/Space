import "./Home.css";
import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="body-container">
            <div className="para">
                <p>SO, YOU WANT TO TRAVEL TO</p>
                <p>SPACE</p>
                <br />
                <p>Let's face it; if you want to go to space, you might as well genuinely go <br /> to outer space and not hover kind of on the edge of it. Well sit back, <br /> and relax because we'll give you a truly out of this world experience!</p>
            </div>

            <div className="explore">
                <button className="explore-1st"><Link to="/destination" className="link">EXPLORE</Link></button>
            </div>
        </div>
    )
};

export default Home;
