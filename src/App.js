import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import { useState,  useEffect } from 'react';
import axios from "axios";
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Form from './components/Form';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'd6d6515605bf.606b5697773b7fac056b';
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unaPassword';
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
 
  const [characters, setCharacters] = useState([]);
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert('¡No hay personajes con este ID!');
        }
      });
  }
  const onClose = (id) => {
    const charactersFiltered = characters.filter(character =>
      character.id !== (id));
    setCharacters(charactersFiltered);
  }
  
  
  
  return (
    <div className='App'>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
