import React from "react";
import style from './PageError.module.css';
import { Link } from "react-router-dom";
import error404 from '../../assets/img/error4042.jpg';



export default function PageError({location}) {
    return (
        <div>
            <div className={style.error__container}>
                <img className="error__img" src={error404} alt="Page Error" />
                <h2 className="error__secondTitle">Ooops, the page you are looking for does not exist</h2>
                <h3 className="error__details">The requested URL <code>{location.pathname}</code> was not found on this server.</h3>
                <Link to="/home" className="error__link"><button className={style.error__button}>Go to Home</button></Link>
            </div> 

        </div>
    );
}


