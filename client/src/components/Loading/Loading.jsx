import React from "react";
import loading from "../../assets/icons/loadinggg.gif";
import style from'./Loading.module.css';

export default function Loading(){
    return(
        <div className={style.loading}>
            <img src={loading} alt="loading" />
        </div>
    )
}