import React from 'react'
import {Link} from 'react-router-dom'

import "../Components/NavBar.css";


import Logo from "../assetek/wizzard.png";
import Kosar from "../assetek/kosar2.png";
import Person from "../assetek/person.png";
import Favorit from "../assetek/sziv.png";
import ASUS from "../assetek/asus_laptop_kep/laptop.jpg";



const Navbar = () => {
  return (
    <div className="navbar">
    <div className="BalOldal">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
 
   <div className="JobbOldal">
   
        <Link to="/Profile">
          <img src={Person}/>
        </Link>
        <Link to="/Favorits"> 
          < img src={Favorit}/>
        </Link>
        <Link to="/Kosar"> 
          <img src={Kosar} />
        </Link>
      </div>

    <div className="KeresoFelulet">
      <input  type='text'  placeholder=" Search....."></input>

    </div>
   
      
    </div>
  )
}

export default Navbar

