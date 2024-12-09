import React, { useState } from 'react';
import './Regisztracio.css'; // Import the CSS
import WizzardLogo from "/src/assetek/wizzard.png"; // Path to your image
import { Link } from 'react-router-dom';

const Regisztracio = () => {
  
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  return (
    <>
      <div className="Homaly">
        <div className="RegisztraciosPult">
          <Link to='/'>
            <img src={WizzardLogo} alt="Logo" />
          </Link>
          
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Jelszó" required />
          <input type="phone" placeholder="Telefonszám" required />
          <input type="text" placeholder="Lakhely" required />

          <text className='SzuletesiDatum'>Születési dátum </text>
          <div className="birthdate-container">


            <select 
              value={birthYear} 
              onChange={(e) => setBirthYear(e.target.value)} 
              required
            >
              <option value="">Év</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <select 
              value={birthMonth} 
              onChange={(e) => setBirthMonth(e.target.value)} 
              required
            >
              <option value="">Hónap</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select 
              value={birthDay} 
              onChange={(e) => setBirthDay(e.target.value)} 
              required
            >
              <option value="">Nap</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <button type="button">Regisztráció</button>
        </div>
      </div>
    </>
  );
}

export default Regisztracio;
