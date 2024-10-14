import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nombre = useRef();
  const empezar = useNavigate();

  const guardar = () => {
    if (nombre.current.value) {
      empezar('/game', { state: { nombre: nombre.current.value } });
    }
  };

  return (
    <div className="home">
      <h1>Ingresa tu nombre</h1>
      <input className="input" placeholder="Tu nombre" ref={nombre} />
      <button className="guardar" onClick={guardar}>Jugar</button>
    </div>
  );
};

export default Home;
