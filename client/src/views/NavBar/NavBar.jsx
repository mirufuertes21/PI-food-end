import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import style from './NavBar.module.css'
import logo from '../../assets/img/logo.png'

const NavBar = () => {
  return (
    <div>
      <div className={style.navbar}>

    <div className={style.navbar__left}> 
          <Link to="/home" className="navbar__link"></Link>
             {/* <img src={logo} alt="logo" className="navbar__logo" /> */}
          <Link to="/recipe" className={style.navbar__link}> <p> Create Recipe</p></Link>
    </div>
        <div className="navbar__search">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};


export default NavBar
