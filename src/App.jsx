import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Kosar from './Pages/Kosar/Kosar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Favorit from './Pages/Favorits/Favorit'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          {/* //Milyen routokat akarunk (pl Home,Contacts,stb....) */}
          
          <Route path="/" element={<Home />} />
          <Route path='/Kosar' element={<Kosar/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Favorit' element={<Favorit/>}/>

          
        </Routes>

      </Router>
    </div>
  );
}

export default App;
