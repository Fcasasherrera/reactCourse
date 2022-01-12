import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
// http://127.0.0.1:5000/getHolaMundo
const App = () => {
  useEffect(() => {
    
  }, []);
  const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png");
  const [form, setForm] = useState({
    name: 'nombre',
    password: 'password',
  });
  const getPokemon = async () => {
    let response;
    try {
      response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    } catch (error) {
      console.log(error);
    }
    const { data } = response
    setImg(data.sprites.front_shiny);
    console.log(img);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={getPokemon}
          className="App-link"
        >
          getPokemon
        </button>
      </header>
    </div>
  );
}

export default App;
