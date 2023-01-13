import React from "react";
import {Link} from "react-router-dom";
import style from './Landing.module.css';
//import LandingNew from '../../assets/img';

export default function Landing() {
    return (
        <div className={style.landing}>
                {/* <h1 className={style.title}>Welcome to Food App</h1> */}
                <Link to="/home"><button className={style.button}>Let's start</button></Link>
         </div>
    )
}

