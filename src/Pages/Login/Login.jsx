

import React from 'react';
import { Link, Router } from 'react-router-dom';
import "./Login.css";
import WizzardLogo from "/src/assetek/wizzard.png";

const Login = () => {
  return (
    <>
      <div className="Homaly">
        <div className="BejelentkezesPult">
          <Link to='/'>
            <img src={WizzardLogo} />
          </Link>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Jelszó" />
          <Link to="/Regisztracio" className="register-link">Regisztrálj itt!</Link>
          <button type="button">Bejelentkezés</button>
          <div className='alszoveg'>
            <text> Nincs fiókod?</text>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;