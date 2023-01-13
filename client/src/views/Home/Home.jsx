import React  from "react";
import Paginado from "../../components/Paginado/Paginado";
import Recipes from "../../components/Recipes/Recipes";
import ResetButton from "../../components/Reset/ResetButton";
import NavBar from '../NavBar/NavBar';
import style from './Home.module.css'

export default function Home() {
    return (
        <div className={style.home}>
            <div>
                <NavBar />
                <ResetButton/>
            </div>
            <div>
                <Paginado />
            </div>
          
            <div>
                <Recipes/>
            </div>
           
        </div>
    )
}

            
   



